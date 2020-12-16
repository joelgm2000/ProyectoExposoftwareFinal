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
    public class PendonController: ControllerBase
    {
        private readonly IHubContext<SignalHub> _hubContext;
        private readonly PendonService _pendonService;
        private readonly EmailServicePendon _emailService;
       
        public PendonController(ExposoftwareContext context, IHubContext<SignalHub> hubContext)
        {
            _hubContext = hubContext;
            _pendonService = new PendonService(context);
            _emailService = new EmailServicePendon(context);
        }
        // GET: api/Pendon
        [HttpGet]
        public IEnumerable<PendonViewModel> Gets()
        {
            var pendons = _pendonService.ConsultarTodos().Select(p=> new PendonViewModel(p));
            return pendons;
        }

        // GET: api/Pendon/5
        [HttpGet("{idPendon}")]
        public ActionResult<PendonViewModel> Get(int idPendon)
        {
            var pendon = _pendonService.BuscarxIdentificacion(idPendon);
            if (pendon == null) return NotFound();
            var pendonViewModel = new PendonViewModel(pendon);
            return pendonViewModel;
        }
        // POST: api/Pendon
        [HttpPost]
        public async Task<ActionResult<PendonViewModel>> PostAsync(PendonInputModel pendonInput)
        {
            Pendon pendon = MapearPendon(pendonInput);
            var response = _pendonService.Guardar(pendon);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar Pendon", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            var pendonViewModel = new PendonViewModel(response.Pendon);
            await _hubContext.Clients.All.SendAsync("PendonRegistrada", pendonViewModel);
            return Ok(pendonViewModel);
        }
        // DELETE: api/Pendon/5
        [HttpDelete("{idPendon}")]
        public ActionResult<string> Delete(int idPendon)
        {
            string mensaje = _pendonService.Eliminar(idPendon);
            return Ok(mensaje);
        }
        private Pendon MapearPendon(PendonInputModel pendonInput)
        {
            var pendon = new Pendon
            {
                IdProyecto = pendonInput.IdProyecto,
                Titulo = pendonInput.Titulo,
                Introduccion = pendonInput.Introduccion,
                Metodologia = pendonInput.Metodologia,
                Resultados = pendonInput.Resultados,
                Objetivos = pendonInput.Objetivos,
                Conclusion = pendonInput.Conclusion,
                Referencias = pendonInput.Referencias,
            };
            return pendon;
        }
        // PUT: api/Pendon/5
        [HttpPut("{idPendon}")]
        public ActionResult<string> Put(string idPendon, Pendon pendon)
        {
            var id=_pendonService.BuscarxIdentificacion(pendon.IdPendon);
            if(id==null){
                return BadRequest("No encontrado");
            }
            _emailService.EnviarCorreo(pendon.IdProyecto, pendon.Estado,pendon.Observacion);
            var mensaje=_pendonService.Modificar(pendon);
           return Ok(mensaje) ;
        }
    }
}