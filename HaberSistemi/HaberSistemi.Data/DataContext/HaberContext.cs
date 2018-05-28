﻿using HaberSistemi.Data.Model;
using System.Data.Entity;

namespace HaberSistemi.Data.DataContext
{
    public class HaberContext : DbContext
    {
        public DbSet<Rol> Rol { get; set; }
        public DbSet<Kullanici> Kullanici { get; set; }
        public DbSet<Haber> Haber { get; set; }
        public DbSet<Resim> Resim { get; set; }
        public DbSet<Kategori> Kategori { get; set; }
    }
}