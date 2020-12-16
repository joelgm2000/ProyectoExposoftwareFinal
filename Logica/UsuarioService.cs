using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class UsuarioService
    {
     private readonly ExposoftwareContext _context;

        public UsuarioService(ExposoftwareContext context)
        {
            _context = context;
        }
        
        public GuardarUsuarioResponse Guardar(User usuario)
        {
            try
            {
                var usuarioBuscada = _context.Users.Find(usuario.UserName);
                if (usuarioBuscada != null)
                {
                    return new GuardarUsuarioResponse("Error el usuario ya se encuentra registrada");
                }
                _context.Users.Add(usuario);
                _context.SaveChanges();
                return new GuardarUsuarioResponse(usuario);
            }
            catch (Exception e)
            {
                return new GuardarUsuarioResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        public List<User> ConsultarTodos()
        {
            List<User> usuarios = _context.Users.ToList();
            return usuarios;
        }
        public string Eliminar(string userName)
        {
            try
            {
                var usuario = _context.Users.Find(userName);
                if (usuario != null)
                {
                  _context.Users.Remove(usuario);
                  _context.SaveChanges();
                    return ($"El registro {usuario.UserName} se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {userName} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }
        public User BuscarxNombre(string userName)
        {
            User usuario =_context.Users.Find(userName);
            return usuario;
        }

    }
     public class GuardarUsuarioResponse 
    {
        public GuardarUsuarioResponse(User usuario)
        {
            Error = false;
            User = usuario;
        }
        public GuardarUsuarioResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public User User { get; set; }

    }
    
}
