using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class CartItem : BaseDTO
    {
        [Required(ErrorMessage = "Id seat is required.")]
        public int IdSeat { get; set; }
        [Required(ErrorMessage = "Id event is required.")]
        public int IdEvent { get; set; }
        [Required(ErrorMessage = "Price is required.")]
        public decimal Price { get; set; }
    }
}
