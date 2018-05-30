using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HaberSistemi.Data.Model
{
    [Table("Kategori")]
    public class Kategori
    {
        [Key]
        public int ID { get; set; }

        [MinLength(2, ErrorMessage = "En az {0} karakter olmalıdır."), MaxLength(150, ErrorMessage = "{0}'den fazla girmeyiniz")]
        public string KategoriAdi { get; set; }

        public int ParentID { get; set; }

        [MinLength(2, ErrorMessage = "En az {0} karakter olmalıdır."), MaxLength(150, ErrorMessage = "{0}'den fazla girmeyiniz")]
        public string URL { get; set; }

        public bool IsActive { get; set; }

        public virtual ICollection<Haber> Haber { get; set; }
    }
}