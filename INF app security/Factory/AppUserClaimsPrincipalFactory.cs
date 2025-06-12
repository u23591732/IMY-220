﻿using ApplicationSecurity_Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace ApplicationSecurity_Backend.Factory
{
    public class AppUserClaimsPrincipalFactory: UserClaimsPrincipalFactory<AppUser, IdentityRole>
    {
        public AppUserClaimsPrincipalFactory(UserManager<AppUser> userManager,
        RoleManager<IdentityRole> roleManager,
        IOptions<IdentityOptions> optionsAccessor)
        : base(userManager, roleManager, optionsAccessor)
        {
            //Used to customize the claims (like role or permissions) associated with your user identity when they're logged in.
        }

    }
}

