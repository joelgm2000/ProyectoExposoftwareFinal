using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Mail;
using Entity;
using Datos;

namespace Logica
{
    
    public class EmailServicePuntaje
    {
        private readonly ExposoftwareContext _context;
         public EmailServicePuntaje(ExposoftwareContext context)
        {
            _context = context;
        }
        public MailMessage DatosCorreo(string correo, decimal valor)
        {
            MailMessage email = new MailMessage();
            email.To.Add(new MailAddress(correo.ToString()));
            email.From = new MailAddress("exposoftwareupc@gmail.com");
            email.Subject = "Puntaje Exposoftware";
            email.Body = $"Saludos.<br> Su proyecto a sido calificado su puntaje es {valor}";
            email.IsBodyHtml = true;
            email.Priority = MailPriority.Normal;

            return email;
        }

        public SmtpClient ConfigurarCorreoGmail()
        {
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587; //456
            smtp.EnableSsl = true;
            smtp.UseDefaultCredentials = true;
            smtp.Credentials = new NetworkCredential("exposoftwareupc@gmail.com", "Exposoftware123456789");

            return smtp;
        }


        public string EnviarCorreo(DescripcionCalificacion descripcion)
        {
            try
            {
                Proyecto proyecto = _context.Proyectos.Find(descripcion.IdProyecto);
                Docente docente = _context.Docentes.Find(proyecto.Identificacion);
                MailMessage email = DatosCorreo(docente.Correo, descripcion.Valor);
                SmtpClient smtp = ConfigurarCorreoGmail();
                smtp.Send(email);
                email.Dispose();
                return "Se ha enviado por correo el puntaje";
            }
            catch (Exception ex)
            {
                return "Error enviando correo electrónico: " + ex.Message;
            }
        }
        
    }
}