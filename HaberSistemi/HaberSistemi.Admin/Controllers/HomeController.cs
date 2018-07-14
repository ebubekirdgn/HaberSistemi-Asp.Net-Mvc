using HaberSistemi.Admin.CustomFilter;
using HaberSistemi.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HaberSistemi.Admin.Controllers
{
    public class HomeController : Controller
    {
        private readonly IKullaniciRepository _kullaniciRepository;
        private readonly IHaberRepository _haberRepository;

        public HomeController(IKullaniciRepository kullaniciRepository,IHaberRepository haberRepository)
        {
            _kullaniciRepository = kullaniciRepository;
            _haberRepository = haberRepository;
        }

        [LoginFilter]
        public ActionResult Index()
        {
            ViewBag.KullaniciSayisi = _kullaniciRepository.Count();
            ViewBag.HaberSayisi = _haberRepository.Count();
            return View();
        }

       
	}
}