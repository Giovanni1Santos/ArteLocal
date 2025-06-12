import express from 'express'
import userController from '../controllers/user.controller.js'
import verifyToken from '../middleware/jwt.verify.token.js';
import protectedController from '../controllers/protected.controller.js'
import contatoController from '../controllers/contato.controller.js';
import produtoController from '../controllers/produto.controller.js';


const router = express.Router();

router.get("/protected", verifyToken, protectedController.getProtected);

router.post("/register", userController.saveEntity);

router.post("/login", userController.loginEntity);

//Router para produtos

router.get("/produtos", produtoController.getEntities);
router.post("/produtos", produtoController.postEntity);
router.delete("/produtos", produtoController.deleteEntity);
router.get("/produtos/:id", produtoController.getEntitiesById);


//Router para contatos

router.get("/contatos", verifyToken, contatoController.getEntities)

router.get("/contatos/:id", verifyToken, contatoController.getEntitiesById)

router.put("/contatos/:id", verifyToken, contatoController.putEntity)

router.post("/contatos", verifyToken, contatoController.postEntity)

router.patch("/contatos/:id", verifyToken, contatoController.patchEntity)

router.delete("/contatos/:id", verifyToken, contatoController.deleteEntity)

export default router