﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class UserInformation : BaseDTO
    {
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string TipoIdentificacion { get; set; }
        public string NumeroIdentificacion { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string CedulaImagen { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}