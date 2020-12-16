using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class AsignaturaService
    {
        private readonly ExposoftwareContext _context;

        public AsignaturaService(ExposoftwareContext context)
        {
            _context = context;
        }

        public GuardarAsignaturaResponse Guardar(Asignatura asignatura)
        {
            try
            {
                var asignaturaBuscada = _context.Asignaturas.Find(asignatura.IdAsignatura);
                if (asignaturaBuscada != null)
                {
                    return new GuardarAsignaturaResponse("Error la asignatura ya se encuentra registrada");
                }
                _context.Asignaturas.Add(asignatura);
                _context.SaveChanges();
                return new GuardarAsignaturaResponse(asignatura);
            }
            catch (Exception e)
            {
                return new GuardarAsignaturaResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        public List<Asignatura> ConsultarTodos()
        {
            List<Asignatura> asignaturas = _context.Asignaturas.ToList();
            return asignaturas;
        }
        public string Eliminar(string id)
        {
            try
            {
                var asignatura = _context.Asignaturas.Find(id);
                if (asignatura != null)
                {
                    _context.Asignaturas.Remove(asignatura);
                    _context.SaveChanges();
                    return ($"El registro se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }

        public string Modificar(Asignatura asignaturaNueva)
        {
            try
            {
                var asignaturaVieja = _context.Asignaturas.Find(asignaturaNueva.IdAsignatura);
                if (asignaturaVieja != null)
                {
                    asignaturaVieja.Nombre = asignaturaNueva.Nombre;
                    _context.Asignaturas.Update(asignaturaVieja);
                    _context.SaveChanges();
                    return ($"El registro {asignaturaNueva.Nombre} se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {asignaturaNueva.IdAsignatura} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }

        public Asignatura BuscarxId(string id)
        {
            Asignatura asignatura = _context.Asignaturas.Find(id);
            return asignatura;
        }

    }
    public class GuardarAsignaturaResponse
    {
        public GuardarAsignaturaResponse(Asignatura asignatura)
        {
            Error = false;
            Asignatura = asignatura;
        }
        public GuardarAsignaturaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Asignatura Asignatura { get; set; }

    }
}