using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Students.Data;
using Students.Models;

namespace Students.Routes;

public static class StudentsRoute 
{
    // Define as rotas relacionadas aos estudantes
    public static void StudentsRoutes(this WebApplication app) 
    {
        var route = app.MapGroup("student"); // Grupo de rotas para "/student"

        // Rota POST para criar um novo estudante
        route.MapPost("", 
        async (StudentRequest request, StudentContext context) => 
        {
            // Cria um novo modelo de estudante com base no request
            var student = new StudentModel(
                request.name, 
                request.nota1, 
                request.nota2, 
                request.nota3, 
                request.nota4, 
                request.nota5, 
                request.frequencia
            );

            // Adiciona o estudante no contexto e salva no banco de dados
            await context.AddAsync(student);
            await context.SaveChangesAsync();
        });
            
        // Rota GET para obter todos os estudantes
        route.MapGet("", async (StudentContext context) => 
        {
            // Obtém todos os estudantes do banco de dados
            var students = await context.Students.ToListAsync();
            return Results.Ok(students); // Retorna a lista de estudantes
        });

        // Rota PUT para atualizar um estudante existente
        route.MapPut("{id:guid}",
        async (Guid id, StudentRequest request, StudentContext context) => 
        {
            // Busca o estudante pelo ID
            var student = await context.Students.FindAsync(id);

            // Se o estudante não for encontrado, retorna um erro 404
            if (student == null) 
            {
                return Results.NotFound();
            }

            // Atualiza os dados do estudante com as informações do request
            student.Name = request.name;
            student.Nota1 = request.nota1;
            student.Nota2 = request.nota2;
            student.Nota3 = request.nota3;
            student.Nota4 = request.nota4;
            student.Nota5 = request.nota5;
            student.Frequencia = request.frequencia;

            // Salva as mudanças no banco de dados
            await context.SaveChangesAsync();

            // Retorna os dados do estudante atualizado
            return Results.Ok(student);
        });

        // Rota DELETE para excluir um estudante
        route.MapDelete("{id:guid}",
        async (Guid id, StudentContext context, CancellationToken cancellationToken) => 
        {
            // Busca o estudante no banco de dados com o ID fornecido
            var student = await context.Students.FirstOrDefaultAsync(
                student => student.Id == id, cancellationToken
            );

            // Se o estudante não for encontrado, retorna um erro 404
            if (student == null)
            {
                return Results.NotFound(); 
            }

            // Remove o estudante do banco de dados
            context.Students.Remove(student);

            // Salva as mudanças no banco de dados
            await context.SaveChangesAsync(cancellationToken);

            // Retorna o estudante que foi excluído
            return Results.Ok(student);
        });
    }
}
