using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.Model;
using System.Linq;
using System.Web.Mvc;

namespace HaberSistemi.Admin.Controllers
{
    public class AccountController : Controller
    {
        #region Kullanici

        private readonly IKullaniciRepository _kullaniciRepository;

        public AccountController(IKullaniciRepository kullaniciRepository)
        {
            _kullaniciRepository = kullaniciRepository;
        }

        #endregion Kullanici

        // GET: Account
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(Kullanici kullanici)
        {
            var kullaniciVarMi = _kullaniciRepository.GetMany(x => x.Email == kullanici.Email && x.Sifre == kullanici.Sifre && x.AktifMi == true).SingleOrDefault();
            if (kullaniciVarMi != null)
            {
                if (kullaniciVarMi.Rol.RolAdi == "Admin")
                {
                    Session["KullaniciEmail"] = kullaniciVarMi.Email; // Sessiona kullanıcının email bilgisi yuklendi.
                    return RedirectToAction("Index", "Home");
                }
                ViewBag.Mesaj = "Yetkisiz Kullanıcı";
                return View();
            }

            ViewBag.Mesaj = "Kullanıcı Bulunamadı.";
            return View();
        }
    }
}