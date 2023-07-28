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
        private OTPManager _otpManager;

        public OTPController()
        {
            _otpManager = new OTPManager();
        }

        [HttpPost("Generate")]
        public IActionResult GenerateOTP([FromBody] OTPRequestData otpRequest)
        {
            try
            {
                var otpCode = _otpManager.GenerateOTP(otpRequest);
                return Ok(new { Message = "OTP generated and sent successfully.", OTPCode = otpCode });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error generating and sending OTP: {ex.Message}");
            }
        }

        [HttpPost("Validate")]
        public IActionResult ValidateOTP([FromBody] OTPValidationData otpValidation)
        {
            try
            {
                bool isValid = _otpManager.ValidateOTP(otpValidation.GeneratedOTP, otpValidation.EnteredOTP);
                return Ok(new { valid = isValid });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error validating OTP: {ex.Message}");
            }
        }
    }
}