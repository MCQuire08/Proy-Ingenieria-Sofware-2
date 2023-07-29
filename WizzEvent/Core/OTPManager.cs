using DataAccess.CRUD;
using DTOs;
using System;

namespace Core
{
    public class OTPManager
    {
        private readonly OTPCRUDFactory _otpCrudFactory;

        public OTPManager()
        {
            _otpCrudFactory = new OTPCRUDFactory();
        }

        public string GenerateOTP(OTPRequestData otpRequest)
        {
            if (string.IsNullOrEmpty(otpRequest.DeliveryAddress) || string.IsNullOrEmpty(otpRequest.DeliveryMethod))
            {
                throw new ArgumentException("Invalid OTP request data.");
            }

            var random = new Random();
            var otpCode = random.Next(100000, 999999).ToString();

            var otpDTO = new OTP
            {
                UserId = otpRequest.UserId,
                OTPCode = otpCode,
                DeliveryMethod = otpRequest.DeliveryMethod,
                DeliveryAddress = otpRequest.DeliveryAddress
            };

            return otpCode;
        }

        public bool ValidateOTP(string generatedOTP, string enteredOTP)
        {
            return generatedOTP == enteredOTP;
        }
    }
}