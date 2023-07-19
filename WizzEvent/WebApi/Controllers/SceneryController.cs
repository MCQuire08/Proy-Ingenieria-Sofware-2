using DTOs.Events;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SceneryController : Controller
    {
        #region"Scenery"
        [HttpPost]
        [Route("CreateScenery")]
        public async Task<IActionResult> CreateScenery(Scenery scenery)
        {
            try
            {
                return Ok(scenery);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("RetrieveAllScenery")]
        public async Task<IActionResult> RetrieveAllScenery()
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

        [HttpDelete]
        [Route("DeleteScenery")]
        public async Task<IActionResult> DeleteScenery(Scenery scenery)
        {
            try
            {
                return Ok(scenery);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        #endregion

        #region"Sector"
        [HttpPost]
        [Route("CreateSectorToScenery")]
        public async Task<IActionResult> CreateSectorToScenery(int idScenery, Sector sector)
        {
            try
            {
                return Ok(sector);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("RetrieveAllSectorToScenery")]
        public async Task<IActionResult> RetrieveAllSectorToScenery(int idScenery)
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

        [HttpDelete]
        [Route("DeleteSectorToScenery")]
        public async Task<IActionResult> DeleteSectorToScenery(int idScenery, Sector sector)
        {
            try
            {
                return Ok(sector);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        #endregion

        #region"Seat"
        [HttpPost]
        [Route("CreateSeatToSector")]
        public async Task<IActionResult> CreateSeatToSector(int idScenery, int idSector, Seat seat)
        {
            try
            {
                return Ok(seat);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("RetrieveAllSeatToSector")]
        public async Task<IActionResult> RetrieveAllSeatToSector(int idScenery, int idSector)
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

        [HttpDelete]
        [Route("DeleteSeatToSector")]
        public async Task<IActionResult> DeleteSeatToSector(int idScenery, int idSector)
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

        #endregion
    }
}
