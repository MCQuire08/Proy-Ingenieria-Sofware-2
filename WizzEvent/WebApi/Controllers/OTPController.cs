using Core;
using DTOs;
using Microsoft.AspNetCore.Mvc;
using System;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OTPController : ControllerBase
    {
        [HttpPost("Generate")]
        public IActionResult GenerateOTP([FromBody] OTPRequestData otpRequest)
        {
            try
            {
                if (string.IsNullOrEmpty(otpRequest.DeliveryAddress) || string.IsNullOrEmpty(otpRequest.DeliveryMethod))
                {
                    return BadRequest("Invalid OTP request data.");
                }

                var random = new Random();
                var otpCode = random.Next(100000, 999999).ToString();

                // Create an instance of the OTPManager to save the generated OTP to the database.
                var otpManager = new OTPManager();
                var otpDTO = new OTP
                {
                    UserId = otpRequest.UserId,
                    OTPCode = otpCode,
                    DeliveryMethod = otpRequest.DeliveryMethod,
                    DeliveryAddress = otpRequest.DeliveryAddress
                };
                otpManager.CreateOTP(otpDTO);

                return Ok(new { Message = "OTP generated and sent successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error generating and sending OTP: {ex.Message}");
            }
        }
    }
}