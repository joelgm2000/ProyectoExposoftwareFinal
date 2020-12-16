using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class ProyectoService
    {
        private readonly ExposoftwareContext _context;
        public ProyectoService(ExposoftwareContext context)
        {
            _context = context;

        }

        public GuardarProyectoResponse Guardar(Proyecto proyecto)
        {
            try
            {
                if (proyecto.Identificacion == null)
                {
                    return new GuardarProyectoResponse("Error Debe registrar el docente");
                }
                _context.Proyectos.Add(proyecto);
                _context.SaveChanges();
                return new GuardarProyectoResponse(proyecto);
            }
            catch (Exception e)
            {
                return new GuardarProyectoResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<Proyecto> ConsultarTodos()
        {
            List<Proyecto> proyectos = _context.Proyectos.ToList();
            return proyectos;
        }
         public List<Proyecto> ConsultarTodosXDocente(string identificacion)
        {
            List<Proyecto> lista = new List<Proyecto>();
            List<Proyecto> items = _context.Proyectos.ToList();
            foreach (var item in items)
            {
                if (item.Identificacion == identificacion)
                {
                    lista.Add(item);
                }
            }
            return lista;
        }
        public string Eliminar(int idProyecto)
        {
            try
            {
                var proyecto = _context.Proyectos.Find(idProyecto);
                if (proyecto != null)
                {
                    _context.Proyectos.Remove(proyecto);
                    _context.SaveChanges();
                    return ($"El registro se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {idProyecto} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }

        public string Modificar(Proyecto proyectoNueva)
        {
            try
            {
                var proyectoVieja = _context.Proyectos.Find(proyectoNueva.IdProyecto);
                if (proyectoVieja != null)
                {
                    proyectoVieja.Titulo = proyectoNueva.Titulo;
                    proyectoVieja.Asignatura = proyectoNueva.Asignatura;
                    proyectoVieja.Semestre = proyectoNueva.Semestre;
                    proyectoVieja.Resumen = proyectoNueva.Resumen;
                    proyectoVieja.Resultados = proyectoNueva.Resultados;
                    proyectoVieja.Metodologia = proyectoNueva.Metodologia;
                    proyectoVieja.Estado = proyectoNueva.Estado;
                    proyectoVieja.Observacion = proyectoNueva.Observacion;
                    _context.Proyectos.Update(proyectoVieja);
                    _context.SaveChanges();
                    return ($"El registro {proyectoNueva.Titulo} se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {proyectoNueva.IdProyecto} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }
        public Proyecto BuscarxIdentificacion(int identificacion)
        {
            Proyecto proyecto = _context.Proyectos.Find(identificacion);
            return proyecto;
        }

    }

    public class GuardarProyectoResponse
    {
        public GuardarProyectoResponse(Proyecto proyecto)
        {
            Error = false;
            Proyecto = proyecto;
        }
        public GuardarProyectoResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Proyecto Proyecto { get; set; }

    }
}
