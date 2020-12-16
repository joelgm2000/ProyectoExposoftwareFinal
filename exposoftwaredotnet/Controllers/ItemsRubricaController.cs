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
    public class ItemsRubricaController: ControllerBase
    {
        private readonly ItemsRubricaService _itemsRubricaService;
        public ItemsRubricaController(ExposoftwareContext context)
        {
            _itemsRubricaService = new ItemsRubricaService(context);
        }
        // GET: api/ItemsRubrica
        [HttpGet("{idRubrica}")]
        public IEnumerable<ItemsRubricaViewModel> Gets(string idRubrica)
        {
            var items = _itemsRubricaService.ConsultarTodos(idRubrica).Select(ir=> new ItemsRubricaViewModel(ir));
            return items;
        }

        // POST: api/ItemsRubrica
        [HttpPost]
        public ActionResult<ItemsRubricaViewModel> Post(ItemsRubricaInputModel itemRubricaInput)
        {
            ItemsRubrica itemsRubrica = MapearItemRubrica(itemRubricaInput);
            var response = _itemsRubricaService.Guardar(itemsRubrica);
            if (response.Error) 
            {
               ModelState.AddModelError("Guardar itemRubrica", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.ItemsRubrica);
        }
        // DELETE: api/ItemsRubrica/5
        [HttpDelete("{idRubrica}")]
        public ActionResult<string> Delete(string idRubrica)
        {
            string mensaje = _itemsRubricaService.Eliminar(idRubrica);
            return Ok(mensaje);
        }
        
        private ItemsRubrica MapearItemRubrica(ItemsRubricaInputModel itemRubricaInput)
        {
            var item = new ItemsRubrica
            {
                IdRubrica = itemRubricaInput.IdRubrica,
                Item = itemRubricaInput.Item,
                Descripcion = itemRubricaInput.Descripcion
            };
            return item;
        }
        // PUT: api/ItemsRubrica/5
        [HttpPut("{idRubrica}")]
        public ActionResult<string> Put(string idRubrica, ItemsRubrica item)
        {
            var mensaje=_itemsRubricaService.Modificar(item);
           return Ok(mensaje) ;
        }
        
    }
}