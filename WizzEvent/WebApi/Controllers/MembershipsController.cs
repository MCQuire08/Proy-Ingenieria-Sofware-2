using Core;
using DTOs;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class MembershipsController : ControllerBase
    {
        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> Create(Memberships membership)
        {
            try
            {
                var mm = new MembershipManager();
                mm.Create(membership);
                return Ok(membership);          
            }
            catch (Exception ex) { return BadRequest(ex.Message); }


        }

    }
}
