using HaberSistemi.Data.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HaberSistemi.Data.DataContext
{
    public class HaberContext : DbContext
    {
        public DbSet<Rol> Rol { get; set; }

        public DbSet<Kullanici> Kullanici { get; set; }
    }
}