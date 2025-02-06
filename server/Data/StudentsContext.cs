using Microsoft.EntityFrameworkCore;
using Students.Models;

namespace Students.Data;

// Define o contexto do banco de dados para o modelo de estudante
public class StudentContext : DbContext
{
    // Define a tabela de estudantes no banco de dados
    public DbSet<StudentModel> Students { get; set; }

    // Configurações do contexto do banco de dados
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // Define a string de conexão para o banco de dados SQLite
        optionsBuilder.UseSqlite("Data Source=students.sqlite");

        // Chama o método base para garantir o comportamento padrão
        base.OnConfiguring(optionsBuilder);
    }
}
