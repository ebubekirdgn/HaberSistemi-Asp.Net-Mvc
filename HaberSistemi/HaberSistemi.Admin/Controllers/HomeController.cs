using HaberSistemi.Admin.CustomFilter;
using System.Web.Mvc;

namespace HaberSistemi.Admin.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
      //  [LoginFilter]
        public ActionResult Index()
        {
            return View();
        }
    }
}