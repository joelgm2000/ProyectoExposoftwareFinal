using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;


namespace Logica
{
    public class DocenteService
    {
        private readonly ExposoftwareContext _context;
        public DocenteService(ExposoftwareContext context)
        {
            _context = context;
        }

        public GuardarDocenteResponse Guardar(Docente docente)
        {
            try
            {
                var docenteBuscado = _context.Docentes.Find(docente.Identificacion);
                if (docenteBuscado != null)
                {
                    return new GuardarDocenteResponse("Error el docente ya se encuentra registrado");
                }
                _context.Docentes.Add(docente);
                _context.SaveChanges();
                return new GuardarDocenteResponse(docente);
            }
            catch (Exception e)
            {
                return new GuardarDocenteResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        public List<Docente> ConsultarTodos()
        {
            List<Docente> docentes = _context.Docentes.ToList();
            return docentes;
        }
        public string Eliminar(string identificacion)
        {
            try
            {
                var docente = _context.Docentes.Find(identificacion);
                if (docente != null)
                {
                    _context.Docentes.Remove(docente);
                    _context.SaveChanges();
                    return ($"El registro {docente.PrimerNombre} se ha eliminado satisfactoriamente.");
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

        public string Modificar(Docente docenteNueva)
        {
            try
            {
                var docenteVieja = _context.Docentes.Find(docenteNueva.Identificacion);
                if (docenteVieja != null)
                {
                    docenteVieja.PrimerNombre = docenteNueva.PrimerNombre;
                    docenteVieja.SegundoNombre = docenteNueva.SegundoNombre;
                    docenteVieja.PrimerApellido = docenteNueva.PrimerApellido;
                    docenteVieja.SegundoApellido = docenteNueva.SegundoApellido;
                    docenteVieja.Celular = docenteNueva.Celular;
                    docenteVieja.Correo = docenteNueva.Correo;
                    docenteVieja.Perfil = docenteNueva.Perfil;
                    docenteVieja.NombreArea = docenteNueva.NombreArea;
                    docenteVieja.TipoDocente = docenteNueva.TipoDocente;
                    _context.Docentes.Update(docenteVieja);
                    _context.SaveChanges();
                    return ($"El registro {docenteNueva.PrimerNombre} se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {docenteNueva.Identificacion} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }

        public Docente BuscarxIdentificacion(string identificacion)
        {
            Docente docente = _context.Docentes.Find(identificacion);
            return docente;
        }

    }
    public class GuardarDocenteResponse
    {
        public GuardarDocenteResponse(Docente docente)
        {
            Error = false;
            Docente = docente;
        }
        public GuardarDocenteResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Docente Docente { get; set; }

    }

}
