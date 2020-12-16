using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class RubricaService
    {
        private readonly ExposoftwareContext _context;

        public RubricaService(ExposoftwareContext context)
        {
            _context = context;
        }

        public GuardarRubricaResponse Guardar(Rubrica rubrica)
        {
            try
            {
                var rubricaBuscada = _context.Rubricas.Find(rubrica.IdRubrica);
                var areaBuscada = _context.Rubricas.Find(rubrica.IdArea);
                if (rubricaBuscada != null)
                {
                    return new GuardarRubricaResponse("Error el codigo de la rúbrica ya se encuentra registrada");
                }
                else if (areaBuscada != null)
                {
                    return new GuardarRubricaResponse("Error el area ya tiene una rubrica registrada");
                }
                else
                {
                    _context.Rubricas.Add(rubrica);
                    _context.SaveChanges();
                    return new GuardarRubricaResponse(rubrica);
                }
            }
            catch (Exception e)
            {
                return new GuardarRubricaResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<Rubrica> ConsultarTodos()
        {
            List<Rubrica> rubricas = _context.Rubricas.ToList();
            return rubricas;
        }
        public string Eliminar(string id)
        {
            try
            {
                var rubrica = _context.Rubricas.Find(id);
                if (rubrica != null)
                {
                    _context.Rubricas.Remove(rubrica);
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
        public string Modificar(Rubrica rubricaNueva)
        {
            try
            {
                var rubricaVieja = _context.Rubricas.Find(rubricaNueva.IdRubrica);
                if (rubricaVieja != null)
                {
                    rubricaVieja.IdArea = rubricaNueva.IdArea;
                    _context.Rubricas.Update(rubricaVieja);
                    _context.SaveChanges();
                    return ($"El registro {rubricaNueva.IdRubrica} se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {rubricaNueva.IdRubrica} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }

        public Rubrica BuscarxId(string id)
        {
            Rubrica rubrica = _context.Rubricas.Find(id);
            return rubrica;
        }

        public Rubrica BuscarxArea(string idArea)
        {
            Rubrica rubrica = _context.Rubricas.Find(idArea);
            return rubrica;
        }

    }
    public class GuardarRubricaResponse
    {
        public GuardarRubricaResponse(Rubrica rubrica)
        {
            Error = false;
            Rubrica = rubrica;
        }
        public GuardarRubricaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Rubrica Rubrica { get; set; }

    }

}