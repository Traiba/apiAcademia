module.exports = {
  //EXERCICIOS
  getAllExercicios: "SELECT * FROM Exercicios",
  addNewExercicio:"INSERT INTO Exercicios(nome, quantVezes, sessoes,idAmbiente,idObjetivo) VALUES (@nome,@quantVezes,@sessoes,@idAmbiente,@idObjetivo);",
  deleteExercicio: "DELETE FROM Exercicios WHERE idExercicio = @id",
  updateExercicioById:"UPDATE Exercicios SET nome = @nome,quantVezes = @quantVezes,@sessoes = sessoes,@idAmbiente = idAmbiente,@idObjetivo = idObjetivo WHERE idExercicio = @id",
  //USUARIOS
  getAllUsuarios: "SELECT * FROM Usuario", 
  addNewUsuario:"INSERT INTO Usuario(nome, idade, tempo, email,peso,altura ,senha,imagem,idGenero,idObjetivo) VALUES (@nome,@idade,@tempo,@email,@peso,@altura,@senha,@imagem,@genero,@objetivo);",
  deleteUsuario: "DELETE FROM Usuario WHERE idConta = @id",
  updateUsuarioById:"UPDATE Usuario SET nome = @nome,idade = @idade,@altura = altura,@email = email,@peso = peso,@altura = @altura,@senha = senha,@idGenero = idGenero,@idObjetivo = idObjetivo WHERE idConta = @id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  getProducById: "SELECT * FROM Usuario Where Id = @Id",
  getUsuarioByEmail: "SELECT * FROM  Usuario Where email = @email",

  users: "SELECT * FROM Usuario Where email = @email"
};
  