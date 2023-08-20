using Core;
using DTOs;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartItemController : Controller
    {
        [HttpPost]
        [Route("CreateCartItem")]
        public async Task<IActionResult> CreateCartItem(int IdCart, int IdSector, int Quantity)
        {
            try
            {
                var um = new CartItemManager();
                um.CreateCartItem(IdCart,IdSector,Quantity);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
