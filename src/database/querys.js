module.exports = {
  getAllUsuarios: "SELECT * FROM Usuario",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewUsuario:"INSERT INTO Usuario(nome, idade, telefone, email,peso,senha,imagem,idGenero,idObjetivo) VALUES (@nome,@idade,@telefone,@email,@peso,@senha,@imagem,@idGenero,@idObjetivo);",
  deleteUsuario: "DELETE FROM Usuario WHERE idConta = @id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateUsuarioById:"UPDATE Usuario SET nome = @nome,idade = @idade,@telefone = telefone,@email = email,@peso = peso,@senha = senha,@idGenero = idGenero,@idObjetivo = idObjetivo WHERE idConta = @id",
    
};
