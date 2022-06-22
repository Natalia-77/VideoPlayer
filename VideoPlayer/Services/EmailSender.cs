using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using VideoPlayer.Models;
using VideoPlayer.Services.Abstractions;

namespace VideoPlayer.Services
{
    public class EmailSender : IEmailSender
    {
        private readonly EmailConfiguration _emailConfig;
        public EmailSender(EmailConfiguration emailConfig)
        {
            _emailConfig = emailConfig;
        }

        public async Task SendEmail(SendMessageEmailModel message)
        {
             var emailMessage = CreateEmailMessage(message);
             await Send(emailMessage);
        }

        private MimeMessage CreateEmailMessage(SendMessageEmailModel message)
        {
            var emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress("email", _emailConfig.From));
            emailMessage.To.AddRange(message.To);
            emailMessage.Subject = message.Subject;           

            var bodyBuilder = new BodyBuilder { HtmlBody = string.Format("<h2 style='color:red;'>{0}</h2>", message.Content) };
            emailMessage.Body = bodyBuilder.ToMessageBody();

            return emailMessage;
        }

        private async Task Send(MimeMessage mailMessage)
        {
            using var client = new SmtpClient();
            try
            {
                await client.ConnectAsync(_emailConfig.SmtpServer, _emailConfig.Port, SecureSocketOptions.Auto);               
                await client.AuthenticateAsync(_emailConfig.UserName, _emailConfig.Password);
                await client.SendAsync(mailMessage);

            }
            catch
            {   
                //!!!--Add exceptions class--!!!        
                throw;
            }
            finally
            {
                await client.DisconnectAsync(true);
                client.Dispose();
            }

            
        }
    }
}
