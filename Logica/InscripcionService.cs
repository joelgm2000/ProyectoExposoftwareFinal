using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    
    public class InscripcionService
    {
        private readonly ExposoftwareContext _context;
        public InscripcionService(ExposoftwareContext context)
        {
            _context = context;

        }
        public GuardarInscripcionResponse Guardar(Inscripcion inscripcion)
        {
            try
            {
                _context.Inscripciones.Add(inscripcion);
                _context.SaveChanges();
                return new GuardarInscripcionResponse(inscripcion);
            }
            catch (Exception e)
            {
                return new GuardarInscripcionResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<Inscripcion> ConsultarTodos()
        {
            List<Inscripcion> inscripciones = _context.Inscripciones.ToList();
            return inscripciones;
        }
        public string Eliminar(int idInscripcion)
        {
            try
            {
                var inscripcion = _context.Inscripciones.Find(idInscripcion);
                if (inscripcion != null)
                {
                    _context.Inscripciones.Remove(inscripcion);
                    _context.SaveChanges();
                    return ($"El registro se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {idInscripcion} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }

        public Inscripcion BuscarxIdentificacion(int idInscripcion)
        {
            Inscripcion inscripcion = _context.Inscripciones.Find(idInscripcion);
            return inscripcion;
        }

    }
     public class GuardarInscripcionResponse
    {
        public GuardarInscripcionResponse(Inscripcion inscripcion)
        {
            Error = false;
            Inscripcion = inscripcion;
        }
        public GuardarInscripcionResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Inscripcion Inscripcion { get; set; }

    }
}