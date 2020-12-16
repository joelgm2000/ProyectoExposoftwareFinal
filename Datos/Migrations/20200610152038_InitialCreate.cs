using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Areas",
                columns: table => new
                {
                    IdArea = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Areas", x => x.IdArea);
                });

            migrationBuilder.CreateTable(
                name: "Asignaturas",
                columns: table => new
                {
                    IdAsignatura = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    NombreArea = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Asignaturas", x => x.IdAsignatura);
                });

            migrationBuilder.CreateTable(
                name: "Calificaciones",
                columns: table => new
                {
                    IdCalificacion = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Identificacion = table.Column<string>(nullable: true),
                    IdRubrica = table.Column<string>(nullable: true),
                    IdProyecto = table.Column<int>(nullable: false),
                    Fecha = table.Column<DateTime>(nullable: false),
                    Evaluador = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calificaciones", x => x.IdCalificacion);
                });

            migrationBuilder.CreateTable(
                name: "DescripcionCalificaciones",
                columns: table => new
                {
                    IdDescripcion = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Valor = table.Column<decimal>(nullable: false),
                    IdProyecto = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DescripcionCalificaciones", x => x.IdDescripcion);
                });

            migrationBuilder.CreateTable(
                name: "Docentes",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    PrimerNombre = table.Column<string>(nullable: true),
                    SegundoNombre = table.Column<string>(nullable: true),
                    PrimerApellido = table.Column<string>(nullable: true),
                    SegundoApellido = table.Column<string>(nullable: true),
                    Celular = table.Column<string>(nullable: true),
                    Correo = table.Column<string>(nullable: true),
                    Perfil = table.Column<string>(nullable: true),
                    NombreArea = table.Column<string>(nullable: true),
                    TipoDocente = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docentes", x => x.Identificacion);
                });

            migrationBuilder.CreateTable(
                name: "Estudiantes",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    PrimerNombre = table.Column<string>(nullable: true),
                    SegundoNombre = table.Column<string>(nullable: true),
                    PrimerApellido = table.Column<string>(nullable: true),
                    SegundoApellido = table.Column<string>(nullable: true),
                    Celular = table.Column<string>(nullable: true),
                    Correo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estudiantes", x => x.Identificacion);
                });

            migrationBuilder.CreateTable(
                name: "Inscripciones",
                columns: table => new
                {
                    IdInscripcion = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdProyecto = table.Column<int>(nullable: false),
                    Estado = table.Column<string>(nullable: true),
                    Identificacion = table.Column<string>(nullable: true),
                    Estudiante1 = table.Column<string>(nullable: true),
                    Estudiante2 = table.Column<string>(nullable: true),
                    Estudiante3 = table.Column<string>(nullable: true),
                    Estudiante4 = table.Column<string>(nullable: true),
                    Estudiante5 = table.Column<string>(nullable: true),
                    Estudiante6 = table.Column<string>(nullable: true),
                    Estudiante7 = table.Column<string>(nullable: true),
                    Estudiante8 = table.Column<string>(nullable: true),
                    Estudiante9 = table.Column<string>(nullable: true),
                    Estudiante10 = table.Column<string>(nullable: true),
                    Fecha = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inscripciones", x => x.IdInscripcion);
                });

            migrationBuilder.CreateTable(
                name: "ItemsRubricas",
                columns: table => new
                {
                    Item = table.Column<string>(nullable: false),
                    IdRubrica = table.Column<string>(nullable: true),
                    Descripcion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemsRubricas", x => x.Item);
                });

            migrationBuilder.CreateTable(
                name: "Pendons",
                columns: table => new
                {
                    IdPendon = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdProyecto = table.Column<int>(nullable: false),
                    Titulo = table.Column<string>(nullable: true),
                    Introduccion = table.Column<string>(nullable: true),
                    Metodologia = table.Column<string>(nullable: true),
                    Resultados = table.Column<string>(nullable: true),
                    Objetivos = table.Column<string>(nullable: true),
                    Conclusion = table.Column<string>(nullable: true),
                    Referencias = table.Column<string>(nullable: true),
                    Observacion = table.Column<string>(nullable: true),
                    Estado = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pendons", x => x.IdPendon);
                });

            migrationBuilder.CreateTable(
                name: "Proyectos",
                columns: table => new
                {
                    IdProyecto = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Identificacion = table.Column<string>(nullable: true),
                    Estudiante1 = table.Column<string>(nullable: true),
                    Estudiante2 = table.Column<string>(nullable: true),
                    Asignatura = table.Column<string>(nullable: true),
                    Titulo = table.Column<string>(nullable: true),
                    Semestre = table.Column<string>(nullable: true),
                    Resumen = table.Column<string>(nullable: true),
                    Metodologia = table.Column<string>(nullable: true),
                    Resultados = table.Column<string>(nullable: true),
                    Estado = table.Column<string>(nullable: true),
                    Observacion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proyectos", x => x.IdProyecto);
                });

            migrationBuilder.CreateTable(
                name: "Rubricas",
                columns: table => new
                {
                    IdRubrica = table.Column<string>(nullable: false),
                    IdArea = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rubricas", x => x.IdRubrica);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserName = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: true),
                    Estado = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Rol = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserName);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    User = table.Column<string>(nullable: false),
                    Contrasena = table.Column<string>(nullable: true),
                    TipoDocente = table.Column<string>(nullable: true),
                    Identificacion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.User);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Areas");

            migrationBuilder.DropTable(
                name: "Asignaturas");

            migrationBuilder.DropTable(
                name: "Calificaciones");

            migrationBuilder.DropTable(
                name: "DescripcionCalificaciones");

            migrationBuilder.DropTable(
                name: "Docentes");

            migrationBuilder.DropTable(
                name: "Estudiantes");

            migrationBuilder.DropTable(
                name: "Inscripciones");

            migrationBuilder.DropTable(
                name: "ItemsRubricas");

            migrationBuilder.DropTable(
                name: "Pendons");

            migrationBuilder.DropTable(
                name: "Proyectos");

            migrationBuilder.DropTable(
                name: "Rubricas");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
