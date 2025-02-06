using Microsoft.AspNetCore.Routing.Constraints;

namespace Students.Models;
 
 // Classe que define os atributos dos estudantes 
    public class StudentModel
    {
        public Guid Id { get; init; }
        public string Name { get; set; }
        public float Nota1 { get; set; }
        public float Nota2 { get; set; }
        public float Nota3 { get; set; }
        public float Nota4 { get; set; }
        public float Nota5 { get; set; }
        public float Frequencia { get; set; }

        // Construtor com parâmetros
        public StudentModel(string name, float nota1, float nota2, float nota3, float nota4, float nota5, float frequencia)
        {
            Id = Guid.NewGuid();
            Name = name;
            Nota1 = nota1;
            Nota2 = nota2;
            Nota3 = nota3;
            Nota4 = nota4;
            Nota5 = nota5;
            Frequencia = frequencia;
        }
   
    }


