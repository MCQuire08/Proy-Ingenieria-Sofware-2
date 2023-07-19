using DTOs.Events;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : Controller
    {
        #region"Events"
        [HttpPost]
        [Route("CreateEvent")]
        public async Task<IActionResult> CreateEvent(Event eevent){
            try
            {
                return Ok(eevent);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("RetrieveAllEvents")]
        public async Task<IActionResult> RetrieveAllEvents ()
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
        [Route("UpdateEvent")]
        public async Task<IActionResult> UpdateEvent(Event eevent)
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
        [Route("DeleteEvent")]
        public async Task<IActionResult> DeleteEvent(Event eevent)
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

        #region"Contacts"
        [HttpPost]
        [Route("AddContactToEvent")]
        public async Task<IActionResult> AddContactToEvent(Contact contact)
        {
            try
            {
                return Ok(contact);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("RetrieveAllContactToEvent")]
        public async Task<IActionResult> RetrieveAllContactToEvent()
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
        [Route("DeleteContactToEvent")]
        public async Task<IActionResult> DeleteContactToEvent(Contact contact)
        {
            try
            {
                return Ok(contact);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
#endregion

        #region "Images"
        [HttpPost]
        [Route("AddImageToEvent")]
        public async Task<IActionResult> AddImageToEvent(Image image)
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

        [HttpGet]
        [Route("RetrieveAllImageToEvent")]
        public async Task<IActionResult> RetrieveAllImageToEvent()
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
        [Route("DeleteImageToEvent")]
        public async Task<IActionResult> DeleteImageToEvent(Image image)
        {
            try
            {
                return Ok(image);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        #endregion

        #region"Ticket Types"
        [HttpPost]
        [Route("AddTicketTypeToEvent")]
        public async Task<IActionResult> AddTicketTypeToEvent(TicketType ticketType)
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

        [HttpGet]
        [Route("RetrieveAllTicketTypeToEvent")]
        public async Task<IActionResult> RetrieveAllTicketTypeToEvent()
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
        [Route("DeleteTicketTypeToEvent")]
        public async Task<IActionResult> DeleteTicketTypeToEvent(TicketType ticketType)
        {
            try
            {
                return Ok(ticketType);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        #endregion

    }
}
