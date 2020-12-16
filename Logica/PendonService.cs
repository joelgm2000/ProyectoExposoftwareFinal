using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class PendonService
    {
        private readonly ExposoftwareContext _context;
        public PendonService(ExposoftwareContext context)
        {
            _context = context;

        }

        public GuardarPendonResponse Guardar(Pendon pendon)
        {
            try
            {
                 var proyectoBuscado = this.BuscarxIdProyecto(pendon.IdProyecto);
                if (proyectoBuscado != 0)
                {
                    return new GuardarPendonResponse("Error el proyecto ya tiene un pendón registrado");
                }
                _context.Pendons.Add(pendon);
                _context.SaveChanges();
                return new GuardarPendonResponse(pendon);
            }
            catch (Exception e)
            {
                return new GuardarPendonResponse($"Error de la Aplicacion: {e.Message}");
            }
        }  

        public List<Pendon> ConsultarTodos()
        {
            List<Pendon> pendons = _context.Pendons.ToList();
            return pendons;
        }
        public string Eliminar(int idPendon)
        {
            try
            {
                var pendon = _context.Pendons.Find(idPendon);
                if (pendon != null)
                {
                    _context.Pendons.Remove(pendon);
                    _context.SaveChanges();
                    return ($"El registro se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {idPendon} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }

        public string Modificar(Pendon pendonNueva)
        {
            try
            {
                var pendonVieja = _context.Pendons.Find(pendonNueva.IdPendon);
                if (pendonVieja != null)
                {
                    pendonVieja.Titulo = pendonNueva.Titulo;
                    pendonVieja.Introduccion = pendonNueva.Introduccion;
                    pendonVieja.Metodologia = pendonNueva.Metodologia;
                    pendonVieja.Resultados = pendonNueva.Resultados;
                    pendonVieja.Objetivos = pendonNueva.Objetivos;
                    pendonVieja.Conclusion = pendonNueva.Conclusion;
                    pendonVieja.Referencias = pendonNueva.Referencias;
                    pendonVieja.Observacion = pendonNueva.Observacion;
                    pendonVieja.Estado = pendonNueva.Estado;
                    _context.Pendons.Update(pendonVieja);
                    _context.SaveChanges();
                    return ($"El registro {pendonNueva.Titulo} se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {pendonNueva.IdPendon} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }
        public Pendon BuscarxIdentificacion(int idPendon)
        {
            Pendon pendon = _context.Pendons.Find(idPendon);
            return pendon;
        }
        public int BuscarxIdProyecto(int id)
        {
            List<Pendon> pendons = _context.Pendons.ToList();
            foreach (var item in pendons)
            {
                if (item.IdProyecto == id)
                {
                    return item.IdProyecto;
                }
            }
            return 0;     
        }

    }

    public class GuardarPendonResponse
    {
        public GuardarPendonResponse(Pendon pendon)
        {
            Error = false;
            Pendon = pendon;
        }
        public GuardarPendonResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Pendon Pendon { get; set; }

    }
    
}