using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs.Events
{
    public class Category
    {
        [Required(ErrorMessage = "Category name is required.")]
        public string Name { get; set; }
    }
}
