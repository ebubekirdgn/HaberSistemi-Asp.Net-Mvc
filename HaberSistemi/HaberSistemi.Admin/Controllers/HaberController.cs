using HaberSistemi.Admin.CustomFilter;
using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.Model;
using System;
using System.Collections.Generic;
using System.IO;
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
        public ActionResult Index()
        {
            var haberListesi = _haberRepository.GetAll();
            return View(haberListesi);
        }

        #region Haber Ekle

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

            if (haber != null)
            {
                Kullanici kullanici = _kullaniciRepository.GetById(Convert.ToInt32(SessionControl));
                haber.KullaniciID = kullanici.ID;
                haber.KategoriID = KategoriID;
                if (VitrinResmi != null)
                {
                    string DosyaAdi = Guid.NewGuid().ToString().Replace("-", "");
                    string Uzanti = System.IO.Path.GetExtension(Request.Files[0].FileName);
                    string TamYol = "/External/Haber/" + DosyaAdi + Uzanti;
                    Request.Files[0].SaveAs(Server.MapPath(TamYol));
                    haber.Resim = TamYol;
                }
                _haberRepository.Insert(haber);
                _haberRepository.Save();

                string cokluResims = System.IO.Path.GetExtension(Request.Files[1].FileName);
                if (cokluResims != "")
                {
                    foreach (var file in DetayResim)
                    {
                        if (file.ContentLength > 0)
                        {
                            string DosyaAdi = Guid.NewGuid().ToString().Replace("-", "");
                            string Uzanti = System.IO.Path.GetExtension(Request.Files[1].FileName);
                            string TamYol = "/External/Haber/" + DosyaAdi + Uzanti;
                            file.SaveAs(Server.MapPath(TamYol));

                            var resim = new Resim
                            {
                                ResimUrl = TamYol
                            };
                            resim.HaberID = haber.ID;
                            _resimRepository.Insert(resim);
                            _resimRepository.Save();
                        }
                    }
                }
                TempData["Bilgi"] = "Haber Ekleme İşleminiz Başarılı";
                return RedirectToAction("Index", "Haber");
            }
            return View();
        }

        #endregion Haber Ekle

        #region Haber Sil

        public ActionResult Sil(int id)
        {
            Haber dbHaber = _haberRepository.GetById(id);
            var dbDetayResim = _resimRepository.GetMany(x => x.HaberID == id);

            if (dbHaber == null)
            {
                throw new Exception("Haber Bulunamadı");
            }

            string file_name = dbHaber.Resim;
            string path = Server.MapPath(file_name);
            FileInfo file = new FileInfo(path);
            if (file.Exists) // Dosyanın varlığı kontrol ediliyor. Fiziksel olarak var ise siliniyor.
            {
                file.Delete();
            }
            if (dbDetayResim != null)
            {
                foreach (var item in dbDetayResim)
                {
                    string detayPath = Server.MapPath(item.ResimUrl);
                    FileInfo files = new FileInfo(detayPath);
                    if (files.Exists)
                    {
                        files.Delete();
                    }
                }
            }
            _haberRepository.Delete(id);
            _haberRepository.Save();
            TempData["Bilgi"] = "Haber Başarılı Bir Şekilde Silindi";
            return RedirectToAction("Index", "Haber");
        }

        #endregion Haber Sil

        #region Onay

        public ActionResult Onay(int id)
        {
            Haber gelenHaber = _haberRepository.GetById(id); // id bilgisine göre haber çekildi.

            if (gelenHaber.AktifMi == true)
            {
                gelenHaber.AktifMi = false;
                _haberRepository.Save();
                TempData["Bilgi"] = "Haber Pasif Durumda";
                return RedirectToAction("Index", "Haber");
            }
            else if (gelenHaber.AktifMi == false)
            {
                gelenHaber.AktifMi = true;
                _haberRepository.Save();
                TempData["Bilgi"] = "Haber Aktif Durumda";
                return RedirectToAction("Index", "Haber");
            }

            return View();
        }

        #endregion Onay

        #region Set Kategori listesi

        public void SetKategoriListele(object kategori = null)
        {
            var KategoriList = _kategoriRepository.GetMany(x => x.ParentID == 0).ToList();
            ViewBag.Kategori = KategoriList;
        }

        #endregion Set Kategori listesi

        #region Düzenle

        [LoginFilter]
        [HttpGet]
        public ActionResult Duzenle(int id)
        {
            Haber gelenHaber = _haberRepository.GetById(id);
            if (gelenHaber == null)
            {
                throw new Exception("Haber Bulunamadı");
            }
            else
            {
                SetKategoriListele();
                return View(gelenHaber);
            }
        }

        [LoginFilter]
        [HttpPost]
        public ActionResult Duzenle(Haber haber, int KategoriID)
        {
            Haber gelenHaber = _haberRepository.GetById(haber.ID);

            gelenHaber.Aciklama = haber.Aciklama;
            gelenHaber.AktifMi = haber.AktifMi;
            gelenHaber.Baslik = haber.Baslik;
            gelenHaber.KisaAciklama = haber.KisaAciklama;
            gelenHaber.Aciklama = haber.Aciklama;
            gelenHaber.KategoriID = KategoriID;

            if (gelenHaber == null)
            {
                throw new Exception("Haber Bulunamadı");
            }
            else
            {
                SetKategoriListele();
                return View(gelenHaber);
            }
        }

        #endregion Düzenle
    }
}