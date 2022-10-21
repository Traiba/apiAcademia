const app = require('./app');
const bodyParser = require('body-parser')

const { getConnection, sql } = require("./database/connection");
const querys = require("./database/querys");

const jwt = require('jsonwebtoken')
const SECRET = 'luiztools' 
app.use(bodyParser.json());

function verifyJWT(req,res,next){
    const token = req.headers['x-access-token']
    jwt.verify(token,SECRET,(err,decoded)=>{
        if(err) return res.status(401).end();
        req.userId = decoded.userId;
        next();
    })
}

// app.get('/api/clientes', verifyJWT, (req , res) => {
//     //console.log(req.userI d + "fez está chamada!");
//     try {
//         const pool = await getConnection();
//         const result = await pool.request().query(querys.getAllUsuarios);//aqui
//         res.json(result.recordset);
//       } catch (error) {
//         res.status(500);
//         res.send(error.message);
//       }
// })



app.post('/api/login', async (req, res) => {
    const {email,senha} = req.body;
    // procurar no banco se tem alguem com esse email
    try {
        const pool = await getConnection();
        const result = await pool
                            .request()
                            .input("email", sql.VarChar, email)
                            .query(querys.getUsuarioByEmail);

        if (result.recordset.length == 0) {
            res.status(404);
            res.send("Usuário com este email não existe.")
        } else {
            console.log(result.recordset[0].senha == senha);
            console.log(result.recordset[0].senha + " - " + senha)
            if (result.recordset[0].senha == senha) {
                res.status(200).json({ "message" : "Usuário logado com sucesso"});
               
                return; 
            } 
                
            res.status(401).json({"message": "Senha incorreta."})
         }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})
// app.get('/api/login', async (req, res) => {
//     // procurar no banco se tem alguem com esse email
//     try {
//         const pool = await getConnection();
//         const result = await pool.request().query(querys.getExerc50_150);

//         res.json(result.recordset);
        
//     } catch (error) {
//         res.status(500);
//         res.send(error.message);
//     }
// })
// app.get('/api/login', async (req, res) => {
//     // procurar no banco se tem alguem com esse email
//     try {
//         const pool = await getConnection();
//         const result = await pool.request().query(querys.getExerc60_160);

//         res.json(result.recordset);
        
//     } catch (error) {
//         res.status(500);
//         res.send(error.message);
//     }
// })
// app.get('/api/login', async (req, res) => {
//     // procurar no banco se tem alguem com esse email
//     try {
//         const pool = await getConnection();
//         const result = await pool.request().query(querys.getExerc70_170);

//         res.json(result.recordset);
        
//     } catch (error) {
//         res.status(500);
//         res.send(error.message);
//     }
// })

// app.post('/api/logout', (req, res) => {
//     res.end();
// })

app.listen(app.get("port"), () =>
    console.log("Server on port " + app.get("port"))
);
