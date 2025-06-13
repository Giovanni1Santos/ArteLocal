import Produto from '../models/Produto.js'

const registerProduct = async (req, res) => {

    const userId = req.userId;

    const { nome, descricao, disp } = req.body;

    const existingProduct = await Produto.findOne({ where: { nome, userId } });

    if (existingProduct) {
        return res.status(400).json({ message: "Produto já cadastrado" });
    }

    try {
        const createProduct = await Produto.create({
            nome,
            descricao,
            disp,
            userId
        });
        return res.status(201).json({ message: "Produto criado com sucesso!", product: createProduct })
    } catch (err) {
        return res.status(500).json({ message: "Erro ao criar o contato." })
    }
}

const deleteProduct = async (req, res) => {

    const id = req.params.id;
    const userId = req.userId;


    try {

        const result = await Produto.destroy({
            where: {
                id: id,
                userId: userId
            }
        });
        if (result === 0) {
            return res.status(404).json({ message: "Nenhum produto encontrado para excluir." });
        } else {
            return res.status(200).json({ message: "Produto excluído com sucesso!" });
        }

    } catch (err) {
        return res.status(500).json({ message: "Erro ao deletar o produto! " + err });
    }
}

const getProductById = async (req, res) => {

    const id = req.params.id;
    const userId = req.userId;
    try {
        const produto = await Produto.findOne({
            where: {
                id: id,
                userId: userId
            }
        });

        if (!produto) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }

        return res.status(200).json(produto);
    } catch (err) {
        return res.status(500).json({ message: "Erro ao buscar o produto: " + err.message });
    }
}

const getAllProducts = async (res) => {
    try {
        const produtos = await Produto.findAll();

        if (produtos.length === 0) {
            return res.status(404).json({ message: "Nenhum produto encontrado!" });
        }

        return res.status(200).json(produtos);
    } catch (err) {

        return res.status(500).json({ message: "Erro ao buscar produtos: " + err.message });
    }
}


export default { registerProduct, deleteProduct, getProductById, getAllProducts }