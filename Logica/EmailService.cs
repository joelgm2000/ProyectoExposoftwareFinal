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
    public class EmailService
    {
         private readonly ExposoftwareContext _context;
        public EmailService(ExposoftwareContext context)
        {
            _context = context;
        }

         public MailMessage DatosCorreo(string correo, string estado, string observacion,int id)
        {
            string texto;
            MailMessage email = new MailMessage();
            email.To.Add(new MailAddress(correo.ToString()));
            email.From = new MailAddress("exposoftwareupc@gmail.com");
            email.Subject = "Evaluación de la inscripción";
            if(estado.Equals("Aceptado")) {
                texto = $"lo invitamos a continuar en el proceso <br> codigo del proyecto: {id} ";
            } else if(estado.Equals("Modificar")) {
                 texto = "Lo invitamos a que revise las observaciones y reestructurar la informacion del proyecto.";
            }else{
                texto = "lo invitamos a inscribirse en las proximas convocatorias y mejorar su proyecto.";
            }
            email.Body = $"Saludos.<br> Se le informa que el estado de su inscripción es {estado} {texto} <br> Observaciones <br> {observacion}";
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


        public string EnviarCorreo(string identificacion, string estado, string observacion, int id)
        {
            try
            {
                Docente docente = _context.Docentes.Find(identificacion);
                MailMessage email = DatosCorreo(docente.Correo,estado,observacion,id);
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