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
    public class RubricaController: ControllerBase
    {
        private readonly RubricaService _rubricaService;
        public RubricaController(ExposoftwareContext context)
        {
            _rubricaService = new RubricaService(context);
        }
        // GET: api/Rubrica
        [HttpGet]
        public IEnumerable<RubricaViewModel> Gets()
        {
            var rubricas = _rubricaService.ConsultarTodos().Select(r=> new RubricaViewModel(r));
            return rubricas;
        }

        // GET: api/Rubrica/5
        [HttpGet("{idRubrica}")]
        public ActionResult<RubricaViewModel> Get(string idRubrica)
        {
            var rubrica = _rubricaService.BuscarxId(idRubrica);
            if (rubrica == null) return NotFound();
            var rubricaViewModel = new RubricaViewModel(rubrica);
            return rubricaViewModel;
        }
        // POST: api/Rubrica
        [HttpPost]
        public ActionResult<RubricaViewModel> Post(RubricaInputModel rubricaInput)
        {
            Rubrica rubrica = MapearRubrica(rubricaInput);
            var response = _rubricaService.Guardar(rubrica);
            if (response.Error) 
            {
               ModelState.AddModelError("Guardar Rubrica", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Rubrica);
        }
        // DELETE: api/Rubrica/5
        [HttpDelete("{idRubrica}")]
        public ActionResult<string> Delete(string idRubrica)
        {
            string mensaje = _rubricaService.Eliminar(idRubrica);
            return Ok(mensaje);
        }
        
        private Rubrica MapearRubrica(RubricaInputModel rubricaInput)
        {
            var rubrica = new Rubrica
            {
                IdRubrica = rubricaInput.IdRubrica,
                IdArea = rubricaInput.IdArea
            };
            return rubrica;
        }
        // PUT: api/Rubrica/5
        [HttpPut("{idRubrica}")]
        public ActionResult<string> Put(string idRubrica, Rubrica rubrica)
        {
            var id=_rubricaService.BuscarxId(rubrica.IdRubrica);
            if(id==null){
                return BadRequest("No encontrado");
            }
            var mensaje=_rubricaService.Modificar(rubrica);
           return Ok(mensaje) ;
        }
        
    }
}