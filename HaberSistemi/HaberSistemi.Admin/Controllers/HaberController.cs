﻿using HaberSistemi.Admin.CustomFilter;
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

        #region Set Kategori listesi

        public void SetKategoriListele(object kategori = null)
        {
            var KategoriList = _kategoriRepository.GetMany(x => x.ParentID == 0).ToList();
            ViewBag.Kategori = KategoriList;
        }

        #endregion Set Kategori listesi
    }
}