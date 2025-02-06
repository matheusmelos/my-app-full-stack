using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Routing.Constraints;

namespace Students.Models;

// Define a estrutura para os dados de requisição de estudante
public record StudentRequest(string name, float nota1, float nota2, float nota3, float nota4, float nota5, float frequencia);
