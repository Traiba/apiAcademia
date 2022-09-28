const sql = require("mssql");
const config = require("../config");

const dbSettings = {
  user: 'BD21254',
  password: 'BD21254',
  server: 'regulus.cotuca.unicamp.br',
  database: 'BD21254',
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
