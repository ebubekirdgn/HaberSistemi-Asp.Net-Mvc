﻿using HaberSistemi.Admin.Class;
using HaberSistemi.Admin.CustomFilter;
using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.Model;
using System;
using System.Linq;
using System.Web.Mvc;

namespace HaberSistemi.Admin.Controllers
{
    public class KategoriController : Controller
    {
        #region Kategori

        private readonly IKategoriRepository _kategoriRepository;

        public KategoriController(IKategoriRepository kategoriRepository)
        {
            _kategoriRepository = kategoriRepository;
        }

        #endregion Kategori

        #region KategoriEkle

        public ActionResult Ekle()
        {
            SetKategoriListele();
            return View();
        }

        [HttpPost]
        public JsonResult Ekle(Kategori kategori)
        {
            try
            {
                _kategoriRepository.Insert(kategori);
                _kategoriRepository.Save();
                return Json(new ResultJson { Success = true, Message = "Kategori ekleme işleminiz başarılı." });
            }
            catch (Exception)
            {
                return Json(new ResultJson { Success = false, Message = "Hata Oluştu!." });
            }
        }

        #endregion KategoriEkle

        #region KategoriListele

        public ActionResult Index()
        {
            return View(_kategoriRepository.GetAll().ToList());
        }

        public void SetKategoriListele()
        {
            var KategoriList = _kategoriRepository.GetMany(x => x.ParentID == 0).ToList();
            ViewBag.Kategori = KategoriList;
        }

        #endregion KategoriListele

        #region KategoriSil

        public JsonResult Sil(int id)
        {
            Kategori dbKategori = _kategoriRepository.GetById(id);
            if (dbKategori == null)
            {
                return Json(new ResultJson { Success = true, Message = "Kategori Bulunamadı." });
            }
            _kategoriRepository.Delete(id);
            _kategoriRepository.Save();
            return Json(new ResultJson { Success = true, Message = "Kategori Silindi." });
        }

        #endregion KategoriSil

        #region KategoriDüzenle

        [HttpGet]
        [LoginFilter]
        public ActionResult Duzenle(int id)
        {
            Kategori dbKategori = _kategoriRepository.GetById(id);
            if (dbKategori == null)
            {
                throw new Exception("Kategori Bulunamadı.");
            }
            SetKategoriListele();
            return View(dbKategori);
        }

        [HttpPost]
        [LoginFilter]
        public JsonResult Duzenle(Kategori kategori)
        {
            Kategori dbKategori = _kategoriRepository.GetById(kategori.ID);

            dbKategori.AktifMi = kategori.AktifMi;
            dbKategori.KategoriAdi = kategori.KategoriAdi;
            dbKategori.ParentID = kategori.ParentID;
            dbKategori.URL = kategori.URL;
            _kategoriRepository.Save();

            return Json(new ResultJson { Success = true, Message = "Düzenleme İşlemi Başarılı." });

            // return Json(new ResultJson { Success = false, Message = "Düzenleme İşlemi Sırasında Hata!." });
        }

        #endregion KategoriDüzenle
    }
}