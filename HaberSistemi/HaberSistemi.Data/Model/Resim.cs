using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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