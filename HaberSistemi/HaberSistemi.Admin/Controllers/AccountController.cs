using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.Model;
using System.Linq;
using System.Web.Mvc;

namespace HaberSistemi.Admin.Controllers
{
    public class AccountController : Controller
    {
        #region Kullanıcı

        private readonly IKullaniciRepository _kullaniciRepository;
        private readonly IRolRepository _rolRepository;

        public AccountController(IKullaniciRepository kullaniciRepository, IRolRepository rolRepository)
        {
            _kullaniciRepository = kullaniciRepository;
            _rolRepository = rolRepository;
        }

        #endregion Kullanıcı

        #region Giriş

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(Kullanici kullanici)
        {
            var KullaniciVarmi = _kullaniciRepository.GetMany(x => x.Email == kullanici.Email && x.Sifre == kullanici.Sifre && x.AktifMi == true).SingleOrDefault();
            if (KullaniciVarmi != null)
            {
                if (KullaniciVarmi.Rol.RolAdi == "Admin")
                {
                    Session["KullaniciEmail"] = KullaniciVarmi.ID;
                    Session["KullaniciAdi"] = KullaniciVarmi.AdSoyad;
                    return RedirectToAction("Index", "Home");
                }
                ViewBag.Mesaj = "Yetkisiz Kullanıcı";
                return View();
            }
            ViewBag.Mesaj = "Kullanıcı Bulunamadı";
            return View();
        }

        #endregion Giriş
    }
}