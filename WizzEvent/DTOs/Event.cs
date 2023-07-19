using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class Event:BaseDTO
    {
        public string Name { get; set; }
        public string Slogan { get; set; }
        public string Description { get; set; }
        public string Modality { get; set; }
        public DateTime EventDate { get; set; }
        public int TotalTickets { get; set; }
        public string Information { get; set; }
        public string PaymentMethod { get; set; }
        public int FreeTickets { get; set; }
        public int OwnedBy { get; set; }
        public string State { get; set; }
        public int IdCategory { get; set; }
    }
}


