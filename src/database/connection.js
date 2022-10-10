const sql = require("mssql");
// const config = require("../config");

const dbSettings = {
  user: 'BD21686',
  password: 'BD21686',
  server: 'regulus.cotuca.unicamp.br',
  database: 'BD21686',
  options: {
    encrypt: true, // for azure 
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sql, dbSettings, getConnection };
