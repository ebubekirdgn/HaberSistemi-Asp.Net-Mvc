using HaberSistemi.Admin.Class;
using HaberSistemi.Admin.CustomFilter;
using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PagedList;
using PagedList.Mvc;
using HaberSistemi.Admin.Helper;
using System.IO;


namespace HaberSistemi.Admin.Controllers
{
    public class SliderController : Controller
    {
        private readonly ISliderRepository _sliderRepository;

        public SliderController(ISliderRepository sliderRepository)
        {
            _sliderRepository = sliderRepository;
        }

        //
        // GET: /Slider/
        public ActionResult Index(int Sayfa=1)
        {
            var slider = _sliderRepository.GetAll().OrderByDescending(x => x.ID).ToPagedList(Sayfa, 10);
            return View(slider);
        }

        #region Slider Ekleme
        [HttpGet]
        [LoginFilter]
        public ActionResult Ekle()
        {
            return View();
        }

  
        [HttpPost]
        [LoginFilter]
        public JsonResult Ekle(Slider slider,HttpPostedFileBase ResimURL)
        {
            if (slider.ResimURL != null)
            {
                if (ResimURL.ContentLength > 0)
                {
                    string Dosya = Guid.NewGuid().ToString().Replace("-", "");
                    string Uzanti = System.IO.Path.GetExtension(Request.Files[0].FileName);
                    string ResimYolu = "/External/Slider/" + Dosya + Uzanti;

                    ResimURL.SaveAs(Server.MapPath(ResimYolu));
                    slider.ResimURL = ResimYolu;
                }

                _sliderRepository.Insert(slider);
                try
                {
                    _sliderRepository.Save();
                     return Json(new ResultJson { Success = true, Message = "Slider Ekleme İşleminiz Başarılı :)" });
                }
                catch (Exception ex)
                {
                    
                     return Json(new ResultJson { Success = false, Message = "Slider Ekleme İşleminiz Başarısız !" });
                }
            }
            return Json(new ResultJson { Success = false, Message = "Slider Ekleme İşleminiz Başarısız !" });
        }

      
        #endregion



        #region Slider Düzenle

        [HttpGet]
        [LoginFilter]
        public ActionResult Duzenle(int ID)
        {
            var SliderVarmi = _sliderRepository.GetById(ID);
            if (SliderVarmi != null)
            {
                return View(SliderVarmi);
            }
            return View();
        }


        [HttpPost]
        [LoginFilter]
        public ActionResult Duzenle(Slider slider, HttpPostedFileBase ResimURL)
        {
            if (ModelState.IsValid)
            {
                Slider dbSlider = _sliderRepository.GetById(slider.ID);
                dbSlider.Baslik = slider.Baslik;
                dbSlider.Aciklama = slider.Aciklama;
                dbSlider.AktifMi = slider.AktifMi;
                dbSlider.URL = slider.URL;
                if (ResimURL != null && ResimURL.ContentLength > 0)
                {
                    if (dbSlider.ResimURL != null)
                    {
                        string URL = dbSlider.ResimURL;
                        string resimPath = Server.MapPath(URL);
                        FileInfo files = new FileInfo(resimPath);
                        if (files.Exists)
                        {
                            files.Delete();
                        }
                    }

                    ResimYukle.Resim(ResimURL, slider);
                    dbSlider.ResimURL = slider.ResimURL;
                }

                try
                {
                    _sliderRepository.Save();
                    return Json(new ResultJson { Success = true, Message = slider.Baslik + " Slider Ekleme İşlemi Başarılı" });
                }
                catch (Exception ex)
                {
                    
                    //LogYaz();
                    return Json(new ResultJson { Success = false, Message = slider.Baslik + " Slider Ekleme İşlemi Başarısız !" });
                }
            }
            return View();
        }
        #endregion

        #region Slider Sil
        public JsonResult Sil(Slider slider)
        {
            Slider dbSlider = _sliderRepository.GetById(slider.ID);
            if (dbSlider == null)
            {
                return Json(new ResultJson { Success = false, Message = "Slider Bulunamadı !" });
            }

            try
            {
                  if (dbSlider.ResimURL != null)
            {
                string ResimURL = dbSlider.ResimURL;
                string ResimPath = Server.MapPath(ResimURL);
                FileInfo files = new FileInfo(ResimPath);
                if (files.Exists)
                {
                    files.Delete();
                }
            }
            _sliderRepository.Delete(slider.ID);
            _sliderRepository.Save();
            return Json(new ResultJson { Success = true, Message = "Silme İşleminiz Başarılı" });
            }
            catch (Exception ex)
            {

                return Json(new ResultJson { Success = false, Message = "Silme İşleminiz Başarısız" });
            }
        }
        #endregion
    }
}