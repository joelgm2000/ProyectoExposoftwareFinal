using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class DescripcionesCService
    {
         private readonly ExposoftwareContext _context;

        public DescripcionesCService(ExposoftwareContext context)
        {
            _context = context;
        }
        public GuardarDescripcionesCResponse Guardar(DescripcionCalificacion descripcion)
        {
            try
            {
                _context.DescripcionCalificaciones.Add(descripcion);
                _context.SaveChanges();
                return new GuardarDescripcionesCResponse(descripcion);
            }
            catch (Exception e)
            {
                return new GuardarDescripcionesCResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<DescripcionCalificacion> ConsultarTodos(int idProyecto)
        {
            List<DescripcionCalificacion> calificaciones = new List<DescripcionCalificacion>();
            List<DescripcionCalificacion> items = _context.DescripcionCalificaciones.ToList();
            foreach (var item in items)
            {
                if (item.IdProyecto == idProyecto)
                {
                    calificaciones.Add(item);
                }
            }
            return calificaciones;
        }
        public string Eliminar(int id)
        {
            try
            {
                var descripcion = _context.DescripcionCalificaciones.Find(id);
                if (descripcion != null)
                {
                    _context.DescripcionCalificaciones.Remove(descripcion);
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

        public string Modificar(DescripcionCalificacion descripcionNueva)
        {
            try
            {
                var descripcionVieja = _context.DescripcionCalificaciones.Find(descripcionNueva.IdDescripcion);
                if (descripcionVieja != null)
                {
                    descripcionVieja.Valor = descripcionNueva.Valor;
                    _context.DescripcionCalificaciones.Update(descripcionVieja);
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
        public List<DescripcionCalificacion> Consultar()
        {
            List<DescripcionCalificacion> descripcions = _context.DescripcionCalificaciones.ToList();
            return descripcions;
        }

        public DescripcionCalificacion BuscarxId(int idProyecto)
        {
             List<DescripcionCalificacion> descripciones = _context.DescripcionCalificaciones.ToList();
            foreach (var item in descripciones)
            {
                if (item.IdProyecto == idProyecto)
                {
                    return item;
                }
            }
            return null; 
        }
    }
     public class GuardarDescripcionesCResponse
    {
        public GuardarDescripcionesCResponse(DescripcionCalificacion descripcion)
        {
            Error = false;
            DescripcionCalificacion = descripcion;
        }
        public GuardarDescripcionesCResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public DescripcionCalificacion DescripcionCalificacion { get; set; }

    }
}