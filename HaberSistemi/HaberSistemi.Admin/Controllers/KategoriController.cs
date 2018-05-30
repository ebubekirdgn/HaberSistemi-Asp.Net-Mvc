using HaberSistemi.Admin.Class;
using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.Model;
using System;
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
            return View();
        }

        public ActionResult Ekle()
        {
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

        public ActionResult Listele()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Listele(Kategori kategori)
        {
            return View();
        }
    }
}