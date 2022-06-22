using VideoPlayer.Models;

namespace VideoPlayer.Services.Abstractions
{
    public interface IEmailSender
    {
        Task SendEmail(SendMessageEmailModel message);
    }
}
