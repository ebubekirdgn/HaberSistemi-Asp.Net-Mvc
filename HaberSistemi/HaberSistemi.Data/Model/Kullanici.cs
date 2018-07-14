using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HaberSistemi.Data.Model
{
    [Table("Kullanici")]
    public class Kullanici : BaseEntity
    {
      

        [MaxLength(150, ErrorMessage = "Lütfen 50 karakterden fazla değer girmeyiniz !")]
        [Display(Name = "Ad Soyad")]
        public string AdSoyad { get; set; }

        [Display(Name = "E-mail")]
        [Required]
        [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "Geçerli Bir Mail Adresi Giriniz")]
        public string Email { get; set; }

        [Display(Name = "Şifre")]
        [DataType(DataType.Password)]
        [Required]
        [MaxLength(16, ErrorMessage = "Lütfen 16 karakterden fazla değer girmeyiniz !")]
        public string Sifre { get; set; }


        public int RolID { get; set; }

        public virtual Rol Rol { get; set; }


    }
}
