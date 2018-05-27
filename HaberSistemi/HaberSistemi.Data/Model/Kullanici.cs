using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HaberSistemi.Data.Model
{
    [Table("Kullanici")]
    public class Kullanici
    {
        [Key]
        public int ID { get; set; }

        [Display(Name = "Adı Soyadı")]
        public string AdSoyad { get; set; }

        [EmailAddress]
        [Display(Name = "Email Adresi"), Required]
        public string Email { get; set; }

        [DataType(DataType.Password), Required, MaxLength(20, ErrorMessage = "Max 20 karakter"), MinLength(20, ErrorMessage = "Min 6 karakter")]
        [Display(Name = "Şifre")]
        public string Sifre { get; set; }

        [Display(Name = "Kayıt Tarihi")]
        public DateTime KayitTarihi { get; set; }

        [Display(Name = "Aktif")]
        public bool IsActive { get; set; }

        public virtual Rol Rol { get; set; }
    }
}