using HaberSistemi.Admin.CustomFilter;
using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PagedList;
using System.IO;
using System.Text;

namespace HaberSistemi.Admin.Controllers
{
    public class HaberController : Controller
    {
        #region Veritabanı

        private readonly IHaberRepository _haberRepository;
        private readonly IKullaniciRepository _kullaniciRepository;
        private readonly IKategoriRepository _kategoriRepository;
        private readonly IResimRepository _resimRepository;
        private readonly IEtiketRepository _etiketRepository;

        #endregion Veritabanı

        public HaberController(IHaberRepository haberRepository, IKullaniciRepository kullaniciRepository, IKategoriRepository kategoriRepository, IResimRepository resimRepository, IEtiketRepository etiketRepository)
        {
            _haberRepository = haberRepository;
            _kullaniciRepository = kullaniciRepository;
            _kategoriRepository = kategoriRepository;
            _resimRepository = resimRepository;
            _etiketRepository = etiketRepository;
        }

        //[LoginFilter]
        public ActionResult Index(int Sayfa = 1)
        {
            var HaberListesi = _haberRepository.GetAll();
            return View(HaberListesi.OrderByDescending(x => x.ID).ToPagedList(Sayfa, 20));
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
        public ActionResult Ekle(Haber haber, int KategoriID, HttpPostedFileBase VitrinResmi, IEnumerable<HttpPostedFileBase> DetayResim, string Etiket)
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

                _etiketRepository.EtiketEkle(haber.ID, Etiket);

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

        #region Set Kategori listesi

        public void SetKategoriListele(object kategori = null)
        {
            var KategoriList = _kategoriRepository.GetMany(x => x.ParentID == 0).ToList();
            ViewBag.Kategori = KategoriList;
        }

        #endregion Set Kategori listesi

        #region Aktif / Pasif Yapar

        public ActionResult Onay(int id)
        {
            Haber gelenHaber = _haberRepository.GetById(id);
            if (gelenHaber.AktifMi == true)
            {
                gelenHaber.AktifMi = false;
                _haberRepository.Save();
                TempData["Bilgi"] = "İşleminiz Başarılı";
                return RedirectToAction("Index", "Haber");
            }
            else if (gelenHaber.AktifMi == false)
            {
                gelenHaber.AktifMi = true;
                _haberRepository.Save();
                TempData["Bilgi"] = "İşleminiz Başarılı";
                return RedirectToAction("Index", "Haber");
            }

            return View();
        }

        #endregion Aktif / Pasif Yapar

        #region Haber Düzenle

        [HttpGet]
        [LoginFilter]
        public ActionResult Duzenle(int id)
        {
            Haber gelenHaber = _haberRepository.GetById(id);

            #region Etiket

            var gelenEtiket = gelenHaber.Etiket.Select(x => x.EtiketAdi).ToArray();
            HaberEtiketModel model = new HaberEtiketModel
            {
                Haber = gelenHaber,
                Etiketler = _etiketRepository.GetAll(),
                GelenEtikler = gelenEtiket
            };
            StringBuilder birlestir = new StringBuilder();
            foreach (var etiket in model.GelenEtikler)
            {
                birlestir.Append(etiket.ToString());
                birlestir.Append(",");
            }
            model.EtiketAd = birlestir.ToString();
            #endregion Etiket



            if (gelenHaber == null)
            {
                throw new Exception("Haber Bulunamadı");
            }
            else
            {
                SetKategoriListele();
                return View(model);
            }
        }

        [HttpPost]
        [LoginFilter]
        public ActionResult Duzenle(Haber haber, HttpPostedFileBase VitrinResmi, IEnumerable<HttpPostedFileBase> DetayResim, string EtiketAd)
        {
            Haber gelenHaber = _haberRepository.GetById(haber.ID);
            gelenHaber.Aciklama = haber.Aciklama;
            gelenHaber.AktifMi = haber.AktifMi;
            gelenHaber.Baslik = haber.Baslik;
            gelenHaber.KisaAciklama = haber.KisaAciklama;
            gelenHaber.KategoriID = haber.KategoriID;

            if (VitrinResmi != null)
            {
                string dosyaAdi = gelenHaber.Resim;
                string dosyaYolu = Server.MapPath(dosyaAdi);
                FileInfo dosya = new FileInfo(dosyaYolu);
                if (dosya.Exists)
                {
                    dosya.Delete();
                }

                string file_name = Guid.NewGuid().ToString().Replace("-", "");
                string uzanti = System.IO.Path.GetExtension(Request.Files[0].FileName);
                string TamYol = "/External/Haber/" + file_name + uzanti;
                Request.Files[0].SaveAs(Server.MapPath(TamYol));
                gelenHaber.Resim = TamYol;
            }

            string CokluResim = System.IO.Path.GetExtension(Request.Files[1].FileName);
            if (CokluResim != "")
            {
                foreach (var dosya in DetayResim)
                {
                    string file_name = Guid.NewGuid().ToString().Replace("-", "");
                    string uzanti = System.IO.Path.GetExtension(Request.Files[1].FileName);
                    string TamYol = "/External/Haber/" + file_name + uzanti;
                    dosya.SaveAs(Server.MapPath(TamYol));
                    //Request.Files[1].SaveAs(Server.MapPath(TamYol));
                    var img = new Resim
                    {
                        ResimUrl = TamYol
                    };
                    img.HaberID = gelenHaber.ID;
                    img.EklenmeTarihi = DateTime.Now;
                    _resimRepository.Insert(img);
                    _resimRepository.Save();
                }
            }
            _etiketRepository.EtiketEkle(haber.ID, EtiketAd);
            _haberRepository.Save();
            TempData["Bilgi"] = "Güncelleme İşleminiz Başarılı";
            return RedirectToAction("Index", "Haber");
        }

        #endregion Haber Düzenle

        #region Resim Sil

        public ActionResult ResimSil(int id)
        {
            Resim dbResim = _resimRepository.GetById(id);
            if (dbResim == null)
            {
                throw new Exception("Resim Bulunamadı");
            }
            string file_name = dbResim.ResimUrl;
            string path = Server.MapPath(file_name);
            FileInfo file = new FileInfo(path);
            if (file.Exists)
            {
                file.Delete();
            }
            _resimRepository.Delete(id);
            _resimRepository.Save();
            TempData["Bilgi"] = "Resim Silme İşlemi Başarılı";
            return RedirectToAction("Index", "Haber");
        }

        #endregion Resim Sil
    }
}