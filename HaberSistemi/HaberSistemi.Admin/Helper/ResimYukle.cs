using HaberSistemi.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HaberSistemi.Admin.Helper
{
    public static class ResimYukle
    {
        public static string Resim(HttpPostedFileBase ResimURL,Slider slider)
        {
            string DosyaAdi = Guid.NewGuid().ToString().Replace("-", "");
            string[] uzanti = ResimURL.ContentType.Split('/');
            string TamYolYeri = "/External/Slider/" + DosyaAdi + "." + uzanti[1];

            ResimURL.SaveAs(System.Web.HttpContext.Current.Server.MapPath(TamYolYeri));
            slider.ResimURL = TamYolYeri;
            return slider.ResimURL;
        }
    }
}