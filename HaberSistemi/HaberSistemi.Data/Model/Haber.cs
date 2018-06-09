using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HaberSistemi.Data.Model
{
    [Table("Haber")]
    public class Haber : BaseEntity
    {
        [Display(Name = "Açıklama"), MaxLength(255, ErrorMessage = "Max 255 karakter girebilirsiniz.")]
        [Required]
        public string Baslik { get; set; }

        [Display(Name = "Kısa Açıklama"), MaxLength(50, ErrorMessage = "Max 50 karakter girebilirsiniz.")]
        public string KisaAciklama { get; set; }

        [Display(Name = "Açıklama")]
        public string Aciklama { get; set; }

        public int OkunmaSayisi { get; set; }

        [Display(Name = "Resim")]
        public string Resim { get; set; }

        public virtual Kullanici Kullanici { get; set; }
        public virtual ICollection<Resim> Resims { get; set; }

        public virtual Kategori Kategori { get; set; }
    }
}