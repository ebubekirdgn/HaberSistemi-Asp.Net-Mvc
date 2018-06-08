using HaberSistemi.Admin.Class;
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
        private readonly IHaberRepository _haberRepository;

        public HaberController(IHaberRepository haberRepository)
        {
            _haberRepository = haberRepository;
        }
 
        #region HaberEkle
        //[LoginFilter]
        public ActionResult Ekle()
        {
            //SetKategoriListele();
            return View();
        }

        [HttpPost]
        public JsonResult Ekle(Haber haber)
        {
            try
            {
                _haberRepository.Insert(haber);
                _haberRepository.Save();
                return Json(new ResultJson { Success = true, Message = "Kategori ekleme işleminiz başarılı." });
            }
            catch (Exception)
            {
                return Json(new ResultJson { Success = false, Message = "Hata Oluştu!." });
            }
        }

        #endregion HaberEkle

         
    }
}