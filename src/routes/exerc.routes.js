const { Router } = require("express");
const {
  getExercicios,
  createExercicio,
  getProductById,
  deleteExercicioById,
  getTotalProducts,
  updateExercicioById,
} = require("../controllers/exercicios.controller");

const router = Router();

router.get("/exercicios", getExercicios); //funciona

router.post("/academia", createExercicio); //funciona

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/academia/:id", deleteExercicioById); // funciona

router.put("/academia/:id", updateExercicioById);

module.exports = router;
