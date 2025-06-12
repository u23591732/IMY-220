using ApplicationSecurity_Backend.Models;
using ApplicationSecurity_Backend.ViewModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ApplicationSecurity_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IRepository _repository;
        private readonly IUserClaimsPrincipalFactory<AppUser> _claimsPrincipalFactory;
        private readonly IConfiguration _configuration;

        public CourseController(UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager, IUserClaimsPrincipalFactory<AppUser> claimsPrincipalFactory, IConfiguration configuration, IRepository repository)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _claimsPrincipalFactory = claimsPrincipalFactory;
            _configuration = configuration;
            _repository = repository;
        }

        [HttpGet]
        [Route("GetAllCourses")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetAllCoursesAsync()
        {
            try
            {
                var results = await _repository.GetAllCoursesAsync();
                return Ok(results);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal Server Error, please contact support");
            }
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register(UserViewModel uvm)
        {
            var user = await _userManager.FindByIdAsync(uvm.emailaddress);

            if (user == null) //if no user id found is given we are registering a new user
            {
                user = new AppUser
                {
                    Id = Guid.NewGuid().ToString(),
                    UserName = uvm.emailaddress,
                    Email = uvm.emailaddress
                };

                var result = await _userManager.CreateAsync(user, uvm.password);//valid account - create a new user

                if (result.Errors.Count() > 0) return StatusCode(StatusCodes.Status500InternalServerError, "Internal Server Error. Please contact support.");
            }
            else
            {
                return Forbid("Account already exists.");//deny the user access and give forbideen message
            }

            return Ok();
        }

        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult> Login(UserViewModel uvm)
        {
            var user = await _userManager.FindByNameAsync(uvm.emailaddress);

            if (user != null && await _userManager.CheckPasswordAsync(user, uvm.password))
            {
                try
                {
                    return await GenerateJWTToken(user); //if user login correct generate a jwt token
                }
                catch (Exception)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, "Internal Server Error. Please contact support.");
                }
            }
            else
            {
                return NotFound("Does not exist");
            }
        }

        [HttpGet]
        private async Task<ActionResult> GenerateJWTToken(AppUser user)
        {
            var role = await _userManager.GetRolesAsync(user);//so GetRolesAsync is a method of the userManager 
            IdentityOptions _identityOptions = new IdentityOptions();
            // Create JWT Token
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),//Subject claim - typically represents the unique identifier for the user 
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),//JWT ID
                new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),//unique_name" claim, which typically holds the username of the user.
                
            };

            if (role.Count() > 0)
            {
                claims.Add(new Claim(_identityOptions.ClaimsIdentity.RoleClaimType, role.FirstOrDefault()));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:Key"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _configuration["Tokens:Issuer"],
                _configuration["Tokens:Audience"],
                claims,
                signingCredentials: credentials,
                expires: DateTime.UtcNow.AddHours(3)
            );
            //create a akey and other components for the entire JWT token

            return Created("", new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                user = user.UserName
            });
        }

        [HttpPost]
        [Route("CreateRole")]
        public async Task<IActionResult> CreateRole(string roleName)
        {
            var role = await _roleManager.FindByNameAsync(roleName);
            if (role == null)
            {
                role = new IdentityRole
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = roleName
                };

                var result = await _roleManager.CreateAsync(role);//create new role forcefully

                if (result.Errors.Count() > 0) return BadRequest(result.Errors);
            }
            else
            {
                return Forbid("Role already exists.");
            }

            return Ok();           
        }

        [HttpPost]
        [Route("AssignRole")]
        public async Task<IActionResult> AssignRole(string emailAddress, string roleName)
        {
            var user = await _userManager.FindByEmailAsync(emailAddress);
            if (user == null) return NotFound();

            var result = await _userManager.AddToRoleAsync(user, roleName); //method given in userManager
            if (result.Succeeded) return Ok();

            return BadRequest(result.Errors);
        }


        [HttpGet]
        [Authorize(AuthenticationSchemes = "Bearer")]// Ensures that users must be authenticated using Bearer token authentication (typically a JWT).
        [Authorize(Roles = "Admin, Manager")] // only admins and managers can access 
        [Route("RoleTest")]//find ths functionality at the endpoint /RoleTest
        public IActionResult RoleTest()
        {
            return Ok("You are an admin or manager!!!");//get this message if authourized user
        }
    }
}
