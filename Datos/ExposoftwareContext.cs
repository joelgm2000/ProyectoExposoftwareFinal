using Entity;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class ExposoftwareContext : DbContext
    {
        public ExposoftwareContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Area> Areas {get; set;}
        public DbSet<Asignatura> Asignaturas {get; set;}
        public DbSet<Calificacion> Calificaciones {get; set;}
        public DbSet<DescripcionCalificacion> DescripcionCalificaciones {get; set;}
        public DbSet<Docente> Docentes {get; set;}
        public DbSet<Estudiante> Estudiantes {get; set;}
        public DbSet<Inscripcion> Inscripciones {get; set;}
        public DbSet<ItemsRubrica> ItemsRubricas {get; set;}
        public DbSet<Pendon> Pendons {get; set;}
        public DbSet<Proyecto> Proyectos {get; set;}
        public DbSet<Rubrica> Rubricas {get; set;}
        public DbSet<Usuario> Usuarios {get; set;}
        public DbSet<User> Users {get; set;}

    }
}