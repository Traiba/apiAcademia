module.exports = {
  getAllProducts: "SELECT * FROM Usuario",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct:
    // "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);"
    "INSERT INTO Usuario(nome, idade, telefone, email,peso,senha,imagem,idGenero,idObjetivo) VALUES (@nome,@idade,@telefone,@email,@peso,@senha,@imagem,@idGenero,@idObjetivo);"
,
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
};
