using Domain.Identity;
using Microsoft.AspNetCore.Identity;
using VideoPlayer.Constants;

namespace VideoPlayer.Helper
{
    public static class AdminConfig
    {
        public static async Task AdminSeedData(this IApplicationBuilder applicationBuilder)
        {
            using var serviceScope = applicationBuilder.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();
            var roleManager = serviceScope.ServiceProvider.GetRequiredService<RoleManager<AppRole>>();
            var userManager = serviceScope.ServiceProvider.GetRequiredService<UserManager<AppUser>>();

            if (!userManager.Users.Any())
            {
                var role = new AppRole
                {
                    Name = Roles.Admin
                };
                var result1 = roleManager.CreateAsync(role).Result;

                var user = new AppUser
                {
                    Email = "admin@gmail.com",
                    UserName = "admin@gmail.com"
                };
                var res = await userManager.CreateAsync(user, "qwerty1");
                res = await userManager.AddToRoleAsync(user, Roles.Admin);
            }         

        }
    }
}
