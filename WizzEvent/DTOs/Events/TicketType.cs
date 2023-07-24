using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs.Events
{
    public class TicketType : BaseDTO
    {
        [Required(ErrorMessage = "Event is required.")]
        public int IdEvent { get; set; }
        [Required(ErrorMessage = "Ticket type name is required.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Price is required.")]
        public float Price { get; set; }
        [Required(ErrorMessage = "Amount is required.")]
        public int Amount { get; set; }
    }
}
