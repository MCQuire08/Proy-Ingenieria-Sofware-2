using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApp.Pages
{
    public class UbicationUserModel : PageModel
    {
        private readonly ILogger<UbicationUserModel> _logger;

        public UbicationUserModel(ILogger<UbicationUserModel> logger)
        {
            _logger = logger;
        }
        public void OnGet()
        {
        }
    }
}