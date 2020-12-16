using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Microsoft.AspNetCore.Http;
using Logica;
using Datos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using exposoftwaredotnet.Models;
using Microsoft.AspNetCore.Authorization;

namespace exposoftwaredotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;
        public UsuarioController(ExposoftwareContext context)
        {
            _usuarioService = new UsuarioService(context);
        }
        // GET: api/Usuario
        [HttpGet]
        public IEnumerable<LoginViewModel> Gets()
        {
            var usuarios = _usuarioService.ConsultarTodos().Select(u => new LoginViewModel(u));
            return usuarios;
        }

        // GET: api/Usuario/5
        [HttpGet("{userName}")]
        public ActionResult<LoginViewModel> Get(string userName)
        {
            var usuario = _usuarioService.BuscarxNombre(userName);
            if (usuario == null) return NotFound();
            var loginViewModel = new LoginViewModel(usuario);
            return loginViewModel;
        }
        // POST: api/Usuario
        [HttpPost]
        public ActionResult<LoginViewModel> Post(LoginViewModel usuarioInput)
        {
            User usuario = MapearUsuario(usuarioInput);
            var response = _usuarioService.Guardar(usuario);
            if (response.Error)
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.User);
        }
        // DELETE: api/Usuario/5
        [HttpDelete("{userName}")]
        public ActionResult<string> Delete(string userName)
        {
            string mensaje = _usuarioService.Eliminar(userName);
            return Ok(mensaje);
        }
        private User MapearUsuario(LoginViewModel usuarioInput)
        {
            var usuario = new User
            {
                UserName = usuarioInput.UserName,
                Password = usuarioInput.Password,
                Email = usuarioInput.Email,
                Rol = usuarioInput.Rol,

            };
            return usuario;
        }
        // PUT: api/Usuario/5
        [HttpPut("{userName}")]
        public ActionResult<string> Put(string userName, User usuario)
        {
            throw new NotImplementedException();
        }

    }
}