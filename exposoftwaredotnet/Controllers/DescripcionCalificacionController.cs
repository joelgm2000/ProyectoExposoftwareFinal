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
    public class DescripcionCalificacionController: ControllerBase
    {
         private readonly DescripcionesCService _descripcionService;
         private readonly EmailServicePuntaje _emailPuntajeService;

        public DescripcionCalificacionController(ExposoftwareContext context)
        {
            _descripcionService = new DescripcionesCService(context);
            _emailPuntajeService = new EmailServicePuntaje(context);
        }

         // GET: api/DescripcionCalificacion
        [HttpGet]
        public IEnumerable<DescripcionCViewModel> Gets()
        {
            var descripciones = _descripcionService.Consultar().Select(d=> new DescripcionCViewModel(d));
            return descripciones;
        }

        // POST: api/DescripcionCalificacion
        [HttpPost]
        public ActionResult<DescripcionCViewModel> Post(DescripcionCInputModel descripcionInput)
        {
            DescripcionCalificacion descripcion = MapearDescripcionC(descripcionInput);
            var response = _descripcionService.Guardar(descripcion);
            if (response.Error)
            {
                ModelState.AddModelError("Guardar descripcion resultados", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            _emailPuntajeService.EnviarCorreo(descripcion);
            return Ok(response.DescripcionCalificacion);
        }
        // DELETE: api/DescripcionCalificacion/5
        [HttpDelete("{idDescripcion}")]
        public ActionResult<string> Delete(int idDescripcion)
        {
            string mensaje = _descripcionService.Eliminar(idDescripcion);
            return Ok(mensaje);
        }
        private DescripcionCalificacion MapearDescripcionC(DescripcionCInputModel descripcionCInput)
        {
            var descripcion = new DescripcionCalificacion
            {
                P1 = descripcionCInput.P1,
                P2 = descripcionCInput.P2,
                P3 = descripcionCInput.P3,
                Valor = descripcionCInput.Valor,
                IdProyecto = descripcionCInput.IdProyecto,
            };
            return descripcion;
        }
        // PUT: api/DescripcionCalificacion/5
        [HttpPut("{idDescripcion}")]
        public ActionResult<string> Put(int idDescripcion, DescripcionCalificacion descripcion)
        {
            var id = _descripcionService.BuscarxId(descripcion.IdDescripcion);
            if (id == null)
            {
                return BadRequest("No encontrado");
            }
            var mensaje = _descripcionService.Modificar(descripcion);
            return Ok(mensaje);
        }
    }
}