const { Router } = require("express");
const {
  //EXERCICIOS
  getExercicios, 
  createExercicio,
  deleteExercicioById,
  updateExercicioById,
  ///USUARIOS
  getUsuarios, 
  createUsuario,
  getProductById,
  deleteUsuarioById,
  getTotalProducts,
  updateUsuarioById,
  getUserByEmail
} = require("../controllers/products.controller");

const router = Router();
//EXERCICIOS
router.get("/exercicios", getExercicios);
router.post("/exercicios/post", createExercicio);
router.delete("/exercicios/:id", deleteExercicioById);
router.put("/exercicios/:id", updateExercicioById);
//USUARIOS
router.get("/academia", getUsuarios);
router.post("/academia/post", createUsuario); 
router.delete("/academia/:id", deleteUsuarioById); 
router.put("/academia/:id", updateUsuarioById);
router.get("/academia/:email", getUserByEmail);

router.get("/products/count", getTotalProducts);
router.get("/products/:id", getProductById);



module.exports = router;
