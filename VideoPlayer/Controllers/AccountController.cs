using Domain.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using VideoPlayer.Constants;
using VideoPlayer.Models;
using VideoPlayer.Services;
using VideoPlayer.Services.Abstractions;

namespace VideoPlayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly IJwtConfig _tokenService;
        private readonly IEmailSender _emailSender;

        public AccountController(UserManager<AppUser> userManager,
                                SignInManager<AppUser> signInManager,
                                RoleManager<AppRole> roleManager,
                                IJwtConfig tokenService,
                                IEmailSender emailSender)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _tokenService = tokenService;
            _emailSender = emailSender;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> RegisterAsync([FromForm] RegisterViewModel model)
        {
            try
            {
                var role = new AppRole
                {
                    Name = Roles.User
                };
                var result1 = _roleManager.CreateAsync(role).Result;

                var user = new AppUser
                {
                    Email = model.Email,
                    UserName = model.Name

                };

                var result = await _userManager.CreateAsync(user, model.Password);

                if (!result.Succeeded)
                    return BadRequest(new { message = result.Errors });

                await _userManager.AddToRoleAsync(user, role.Name);

                await _signInManager.SignInAsync(user, isPersistent: false);

                return Ok(new
                {
                    token = _tokenService.CreateToken(user),
                    item = new
                    {
                        name = user.UserName,
                        email = user.Email
                    }

                });
            }
            catch 
            {
                return BadRequest(new { message = "Error database" });
            }
           
        }

        [HttpPost]
        [Route("login")]

        public async Task<IActionResult> Login([FromForm] LoginViewModel model)
        {

            var user = await _userManager.FindByEmailAsync(model.Email);
            var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);
            if (!result.Succeeded)
            {
                return BadRequest(new { message = "Incorrect data!" });
            }

            return Ok(new
            {
                token = _tokenService.CreateToken(user)
            });
        }

        [HttpPost]
        [Route("forgotpassword")]

        public async Task<IActionResult> ForgotPassword([FromForm] ForgotPasswordModel passwordModel)
        {
            //var user = await _userManager.FindByEmailAsync(passwordModel.Email);
            //if (user == null)
            //{
            //    return BadRequest("There is no user such email");

            //}
            //створює маркер скидання пароля для вказаного користувача.
            //User-користувач,для якого створюється маркер для скидання пароля. 
            // var token = await _userManager.GeneratePasswordResetTokenAsync(user);

            var message = new SendMessageEmailModel(new string[] { passwordModel.Email }, "Your reset password",
               "It's ok!");
            await _emailSender.SendEmail(message);
            return Ok();

        }

    }
}
