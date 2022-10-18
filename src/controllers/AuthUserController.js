const { getConnection, sql } = require("../database/connection");
const querys = require("../database/querys");
const {sign} = require('jsonwebtoken');

async function AuthUserController({email, senha}){



  const user = await querys.users.findUnique({
    where: {email}
  });

  if(senha == user.senha){
    console.log('autenticado', email, senha)
    return{
      token: sign({ id:user.id, nome: user.nome }, "jhasbdoagsd0&@39y193-918ijnsadi0h0127y30uasnijdn713-187"),
      status:200
    }
  }

  console.log('barrado', email, senha)
  return{message: "não autenticado", status:401}

}
module.exports = { AuthUserController }