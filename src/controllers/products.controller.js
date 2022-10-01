const { getConnection, sql } = require("../database/connection");
const querys = require("../database/querys");

const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const createNewProduct = async (req, res) => {
  const {nome,idade,telefone,email,peso,senha,imagem,idGenero,idObjetivo} = req.body;
  

  // validating
  if (nome == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nome", sql.VarChar, nome)
      .input("idade", sql.Int, idade)
      .input("telefone", sql.VarChar, telefone)
      .input("email", sql.VarChar, email)
      .input("peso", sql.Float, peso)
      .input("senha", sql.VarChar, senha)
      .input("imagem", sql.NVarChar, imagem)
      .input("idGenero", sql.Int, idGenero)
      .input("idObjetivo", sql.Int, idObjetivo)
      
      .query(querys.addNewProduct);

    res.json({ nome ,idade,telefone,email,peso,senha,imagem,idGenero,idObjetivo });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getTotalProducts = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalProducts);
  console.log(result);
  res.json(result.recordset[0][""]);
};

const updateProductById = async (req, res) => {
  const { nome, idade,telefone,email,peso,senha,imagem,idGenero,idObjetivo } = req.body;
  const { nomerecebido } = req.params;

  // validating
  if (idade == null || nome == null || peso == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    await pool
      .request()
      .input("nomeRecebido", sql.VarChar, nomerecebido)
      .input("nome", sql.VarChar, nome)
      .input("idade", sql.Int, idade)
      .input("telefone", sql.VarChar, telefone)
      .input("email", sql.VarChar, email)
      .input("peso", sql.Float, peso)
      .input("senha", sql.VarChar, senha)
      .input("imagem", sql.VarChar, imagem)
      .input("idGenero", sql.Int, idGenero)
      .input("idObjetivo", sql.Int, idObjetivo)
      
      .query(querys.updateProductById);
    res.json({ nome ,idade,telefone,email,peso,senha,imagem,idGenero,idObjetivo });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


module.exports = {
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById
}