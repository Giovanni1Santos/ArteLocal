import contatoService from "../services/contato.service.js";

const getEntities = async(id, res) => {
    if(!id) return res.status(400).json({message: "Id não informado!"})
        try {
            await contatoService.getContactsByUserId(id, res);
          } catch (err) {
            return res.status(500).json({ message: "Erro ao buscar os contatos." });
          }
}

const getEntitiesById = async(id, res) =>{
    if(!id) return res.status(400).json({message: "Id não informado!"})
        try {
            await contatoService.getContactById(id, res);
          } catch (err) {
            return res.status(500).json({ message: "Erro ao buscar o contatos." });
        }

}

const putEntity = async (updatedData, id, res) => {
    if(!id) return res.status(400).json({message: "Id não informado!"})
    if(!updatedData) return res.status(400).json({message: "Valores não passados!"})
        try {
            await contatoService.putContact(updatedData, id, res)
          } catch (err) {
            return res.status(500).json({ message: "Erro ao atualizar o contatos." });
        }

}

const deleteEntity = async(id, res) => {
    if(!id) return res.status(400).json({message: "Id não informado!"})
        try {
            await contatoService.deleteContact(id, res)
          } catch (err) {
            return res.status(500).json({ message: "Erro ao deletar o contato." });
        }

}

const patchEntity = async(id, updatedData, res) => {
    if(!id) return res.status(400).json({message: "Id não informado!"})
    if(!updatedData) return res.status(400).json({message: "Valores não passados!"})
        try {
            await contatoService.updateContactPartial(id, updatedData, res)
          } catch (err) {
            return res.status(500).json({ message: "Erro ao atualizar o contatos (PATCH)" });
        }
}

const postEntity = async(req, res) => {

    if(!req.body || !req.body.email || !req.body.name || !req.body.telefone) 
    return res.status(400).json({message: "Faltando informações."});
    try {
        await contatoService.registerContact(req, res)
      } catch (err) {
        return res.status(500).json({ message: "Erro ao salvar contato."+err });
    }
}

export default {getEntities, getEntitiesById, putEntity, deleteEntity, patchEntity, postEntity}