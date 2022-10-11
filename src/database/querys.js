module.exports = {
  //EXERCICIOS
    getAllExercicios: "SELECT * FROM Exercicios",
    addNewExercicio:"INSERT INTO Exercicios(nome, quantVezes, sessoes,idAmbiente,idObjetivo) VALUES (@nome,@quantVezes,@sessoes,@idAmbiente,@idObjetivo);",
    deleteExercicio: "DELETE FROM Exercicios WHERE idExercicio = @id",
    updateExercicioById:"UPDATE Exercicios SET nome = @nome,quantVezes = @quantVezes,@sessoes = sessoes,@idAmbiente = idAmbiente,@idObjetivo = idObjetivo WHERE idExercicio = @id",
  //USUARIOS
  getAllUsuarios: "SELECT * FROM Usuario", 
  addNewUsuario:"INSERT INTO Usuario(nome, idade, telefone, email,peso,senha,imagem,idGenero,idObjetivo) VALUES (@nome,@idade,@telefone,@email,@peso,@senha,@imagem,@idGenero,@idObjetivo);",
  deleteUsuario: "DELETE FROM Usuario WHERE idConta = @id",
  updateUsuarioById:"UPDATE Usuario SET nome = @nome,idade = @idade,@telefone = telefone,@email = email,@peso = peso,@senha = senha,@idGenero = idGenero,@idObjetivo = idObjetivo WHERE idConta = @id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  getProducById: "SELECT * FROM Products Where Id = @Id",
};
  