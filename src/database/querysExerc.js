module.exports = {
    getAllExercicios: "SELECT * FROM Exercicios", //funciona
    addNewExercicio:"INSERT INTO Exercicio(nome, quantVezes, sessoes,idAmbiente,idObjetivo) VALUES (@nome,@quantVezes,@sessoes,@idAmbiente,@idObjetivo);",
    deleteExercicio: "DELETE FROM Exercicio WHERE idExercicio = @id",
    updateExercicioById:"UPDATE Exercicio SET nome = @nome,quantVezes = @quantVezes,@sessoes = sessoes,@idAmbiente = idAmbiente,@idObjetivo = idObjetivo WHERE idExercicio = @id",
  };
  