using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HaberSistemi.Data.Model
{
    [Table("Resim")]
    public class Resim
    {
        [Key]
        public int ID { get; set; }

        public string ResimUrl { get; set; }

        public virtual Haber Haber { get; set; }
    }
}