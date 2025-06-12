import userService from '../services/user.service.js';


const saveEntity = async (req, res) => {
    if(!req.body || !req.body.name || !req.body.password || !req.body.email) 
        return res.status(400).json({message: "Faltando informações."});
    userService.register(req, res);
}

const loginEntity = async (req, res) => {
    
    if(!req.body || !req.body.password || !req.body.email) 
        return res.status(400).json({message: "Faltando informações."});

    userService.login(req, res);
}

export default {saveEntity, loginEntity}