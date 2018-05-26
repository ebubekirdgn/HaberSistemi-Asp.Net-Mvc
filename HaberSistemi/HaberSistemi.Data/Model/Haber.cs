using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HaberSistemi.Data.Model
{
    [Table("Haber")]
    public class Haber
    {
        [Key]
        public int ID { get; set; }

        public string Baslik { get; set; }
        public string KisaAciklama { get; set; }
        public string Aciklama { get; set; }
        public bool IsActive { get; set; }
        public DateTime EklenmeTarihi { get; set; }

        public virtual Kullanici Kullanici { get; set; }
        public string Resim { get; set; }
    }
}