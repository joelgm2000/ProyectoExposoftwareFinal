using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Logica;
using Datos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using exposoftwaredotnet.Models;
using Microsoft.AspNetCore.SignalR;
using exposoftwaredotnet.Hubs;

namespace exposoftwaredotnet.Controllers
{
    [Authorize]

    [Route("api/[controller]")]
    
    [ApiController]
    public class AsignaturaController: ControllerBase
    {
        private readonly IHubContext<SignalHub> _hubContext;
        private readonly AsignaturaService _asignaturaService;
        public AsignaturaController(ExposoftwareContext context, IHubContext<SignalHub> hubContext)
        {
            _hubContext = hubContext;
           _asignaturaService = new AsignaturaService(context);
        }
        // GET: api/Asignatura
        [HttpGet]
        public IEnumerable<AsignaturaViewModel> Gets()
        {
            var asignaturas = _asignaturaService.ConsultarTodos().Select(a=> new AsignaturaViewModel(a));
            return asignaturas;
        }

        // GET: api/Asignatura/5
        [HttpGet("{idAsignatura}")]
        public ActionResult<AsignaturaViewModel> Get(string idAsignatura)
        {
            var asignatura = _asignaturaService.BuscarxId(idAsignatura);
            if (asignatura == null) return NotFound();
            var asignaturaViewModel = new AsignaturaViewModel(asignatura);
            return asignaturaViewModel;
        }
        // POST: api/Asignatura
        [HttpPost]
        public async Task<ActionResult<AsignaturaViewModel>> PostAsync(AsignaturaInputModel asignaturaInput)
        {
            Asignatura asignatura = MapearAsignatura(asignaturaInput);
            var response = _asignaturaService.Guardar(asignatura);
            if (response.Error) 
            {
               ModelState.AddModelError("Guardar Asignatura", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            var asignaturaViewModel = new AsignaturaViewModel(response.Asignatura);
            await _hubContext.Clients.All.SendAsync("AsignaturaRegistrada", asignaturaViewModel);
            return Ok(asignaturaViewModel);
        }
        // DELETE: api/Asignatura/5
        [HttpDelete("{idAsignatura}")]
        public ActionResult<string> Delete(string idAsignatura)
        {
            string mensaje = _asignaturaService.Eliminar(idAsignatura);
            return Ok(mensaje);
        }
        
        private Asignatura MapearAsignatura(AsignaturaInputModel asignaturaInput)
        {
            var asignatura = new Asignatura
            {
                IdAsignatura = asignaturaInput.IdAsignatura,
                Nombre = asignaturaInput.Nombre,
                NombreArea = asignaturaInput.NombreArea
            };
            return asignatura;
        }
        // PUT: api/Asignatura/5
        [HttpPut("{idAsignatura}")]
        public ActionResult<string> Put(string idAsignatura, Asignatura asignatura)
        {
            var id=_asignaturaService.BuscarxId(asignatura.IdAsignatura);
            if(id==null){
                return BadRequest("No encontrado");
            }
            var mensaje=_asignaturaService.Modificar(asignatura);
           return Ok(mensaje) ;
        }
        
    }
}