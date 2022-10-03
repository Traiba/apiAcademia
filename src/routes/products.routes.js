const { Router } = require("express");
const {
  getUsuarios,
  createUsuario,
  getProductById,
  deleteUsuarioById,
  getTotalProducts,
  updateUsuarioById,
} = require("../controllers/products.controller");

const router = Router();

router.get("/academia", getUsuarios); //funciona

router.post("/academia", createUsuario); //funciona

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/academia/:id", deleteUsuarioById); // funciona

router.put("/academia/:id", updateUsuarioById);

module.exports = router;
