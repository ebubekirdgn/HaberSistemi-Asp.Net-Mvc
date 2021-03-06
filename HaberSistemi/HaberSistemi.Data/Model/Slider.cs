﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HaberSistemi.Data.Model
{
    [Table("Slider")]
    public class Slider : BaseEntity
    {
        [Display(Name="Başlık")]
        [MinLength(3,ErrorMessage="En az {1} Karakter Olabilir !"),MaxLength(255,ErrorMessage="{0} Karakterden Fazla Olamaz")]
        public string Baslik { get; set; }

        [Display(Name = "URL")]
        [MinLength(3, ErrorMessage = "En az {0} Karakter Olabilir !"), MaxLength(255, ErrorMessage = "{1} Karakterden Fazla Olamaz")]
        public string URL { get; set; }

        [Display(Name = "Açıklama")]
        [MinLength(3, ErrorMessage = "En az {0} Karakter Olabilir !"), MaxLength(255, ErrorMessage = "{1} Karakterden Fazla Olamaz")]
        public string Aciklama { get; set; }

        [Display(Name = "Resim")]
        [MinLength(3, ErrorMessage = "En az {0} Karakter Olabilir !"), MaxLength(255, ErrorMessage = "{1} Karakterden Fazla Olamaz")]
        [Required(ErrorMessage="Zorunlu Alan")]
        public string ResimURL { get; set; }
    }
}
