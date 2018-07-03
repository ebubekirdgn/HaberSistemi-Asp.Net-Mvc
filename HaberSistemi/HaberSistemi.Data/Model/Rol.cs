using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HaberSistemi.Data.Model
{
    [Table("Rol")]
    public class Rol : BaseEntity
    {
        [Display(Name = "Rol Adı :")]
        [MinLength(3, ErrorMessage = "Lütfen 3 karakterden fazla değer giriniz !"), MaxLength(150, ErrorMessage = "Lütfen 150 Karakterden Fazla Değer Girmeyiniz !")]
        public string RolAdi { get; set; }
    }
}