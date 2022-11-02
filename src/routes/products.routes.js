const { Router } = require("express");
const {
  //EXERCICIOS
  getExercicios, 
  getExercicios50_150,
  getExercicios60_160,
  getExercicios70_170,
  getExerciciosPadrao,
  createExercicio,
  deleteExercicioById,
  updateExercicioById,
  ///USUARIOS
  getUsuarios, 
  createUsuario,
  getProductById,
  deleteUsuarioById,
  getTotalProducts,
  updateUsuarioByEmail,
  getUserByEmail
} = require("../controllers/products.controller");

const router = Router();
//EXERCICIOS
router.get("/exercicios", getExercicios);
router.get("/exercicios/50_150", getExercicios50_150);
router.get("/exercicios/60_160", getExercicios60_160);
router.get("/exercicios/70_170", getExercicios70_170);
router.get("/exercicios/80_180", getExerciciosPadrao);
router.post("/exercicios/post", createExercicio);
router.delete("/exercicios/:id", deleteExercicioById);
router.put("/exercicios/:id", updateExercicioById);
//USUARIOS
router.get("/academia", getUsuarios);
router.post("/academia/post", createUsuario); 
router.delete("/academia/:id", deleteUsuarioById); 
router.put("/academia/:email", updateUsuarioByEmail);
router.get("/academia/:email", getUserByEmail);

router.get("/products/count", getTotalProducts);
router.get("/products/:id", getProductById);



module.exports = router;
