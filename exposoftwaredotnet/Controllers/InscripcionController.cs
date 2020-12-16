using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Logica;
using Datos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using exposoftwaredotnet.Models;
using Microsoft.AspNetCore.Authorization;

namespace exposoftwaredotnet.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class InscripcionController : ControllerBase
    {
        private readonly InscripcionService _inscripcionService;
        public InscripcionController(ExposoftwareContext context)
        {
            _inscripcionService = new InscripcionService(context);
        }
        // GET: api/Inscripcion
        [HttpGet]
        public IEnumerable<InscripcionViewModel> Gets()
        {
            var inscripciones = _inscripcionService.ConsultarTodos().Select(i => new InscripcionViewModel(i));
            return inscripciones;
        }

        // GET: api/Inscripcion/5
        [HttpGet("{idInscripcion}")]
        public ActionResult<InscripcionViewModel> Get(int idInscripcion)
        {
            var inscripcion = _inscripcionService.BuscarxIdentificacion(idInscripcion);
            if (inscripcion == null) return NotFound();
            var inscripcionViewModel = new InscripcionViewModel(inscripcion);
            return inscripcionViewModel;
        }
        // POST: api/Inscripcion
        [HttpPost]
        public ActionResult<InscripcionViewModel> Post(InscripcionInputModel inscripcionInput)
        {
            Inscripcion inscripcion = MapearInscripcion(inscripcionInput);
            var response = _inscripcionService.Guardar(inscripcion);
            if (response.Error)
            {
                ModelState.AddModelError("Guardar Inscripcion", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Inscripcion);
        }
        // DELETE: api/Inscripcion/5
        [HttpDelete("{idInscripcion}")]
        public ActionResult<string> Delete(int idInscripcion)
        {
            string mensaje = _inscripcionService.Eliminar(idInscripcion);
            return Ok(mensaje);
        }
        private Inscripcion MapearInscripcion(InscripcionInputModel inscripcionInput)
        {
            var inscripcion = new Inscripcion
            {
                IdInscripcion = inscripcionInput.IdInscripcion,
                IdProyecto = inscripcionInput.IdProyecto,
                Identificacion = inscripcionInput.Identificacion,
                Estudiante1 = inscripcionInput.Estudiante1,
                Estudiante2 = inscripcionInput.Estudiante2,
                Estudiante3 = inscripcionInput.Estudiante3,
                Estudiante4 = inscripcionInput.Estudiante4,
                Estudiante5 = inscripcionInput.Estudiante5,
                Estudiante6 = inscripcionInput.Estudiante6,
                Estudiante7 = inscripcionInput.Estudiante7,
                Estudiante8 = inscripcionInput.Estudiante8,
                Estudiante9 = inscripcionInput.Estudiante9,
                Estudiante10 = inscripcionInput.Estudiante10,
                Fecha = inscripcionInput.Fecha
            };
            return inscripcion;
        }
    }
}