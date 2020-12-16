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
    public class CalificacionController : ControllerBase
    {
        private readonly CalificacionesService _calificacionService;

        public CalificacionController(ExposoftwareContext context)
        {
            _calificacionService = new CalificacionesService(context);
        }
        // GET: api/Calificacion
        [HttpGet("{idEvaluador}")]
        public IEnumerable<CalificacionViewModel> Gets(string idEvaluador)
        {
            var calificaciones = _calificacionService.ConsultarTodos(idEvaluador).Select(c => new CalificacionViewModel(c));
            return calificaciones;
        }

         // GET: api/Calificacion
        [HttpGet]
        public IEnumerable<CalificacionViewModel> Gets()
        {
            var calificaciones = _calificacionService.Consultar().Select(cc=> new CalificacionViewModel(cc));
            return calificaciones;
        }

        // POST: api/Calificacion
        [HttpPost]
        public ActionResult<CalificacionViewModel> Post(CalificacionInputModel calificacionInput)
        {
            Calificacion calificacion = MapearCalificacion(calificacionInput);
            var response = _calificacionService.Guardar(calificacion);
            if (response.Error)
            {
                ModelState.AddModelError("Guardar calificacion", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Calificacion);
        }
        // DELETE: api/Calificacion/5
        [HttpDelete("{idCalificacion}")]
        public ActionResult<string> Delete(int idCalificacion)
        {
            string mensaje = _calificacionService.Eliminar(idCalificacion);
            return Ok(mensaje);
        }
        private Calificacion MapearCalificacion(CalificacionInputModel calificacionInput)
        {
            var calificacion = new Calificacion
            {
                Identificacion = calificacionInput.Identificacion,
                IdRubrica = calificacionInput.IdRubrica,
                IdProyecto = calificacionInput.IdProyecto,
                Evaluador = calificacionInput.Evaluador,
            };
            return calificacion;
        }
        // PUT: api/Calificacion/5
        [HttpPut("{idCalificacion}")]
        public ActionResult<string> Put(int idCalificacion, Calificacion calificacion)
        {
            var id = _calificacionService.BuscarxId(calificacion.IdCalificacion);
            if (id == null)
            {
                return BadRequest("No encontrado");
            }
            var mensaje = _calificacionService.Modificar(calificacion);
            return Ok(mensaje);
        }
    }
}