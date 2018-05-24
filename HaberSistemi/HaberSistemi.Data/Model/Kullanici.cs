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
    public class Kullanici
    {
        [Key]
        public int ID { get; set; }

        public string AdSoyad { get; set; }

        public string Email { get; set; }
        public string Sifre { get; set; }
        public bool IsActive { get; set; }
    }
}