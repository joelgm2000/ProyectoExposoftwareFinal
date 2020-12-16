using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class AreaService
    {
        private readonly ExposoftwareContext _context;

        public AreaService(ExposoftwareContext context)
        {
            _context = context;
        }

        public GuardarAreaResponse Guardar(Area area)
        {
            try
            {
                var areaBuscada = _context.Areas.Find(area.IdArea);
                if (areaBuscada != null)
                {
                    return new GuardarAreaResponse("Error el area ya se encuentra registrada");
                }
                _context.Areas.Add(area);
                _context.SaveChanges();
                return new GuardarAreaResponse(area);
            }
            catch (Exception e)
            {
                return new GuardarAreaResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        public List<Area> ConsultarTodos()
        {
            List<Area> areas = _context.Areas.ToList();
            return areas;
        }
        public string Eliminar(string id)
        {
            try
            {
                var area = _context.Areas.Find(id);
                if (area != null)
                {
                    _context.Areas.Remove(area);
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
        public string Modificar(Area areaNueva)
        {
            try
            {
                var areaVieja = _context.Areas.Find(areaNueva.IdArea);
                if (areaVieja != null)
                {
                    areaVieja.Nombre = areaNueva.Nombre;
                    _context.Areas.Update(areaVieja);
                    _context.SaveChanges();
                    return ($"El registro {areaNueva.Nombre} se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {areaNueva.IdArea} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }
        public Area BuscarxId(string id)
        {
            Area area = _context.Areas.Find(id);
            return area;
        }

    }
    public class GuardarAreaResponse
    {
        public GuardarAreaResponse(Area area)
        {
            Error = false;
            Area = area;
        }
        public GuardarAreaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Area Area { get; set; }

    }
}