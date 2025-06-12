import bcrypt from 'bcrypt';
import User from '../models/User.js'
import 'dotenv/config'
import jwt from 'jsonwebtoken';


const register = async (req, res) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { name, password, email } = req.body;

    if (!isPasswordValid(password)) {
        return res.status(400).json({ message: "A senha deve ter no mínimo 8 caracteres, uma letra maiúscula e um caractere especial." });
    }


    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        return res.status(400).json({ message: "E-mail já cadastrado" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "E-mail inválido" });
    }

    try {
        const registeredUser = await User.create({
            name,
            password: hashPassword,
            email
        });
        return res.status(201).json({ message: "Usuário criado!", user: registeredUser })
    } catch (error) {
        return res.status(500).json({ message: "Erro ao registrar usuário " + error })
    }
}

const login = async (req, res) => {

    const { email, password } = req.body

    try {
        console.log(email, password)
        const findUser = await User.findOne({ where: { email } });
        console.log(findUser)
        if (!findUser) return res.status(400).json({ message: "Usuário não achado!" })

        const match = await bcrypt.compare(password, findUser.password)

        if (!match) return res.status(400).json({ message: "Credenciais inválidas!" })
        const token = jwt.sign({ id: findUser.id }, process.env.JWT_SECRET, { expiresIn: '1hr' })
        return res.status(200).json({ message: "Usuário logado com sucesso!", token })

    } catch (error) {
        return res.status(400).json({ message: "Erro ao efetuar login " + error })
    }

}

function isPasswordValid(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasSpecialChar;
}

export default { register, login }