import produtoService from '../services/produto.service.js'

const getEntities = async (res) => {
    try {
        await produtoService.getAllProducts(res);
    } catch (err) {
        return res.status(500).json({ message: "Erro ao buscar os produtos." });
    }
}

const getEntitiesById = async (id, res) => {
    if (!id) return res.status(400).json({ message: "Id não informado!" })
    try {
        await produtoService.getProductById(id, res);
    } catch (err) {
        return res.status(500).json({ message: "Erro ao buscar o produtos." });
    }

}

const deleteEntity = async (id, res) => {
    if (!id) return res.status(400).json({ message: "Id não informado!" })
    try {
        await produtoService.deleteProduct(id, res)
    } catch (err) {
        return res.status(500).json({ message: "Erro ao deletar o produto." });
    }

}

const postEntity = async (req, res) => {

    if (!req.body || !req.body.email || !req.body.name || !req.body.telefone)
        return res.status(400).json({ message: "Faltando informações." });
    try {
        await produtoService.registerProduct(req, res)
    } catch (err) {
        return res.status(500).json({ message: "Erro ao salvar produto." + err });
    }
}

export default { getEntities, getEntitiesById, deleteEntity, postEntity }