using System.Xml.Linq;
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
using Microsoft.AspNetCore.SignalR;
using exposoftwaredotnet.Hubs;

namespace exposoftwaredotnet.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DocenteController: ControllerBase
    {
        private readonly IHubContext<SignalHub> _hubContext;
        private readonly DocenteService _docenteService;
        private readonly EmailServiceDocente _emailService;
        public DocenteController(ExposoftwareContext context, IHubContext<SignalHub> hubContext)
        {
            _hubContext = hubContext;
            _docenteService = new DocenteService(context);
            _emailService = new EmailServiceDocente(context);
        }
        // GET: api/Docente
        [HttpGet]
        public IEnumerable<DocenteViewModel> Gets()
        {
            var docentes = _docenteService.ConsultarTodos().Select(d=> new DocenteViewModel(d));
            return docentes;
        }

        // GET: api/Docente/5
        [HttpGet("{identificacion}")]
        public ActionResult<DocenteViewModel> Get(string identificacion)
        {
            var docente = _docenteService.BuscarxIdentificacion(identificacion);
            if (docente == null) return NotFound();
            var docenteViewModel = new DocenteViewModel(docente);
            return docenteViewModel;
        }
        // POST: api/Docente
        [HttpPost]
        public async Task<ActionResult<DocenteViewModel>> PostAsync(DocenteInputModel docenteInput)
        {
            Docente docente = MapearDocente(docenteInput);
            if(docente.TipoDocente.Equals("Docente evaluador")){
                _emailService.EnviarCorreo(docente.Correo);
            }
            var response = _docenteService.Guardar(docente);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar Docente", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            var docenteViewModel = new DocenteViewModel(response.Docente);
            await _hubContext.Clients.All.SendAsync("DocenteRegistrada", docenteViewModel);
            return Ok(docenteViewModel);
        }
        // DELETE: api/Docente/5
        [HttpDelete("{identificacion}")]
        public ActionResult<string> Delete(string identificacion)
        {
            string mensaje = _docenteService.Eliminar(identificacion);
            return Ok(mensaje);
        }

        private Docente MapearDocente(DocenteInputModel docenteInput)
        {
            var docente = new Docente
            {
                Identificacion = docenteInput.Identificacion,
                PrimerNombre = docenteInput.PrimerNombre,
                SegundoNombre = docenteInput.SegundoNombre,
                PrimerApellido = docenteInput.PrimerApellido,
                SegundoApellido = docenteInput.SegundoApellido,
                Celular = docenteInput.Celular,
                Correo = docenteInput.Correo,
                Perfil = docenteInput.Perfil,
                NombreArea = docenteInput.NombreArea,
                TipoDocente = docenteInput.TipoDocente
            };
            return docente;
        }
        // PUT: api/Docente/5
        [HttpPut("{identificacion}")]
        public ActionResult<string> Put(string identificacion, Docente docente)
        {
            var id=_docenteService.BuscarxIdentificacion(docente.Identificacion);
            if(id==null){
                return BadRequest("No encontrado");
            }
            if(id.TipoDocente.Equals("Docente evaluador")){
                _emailService.EnviarCorreo(id.Correo);
            }
            var mensaje=_docenteService.Modificar(docente);
           return Ok(mensaje) ;
        }
    }
}