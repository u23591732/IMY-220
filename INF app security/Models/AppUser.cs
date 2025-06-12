using Microsoft.AspNetCore.Identity;

namespace ApplicationSecurity_Backend.Models
{
    public class AppUser: IdentityUser
    {
    }
}
//customization of .IdentityUser , which is used to manage users, passwords, roles, and claims... customization currently empty
//
//can add a field like DateOfBirth for each user