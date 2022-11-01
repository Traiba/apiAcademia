const { getConnection, sql } = require("../database/connection");
const querys = require("../database/querys");

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

const getExercicios50_150 = async (req, res) => {
  try {
    
    const pool = await getConnection();
    const result = await pool.request().query(querys.getExerc50_150);//aqui
    res.json(result.recordset);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const getExercicios60_160 = async (req, res) => {
  try {
    
    const pool = await getConnection();
    const result = await pool.request().query(querys.getExerc60_160);//aqui
    res.json(result.recordset);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const getExercicios70_170 = async (req, res) => {
  try {
    
    const pool = await getConnection();
    const result = await pool.request().query(querys.getExerc70_170);//aqui
    res.json(result.recordset);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const getExerciciosPadrao = async (req, res) => {
  try {
    
    const pool = await getConnection();
    const result = await pool.request().query(querys.getExercPadrao);//aqui
    res.json(result.recordset);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const createExercicio = async (req, res) => {
  const {nome,quantVezes,sessoes,idAmbiente,idObjetivo} = req.body;
  
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

// const getTotalProducts = async (req, res) => {
//   const pool = await getConnection();

//   const result = await pool.request().query(querys.getTotalProducts);
//   console.log(result);
//   res.json(result.recordset[0][""]);
// };

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
const getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllUsuarios);//aqui
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const createUsuario = async (req, res) => {
  console.log(req.body)
  //const {nome,idade,tempo,email,peso,altura,senha,imagem,idGenero,idObjetivo} = req.body;
  const {nome,idade,tempo,email,peso,altura,senha,imagem,genero,objetivo} = req.body;

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
      .input("tempo", sql.Int, tempo)
      .input("email", sql.VarChar, email)
      .input("peso", sql.Float, peso)
      .input("altura", sql.Float, altura)
      .input("senha", sql.VarChar, senha)
      .input("imagem", sql.NVarChar, imagem)
      .input("genero", sql.Int, genero)
      .input("objetivo", sql.Int, objetivo)
      
      .query(querys.addNewUsuario);

    res.json({ nome ,idade,tempo,email,peso,altura,senha,imagem,genero,objetivo });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// const getProductById = async (req, res) => {
//   try {
//     const pool = await getConnection();

//     const result = await pool
//       .request()
//       .input("id", req.params.id)
//       .query(querys.getProducById);
//     return res.json(result.recordset[0]);
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// };

const deleteUsuarioById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteUsuario);

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

const updateUsuarioById = async (req, res) => {
  const {nome,idade,tempo,email,peso,altura,senha,imagem,idGenero,idObjetivo} = req.body;

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
      .input("tempo", sql.Int, tempo)
      .input("telefone", sql.VarChar, telefone)
      .input("email", sql.VarChar, email)
      .input("peso", sql.Float, peso)
      .input("senha", sql.VarChar, senha)
      .input("imagem", sql.NVarChar, imagem)
      .input("idGenero", sql.Int, idGenero)
      .input("idObjetivo", sql.Int, idObjetivo)
      .input("id", req.params.id)
      .query(querys.updateUsuarioById);

      res.json({ nome ,idade,tempo,email,peso,altura,senha,imagem,idGenero,idObjetivo });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//getEmail
const getUserByEmail = async (req, res) => {
      try {
        const pool = await getConnection();
    
        const result = await pool
          .request()
          .input("email", req.params.email)
          .query(querys.getUsuarioByEmail);
        return res.json(result.recordset[0]);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
    };
    

module.exports = {
  //EXERCICIOS
  getExercicios,
  createExercicio,
  getProductById,
  deleteExercicioById,
  getTotalProducts,
  updateExercicioById,
  getExercicios50_150,
  getExercicios60_160,
  getExercicios70_170,
  getExerciciosPadrao,
  //USUARIOS
  getUsuarios,
  createUsuario,
  getProductById,
  deleteUsuarioById,
  getTotalProducts,
  updateUsuarioById,

  getUserByEmail
  
}