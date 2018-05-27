using System.Web.Mvc;

namespace HaberSistemi.Admin.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
    }
}