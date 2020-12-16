using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Logica;
using Datos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using exposoftwaredotnet.Models;
using exposoftwaredotnet.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace exposoftwaredotnet.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    
    public class AreaController : ControllerBase
    {
        private readonly IHubContext<SignalHub> _hubContext;
        private readonly AreaService _areaService;
        public AreaController(ExposoftwareContext context, IHubContext<SignalHub> hubContext)
        {
            _hubContext = hubContext;
            _areaService = new AreaService(context);
        }
        // GET: api/Area
        [HttpGet]
        public IEnumerable<AreaViewModel> Gets()
        {
            var areas = _areaService.ConsultarTodos().Select(a => new AreaViewModel(a));
            return areas;
        }

        // GET: api/Area/5
        [HttpGet("{idArea}")]
        public ActionResult<AreaViewModel> Get(string idArea)
        {
            var area = _areaService.BuscarxId(idArea);
            if (area == null) return NotFound();
            var areaViewModel = new AreaViewModel(area);
            return areaViewModel;
        }
        // POST: api/Area
        [HttpPost]
        public async Task<ActionResult<AreaViewModel>> PostAsync(AreaInputModel areaInput)
        {
            Area area = MapearArea(areaInput);
            var response = _areaService.Guardar(area);
            if (response.Error)
            {
                ModelState.AddModelError("Guardar Area", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            var areaViewModel = new AreaViewModel(response.Area);
            await _hubContext.Clients.All.SendAsync("AreaRegistrada", areaViewModel);
            return Ok(areaViewModel);
        }
        // DELETE: api/Area/5
        [HttpDelete("{idArea}")]
        public ActionResult<string> Delete(string idArea)
        {
            string mensaje = _areaService.Eliminar(idArea);
            return Ok(mensaje);
        }
        private Area MapearArea(AreaInputModel areaInput)
        {
            var area = new Area
            {
                IdArea = areaInput.IdArea,
                Nombre = areaInput.Nombre
            };
            return area;
        }
        // PUT: api/Area/5
        [HttpPut("{idArea}")]
        public ActionResult<string> Put(string idArea, Area area)
        {
            var id = _areaService.BuscarxId(area.IdArea);
            if (id == null)
            {
                return BadRequest("No encontrado");
            }
            var mensaje = _areaService.Modificar(area);
            return Ok(mensaje);
        }

    }
}