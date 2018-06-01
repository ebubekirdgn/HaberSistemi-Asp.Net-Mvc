﻿using HaberSistemi.Admin.Class;
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

        public ActionResult Index()
        {
            return View(_kategoriRepository.GetAll().ToList());
        }

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

        public void SetKategoriListele()
        {
            var KategoriList = _kategoriRepository.GetMany(x => x.ParentID == 0).ToList();
            ViewBag.Kategori = KategoriList;
        }

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
    }
}