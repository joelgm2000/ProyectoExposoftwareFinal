using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class CalificacionesService
    {
        private readonly ExposoftwareContext _context;

        public CalificacionesService(ExposoftwareContext context)
        {
            _context = context;
        }
        public GuardarCalificacionResponse Guardar(Calificacion calificacion)
        {
            try
            {
                 var proyectoBuscado = this.BuscarxIdProyecto(calificacion.IdProyecto);
                if (proyectoBuscado != 0)
                {
                    return new GuardarCalificacionResponse("Error, el proyecto ya tiene un docente evaluador asignado");
                }
                _context.Calificaciones.Add(calificacion);
                _context.SaveChanges();
                return new GuardarCalificacionResponse(calificacion);
            }
            catch (Exception e)
            {
                return new GuardarCalificacionResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        public int BuscarxIdProyecto(int id)
        {
            List<Calificacion> calificacions = _context.Calificaciones.ToList();
            foreach (var item in calificacions)
            {
                if (item.IdProyecto == id)
                {
                    return item.IdProyecto;
                }
            }
            return 0;     
        }
         public string BuscarArea(string nombreAsignatura){
            List<Area> area = _context.Areas.ToList();
            foreach (var item in area)
            {
                if (item.Nombre == nombreAsignatura)
                {
                    return item.IdArea;
                }
            }
            return null;
        }
        public Rubrica BuscarRubrica(string area){
            List<Rubrica> rubricas = _context.Rubricas.ToList();
            foreach (var item in rubricas)
            {
                if (item.IdArea == area)
                {
                    return item;
                }
            }
            return null;
        }
        public List<Calificacion> ConsultarTodos(string idEvaluador)
        {
            List<Calificacion> calificaciones = new List<Calificacion>();
            List<Calificacion> items = _context.Calificaciones.ToList();
            foreach (var item in items)
            {
                if (item.Evaluador == idEvaluador)
                {
                    calificaciones.Add(item);
                }
            }
            return calificaciones;
        }
         public List<Calificacion> Consultar()
        {
            List<Calificacion> calificaciones = _context.Calificaciones.ToList();
            return calificaciones;
        }
        public string Eliminar(int id)
        {
            try
            {
                var calificacion = _context.Calificaciones.Find(id);
                if (calificacion != null)
                {
                    _context.Calificaciones.Remove(calificacion);
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

        public string Modificar(Calificacion calificacionNueva)
        {
            try
            {
                var calificacionVieja = _context.Calificaciones.Find(calificacionNueva.IdCalificacion);
                if (calificacionVieja != null)
                {
                    calificacionVieja.Identificacion = calificacionNueva.Identificacion;
                    calificacionVieja.Evaluador = calificacionNueva.Evaluador;
                    _context.Calificaciones.Update(calificacionVieja);
                    _context.SaveChanges();
                    return ($"El registro se ha modificado satisfactoriamente.");
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

        public Calificacion BuscarxId(int id)
        {
            Calificacion calificacion = _context.Calificaciones.Find(id);
            return calificacion;
        }
    }
    public class GuardarCalificacionResponse
    {
        public GuardarCalificacionResponse(Calificacion calificacion)
        {
            Error = false;
            Calificacion = calificacion;
        }
        public GuardarCalificacionResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Calificacion Calificacion { get; set; }

    }
}