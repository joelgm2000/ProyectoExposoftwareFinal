using System.Net;
using Datos;
using Logica;
using Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using exposoftwaredotnet.Config;
using exposoftwaredotnet.Models;
using exposoftwaredotnet.Service;

namespace exposoftwaredotnet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        ExposoftwareContext _context;
        UserService _userService;
        JwtService _jwtService;

        public LoginController(ExposoftwareContext context, IOptions<AppSetting> appSettings)
        {
            _context = context;
            var admin = _context.Users.Find("admin");
            if (admin == null)
            {
                _context.Users.Add(new User()
                {
                    UserName = "admin",
                    Password = "admin",
                    Email = "anayoleth93@gmail.com",
                    Estado = "AC",
                }
                );
                var registrosGuardados = _context.SaveChanges();
            }
            _userService = new UserService(context);
            _jwtService = new JwtService(appSettings);
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] LoginInputModel model)
        {
            var user = _userService.Validate(model.UserName, model.Password);
            if (user == null) return BadRequest("Usuario o contraseña incorrecta");
            var response = _jwtService.GenerateToken(user);
            return Ok(response);
        }


    }
}