using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class EstudianteService
    {
        private readonly ExposoftwareContext _context;

        public EstudianteService(ExposoftwareContext context)
        {
            _context = context;
        }

        public GuardarEstudianteResponse Guardar(Estudiante estudiante)
        {
            try
            {
                var estudianteBuscado = _context.Estudiantes.Find(estudiante.Identificacion);
                if (estudianteBuscado != null)
                {
                    return new GuardarEstudianteResponse("Error el estudiante ya se encuentra registrado");
                }
                _context.Estudiantes.Add(estudiante);
                _context.SaveChanges();
                return new GuardarEstudianteResponse(estudiante);
            }
            catch (Exception e)
            {
                return new GuardarEstudianteResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<Estudiante> ConsultarTodos()
        {
            List<Estudiante> estudiantes = _context.Estudiantes.ToList();
            return estudiantes;
        }

        public string Eliminar(string identificacion)
        {
            try
            {
                var estudiante = _context.Estudiantes.Find(identificacion);
                if (estudiante != null)
                {
                    _context.Estudiantes.Remove(estudiante);
                    _context.SaveChanges();
                    return ($"El registro {estudiante.PrimerNombre} se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {identificacion} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }
        public Estudiante BuscarxIdentificacion(string identificacion)
        {
            Estudiante estudiante = _context.Estudiantes.Find(identificacion);
            return estudiante;
        }

    }

    public class GuardarEstudianteResponse
    {
        public GuardarEstudianteResponse(Estudiante estudiante)
        {
            Error = false;
            Estudiante = estudiante;
        }
        public GuardarEstudianteResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Estudiante Estudiante { get; set; }

    }


}