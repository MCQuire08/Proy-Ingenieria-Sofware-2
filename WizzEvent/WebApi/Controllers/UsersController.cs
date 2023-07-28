using Core;
using DTOs;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> Create(User user)
        {
            try
            {
                var userManager = new UserManager();
                userManager.Create(user);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("Delete")]
        public async Task<IActionResult> Delete(User user)
        {
            try
            {
                var userManager = new UserManager();
                userManager.Delete(user);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> Update(User user)
        {
            try
            {
                var userManager = new UserManager();
                userManager.Update(user);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("RetrieveAll")]
        public async Task<IActionResult> RetrieveAll()
        {
            try
            {
                var userManager = new UserManager();
                var results = userManager.RetrieveAll();
                return Ok(results);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("RetrieveById")]
        public async Task<IActionResult> RetrieveById(int id)
        {
            try
            {
                var user = new User { Id = id };
                var userManager = new UserManager();
                var result = userManager.RetrieveById(user);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /*[HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(User user)
        {
            try
            {
                var userManager = new UserManager();
                var existingUser = userManager.RetrieveUserByEmailAndPassword(user.Email, user.Password);

                if (existingUser != null)
                {
                    return Ok(existingUser);
                }
                else
                {
                    return BadRequest("Usuario no encontrado. Por favor, verifique sus credenciales.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }*/
    }
}