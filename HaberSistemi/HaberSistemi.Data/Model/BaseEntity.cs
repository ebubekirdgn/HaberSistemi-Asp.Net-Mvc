using System;
using System.ComponentModel.DataAnnotations;

namespace HaberSistemi.Data.Model
{
    public class BaseEntity
    {
        [Key]
        public int ID { get; set; }

        private DateTime Tarih = DateTime.Now;
        private bool Aktif = true;

        public DateTime EklenmeTarihi
        {
            get
            {
                return Tarih;
            }
            set
            {
                Tarih = value;
            }
        }

        public bool AktifMi
        {
            get
            {
                return Aktif;
            }
            set
            {
                Aktif = value;
            }
        }
    }
}