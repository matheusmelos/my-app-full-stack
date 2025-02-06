using Students.Data;
using Students.Routes;

var builder = WebApplication.CreateBuilder(args);

// Adiciona serviços ao contêiner
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<StudentContext>();

// Adiciona configuração CORS para permitir requisições do frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:5174") // URL do frontend React
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

var app = builder.Build();

// Configura o pipeline de middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowReactApp"); // Aplica a política de CORS


// Registra as rotas
app.StudentsRoutes();

// Inicia a aplicação
app.Run();
