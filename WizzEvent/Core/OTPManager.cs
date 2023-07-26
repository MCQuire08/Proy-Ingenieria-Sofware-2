using DataAccess.CRUD;
using DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class OTPManager
    {
        public void CreateOTP(OTP otp)
        {
            var otpCRUD = new OTPCRUDFactory();
            otpCRUD.Create(otp);
        }

    }

    public class OTPManager
    {
        public OTPManager()
        {
        }
    }
}
