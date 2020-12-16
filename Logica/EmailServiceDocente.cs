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
    public class EmailServiceDocente
    {
        private readonly ExposoftwareContext _context;
        public EmailServiceDocente(ExposoftwareContext context)
        {
            _context = context;
        }

         public MailMessage DatosCorreo(string correo)
        {
            MailMessage email = new MailMessage();
            email.To.Add(new MailAddress(correo.ToString()));
            email.From = new MailAddress("exposoftwareupc@gmail.com");
            email.Subject = "Asignado como evaluador en la feria tecnológica";
            email.Body = $"Saludos.<br> Se le informa que usted ha sido escogido como Docente evaluador en la feria tecnológica Exposoftware<br> comuniquese con el comité";
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


        public string EnviarCorreo(string correo)
        {
            try
            {
                MailMessage email = DatosCorreo(correo);
                SmtpClient smtp = ConfigurarCorreoGmail();
                smtp.Send(email);
                email.Dispose();
                return "Se ha enviado por correo la evaluación";
            }
            catch (Exception ex)
            {
                return "Error enviando correo electrónico: " + ex.Message;
            }
        }
    }
}