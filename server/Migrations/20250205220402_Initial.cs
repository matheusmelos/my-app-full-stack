using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Students.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Nota1 = table.Column<float>(type: "REAL", nullable: false),
                    Nota2 = table.Column<float>(type: "REAL", nullable: false),
                    Nota3 = table.Column<float>(type: "REAL", nullable: false),
                    Nota4 = table.Column<float>(type: "REAL", nullable: false),
                    Nota5 = table.Column<float>(type: "REAL", nullable: false),
                    Frequencia = table.Column<float>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
