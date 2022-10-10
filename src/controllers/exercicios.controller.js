const { getConnection, sql } = require("../database/connection");
const querys = require("../database/querysExerc");

const getExercicios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllExercicios);//aqui
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const createExercicio = async (req, res) => {
  const {nome,quantVezes,sessoes,idAmbiente,idObjetivo} = req.body;
  

  // validating
  if (nome == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nome", sql.VarChar, nome)
      .input("quantVezes", sql.Char, quantVezes)
      .input("sessoes", sql.Char, sessoes)
      .input("idAmbiente", sql.Int, idAmbiente)
      .input("idObjetivo", sql.Int, idObjetivo)
    
      .query(querys.addNewExercicio);

    res.json({ nome ,quantVezes,sessoes,idAmbiente,idObjetivo});
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

const deleteExercicioById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteExercicio);

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

const updateExercicioById = async (req, res) => {
    const {nome,quantVezes,sessoes,idAmbiente,idObjetivo} = req.body;

  // validating
  if (nome == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nome", sql.VarChar, nome)
      .input("quantVezes", sql.Char, quantVezes)
      .input("sessoes", sql.Char, sessoes)
      .input("idAmbiente", sql.Int, idAmbiente)
      .input("idObjetivo", sql.Int, idObjetivo)
      .input("id", req.params.id)
      .query(querys.updateExercicioById);

      res.json({ nome ,quantVezes,sessoes,idAmbiente,idObjetivo});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


module.exports = {
  getExercicios,
  createExercicio,
  getProductById,//
  deleteExercicioById,
  getTotalProducts,//
  updateExercicioById
}