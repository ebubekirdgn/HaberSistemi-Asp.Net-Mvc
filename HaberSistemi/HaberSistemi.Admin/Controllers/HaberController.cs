using HaberSistemi.Admin.CustomFilter;
using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HaberSistemi.Admin.Controllers
{
    public class HaberController : Controller
    {
        #region Veritabanı

        private readonly IHaberRepository _haberRepository;
        private readonly IKullaniciRepository _kullaniciRepository;
        private readonly IKategoriRepository _kategoriRepository;
        private readonly IResimRepository _resimRepository;

        #endregion Veritabanı

        public HaberController(IHaberRepository haberRepository, IKullaniciRepository kullaniciRepository, IKategoriRepository kategoriRepository, IResimRepository resimRepository)
        {
            _haberRepository = haberRepository;
            _kullaniciRepository = kullaniciRepository;
            _kategoriRepository = kategoriRepository;
            _resimRepository = resimRepository;
        }

        [LoginFilter]
        // GET: Haber
        public ActionResult Index()
        {
            var haberListesi = _haberRepository.GetAll();
            return View(haberListesi);
        }

        [HttpGet]
        [LoginFilter]
        public ActionResult Ekle()
        {
            SetKategoriListele();
            return View();
        }

        [HttpPost]
        [LoginFilter]
        public ActionResult Ekle(Haber haber, int KategoriID, HttpPostedFileBase VitrinResmi, IEnumerable<HttpPostedFileBase> DetayResim)
        {
            var SessionControl = HttpContext.Session["KullaniciEmail"];

            if (ModelState.IsValid)
            {
                Kullanici kullanici = _kullaniciRepository.GetById(Convert.ToInt32(SessionControl));
                haber.KullaniciID = kullanici.ID;
                haber.KategoriID = KategoriID;

                if (VitrinResmi != null)
                {
                    string dosyaAdi = Guid.NewGuid().ToString().Replace("-", "");
                    string uzanti = System.IO.Path.GetExtension(Request.Files[0].FileName); // 0 olması tek resim yükleyecegimiz anlamına geliyor.
                    string tamYol = "/External/Haber/" + dosyaAdi + uzanti;
                    Request.Files[0].SaveAs(Server.MapPath(tamYol));
                    haber.Resim = tamYol;
                }
                _haberRepository.Insert(haber);
                _haberRepository.Save();

                string cokluResim = System.IO.Path.GetExtension(Request.Files[1].FileName);  // 1 olması ise coklu resim yükleyecegimiz anlamına geliyor.

                if (DetayResim != null)
                {
                    foreach (var file in DetayResim)
                    {
                        if (file.ContentLength > 0)
                        {
                            string dosyaAdi = Guid.NewGuid().ToString().Replace("-", "");
                            string uzanti = System.IO.Path.GetExtension(Request.Files[1].FileName);
                            string tamYol = "/External/Haber/" + dosyaAdi + uzanti;
                            file.SaveAs(Server.MapPath(tamYol));
                            var resim = new Resim
                            {
                                ResimUrl = tamYol,
                            };
                            resim.HaberID = haber.ID;
                            _resimRepository.Insert(resim);
                            _resimRepository.Save();
                        }
                    }
                }
                return RedirectToAction("Index", "Haber");
            }
            return View();
        }

        #region KategoriListesi

        public void SetKategoriListele(object kategori = null)
        {
            var kategoriList = _kategoriRepository.GetMany(x => x.ParentID == 0).ToList();
            ViewBag.Kategori = kategoriList;
        }

        #endregion KategoriListesi
    }
}