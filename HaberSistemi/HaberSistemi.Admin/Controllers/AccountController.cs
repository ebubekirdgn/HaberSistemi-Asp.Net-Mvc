using HaberSistemi.Admin.Class;
using HaberSistemi.Admin.CustomFilter;
using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using PagedList;
using PagedList.Mvc;

namespace HaberSistemi.Admin.Controllers
{
    public class AccountController : Controller
    {
        #region Kullanıcı
        private readonly IKullaniciRepository _kullaniciRepository;
        private readonly IRolRepository _rolRepository;
        public AccountController(IKullaniciRepository kullaniciRepository,IRolRepository rolRepository)
        {
            _kullaniciRepository = kullaniciRepository;
            _rolRepository = rolRepository;
        }
        #endregion

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
                    return RedirectToAction("Index","Home");
                }
                ViewBag.Mesaj = "Yetkisiz Kullanıcı";
                return View();
            }
            ViewBag.Mesaj = "Kullanıcı Bulunamadı";
            return View();
        }
        #endregion

        #region Kullanıcı Listesi
        [HttpGet]
        [LoginFilter]
        public ActionResult Index(int Sayfa=1)
        {
            var KullaniciListe = _kullaniciRepository.GetAll().OrderByDescending(x => x.ID).ToPagedList(Sayfa, 10);
            return View(KullaniciListe);
        }
        #endregion

        #region Kullanıcı Kayıt

        [HttpGet]
        [LoginFilter]
        public ActionResult Kayit()
        {
            SetRolListele();
            return View();
        }

        [HttpPost]
        [LoginFilter]
        public ActionResult Kayit(Kullanici kullanici,int? RolID)
        {
            if (ModelState.IsValid)
            {
                var KullaniciVarmi = _kullaniciRepository.KullaniciBul(kullanici.Email);
                if (KullaniciVarmi != null)
                {
                    return Json(new ResultJson { Success = false, Message = kullanici.Email + " Daha Önce Kayıt Edilmiş" });
                }

                kullanici.RolID = Convert.ToInt32(RolID);
                _kullaniciRepository.Insert(kullanici);
                try
                {
                     _kullaniciRepository.Save();
                     return Json(new ResultJson { Success = true, Message = "Kullanıcı Ekleme İşleminiz Başarılı" });
                }
                catch (Exception ex)
                {

                    return Json(new ResultJson { Success = false, Message = "Kullanıcı Ekleme İşlemiminiz Başarızı !" });
                }
                
            }
            return View();
        }
        #endregion

        #region Kullanıcı Düzenle
        [HttpGet]
        [LoginFilter]
        public ActionResult Duzenle(int id)
        {
            Kullanici gelenKuıllanici = _kullaniciRepository.GetById(id);


            if (gelenKuıllanici == null)
            {
                throw new Exception("Haber Bulunamadı");
            }
            else
            {
                SetRolListele();
                return View(gelenKuıllanici);
            }

        }

        [HttpPost]
        [LoginFilter]
        public ActionResult Duzenle(Kullanici kullanici, int? RolID)
        {
            Kullanici gelenKullanici = _kullaniciRepository.GetById(kullanici.ID);

            var EmailVarmi = _kullaniciRepository.KullaniciBul(kullanici.Email);
            if (EmailVarmi != null && gelenKullanici.Email != kullanici.Email)
            {
                return Json(new ResultJson { Success = false, Message = "Bu Mail Adresi Sistemde Kayıtlı" });
            }
            gelenKullanici.AdSoyad = kullanici.AdSoyad;
            gelenKullanici.AktifMi = kullanici.AktifMi;
            gelenKullanici.Email = kullanici.Email;
            gelenKullanici.RolID = Convert.ToInt32(RolID);
            gelenKullanici.Sifre = gelenKullanici.Sifre;

            try
            {
                _kullaniciRepository.Save();
                return Json(new ResultJson { Success = true, Message = "Başarılı Bir Şekilde Güncellendi" });
            }
            catch (Exception ex)
            {

                return Json(new ResultJson { Success = false, Message = "Güncelleme İşlemi Başarısız" });
            }

            return View();
        }
        #endregion

        #region Kullanıcı Sil
        [LoginFilter]
        public JsonResult Sil(int ID)
        {
            Kullanici dbKullanici = _kullaniciRepository.GetById(ID);
            var gelenID = Convert.ToInt32(Session["KullaniciEmail"]);
            if (ID == gelenID)
            {
                return Json(new ResultJson { Success = false, Message = "Oturum Açmış Olduğunuz Kullanıcı Silinemez !" });
            }
            if (dbKullanici == null)
            {
                return Json(new ResultJson { Success = true, Message = "Kullanıcı Bulunamadı" });
            }
            _kullaniciRepository.Delete(ID);
            _kullaniciRepository.Save();

            return Json(new ResultJson { Success = true, Message = "Kullanıcı Silme İşleminiz Başarılı" });
        }

        #endregion

        #region Çıkış
        public ActionResult Cikis()
        {
            Session.Abandon();
            return RedirectToAction("Index", "Home");
        }
        #endregion


        #region Rol Listele
        public void SetRolListele(object rol=null)
        {
            var RolList = _rolRepository.GetMany(x => x.AktifMi == true);
            ViewBag.Rol = RolList;
        }

        #endregion
    }
}