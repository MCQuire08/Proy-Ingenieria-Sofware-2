using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class Memberships : BaseDTO
    {
        public string Name { get; set; }
        public float Price { get; set; }
        public int TicketsToSell { get; set; }
        public float Commission { get; set; } 

    }
}
