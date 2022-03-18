﻿using Domain.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using VideoPlayer.Constants;
using VideoPlayer.Models;
using VideoPlayer.Services;

namespace VideoPlayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly RoleManager<AppRole> _roleManager;
        private IJwtConfig _tokenService;

        public AccountController(UserManager<AppUser> userManager,
                                SignInManager<AppUser> signInManager,
                                RoleManager<AppRole> roleManager,
                                 IJwtConfig tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _tokenService = tokenService;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> RegisterAsync([FromForm] RegisterViewModel model)
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
                token = _tokenService.CreateToken(user)
            });
        }

    }
}
