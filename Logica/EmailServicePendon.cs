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
    public class EmailServicePendon
    {
        private readonly ExposoftwareContext _context;
        public EmailServicePendon(ExposoftwareContext context)
        {
            _context = context;
        }

         public MailMessage DatosCorreo(string correo, string estado, string observacion)
        {
            string texto;
            MailMessage email = new MailMessage();
            email.To.Add(new MailAddress(correo.ToString()));
            email.From = new MailAddress("exposoftwareupc@gmail.com");
            email.Subject = "Evaluación del pendón";
            if(estado.Equals("Aceptado")) {
                texto = "lo invitamos a continuar en el proceso.";
            } else {
                 texto = "Lo invitamos a que revise las observaciones y reestructurar la información del pendón.";
            }
            email.Body = $"Saludos.<br> Se le informa que el estado de su pendón es {estado} {texto} <br> Observaciones <br> {observacion}";
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


        public string EnviarCorreo(int idProyecto, string estado, string observacion)
        {
            try
            {
                Proyecto proyecto = _context.Proyectos.Find(idProyecto);
                Docente docente = _context.Docentes.Find(proyecto.Identificacion);
                MailMessage email = DatosCorreo(docente.Correo,estado,observacion);
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