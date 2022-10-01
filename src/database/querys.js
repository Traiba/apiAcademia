module.exports = {
  getAllProducts: "SELECT * FROM Usuario",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  getProducByName: "SELECT * FROM Products Where nome = @nome",
  addNewProduct:
    // "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);"
    "INSERT INTO Usuario(nome, idade, telefone, email,peso,senha,imagem,idGenero,idObjetivo) VALUES (@nome,@idade,@telefone,@email,@peso,@senha,@imagem,@idGenero,@idObjetivo);"
,
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE Usuario SET nome = @nome, idade = @idade, telefone = @telefone, email = @email, peso = @peso, senha = @senha, imagem = @imagem, idGenero = @idGenero, idObjetivo = @idObjetivo WHERE nome = @nomeRecebido",
};
