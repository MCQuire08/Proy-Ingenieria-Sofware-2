using Microsoft.AspNetCore.Mvc;
using DTOs.Events;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventGroupController : Controller
    {
        [HttpPost]
        [Route("CreateGroup")]
        public async Task<IActionResult> CreateGroup(Group group)
        {
            try
            {
                return Ok(group);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("RetrieveAllGroups")]
        public async Task<IActionResult> RetrieveAllGroups()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("UpdateGroup")]
        public async Task<IActionResult> UpdateGroup(Group group)
        {
            try
            {
                return Ok(group);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("DeleteGroup")]
        public async Task<IActionResult> DeleteGroup(Group group)
        {
            try
            {
                return Ok(group);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
