using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.DataContext;
using HaberSistemi.Data.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Linq.Expressions;

namespace HaberSistemi.Core.Repostitory
{
    public class KullaniciRepository : IKullaniciRepository
    {
        private readonly HaberContext _context = new HaberContext();

        public void Insert(Kullanici obj)
        {
            _context.Kullanici.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(Kullanici obj)
        {
            _context.Kullanici.AddOrUpdate(obj);
        }

        public void Delete(int id)
        {
            var KullaniciAl = GetById(id);
            if (KullaniciAl != null)
            {
                _context.Kullanici.Remove(KullaniciAl);
            }
        }

        public int Count()
        {
            return _context.Kullanici.Count(); // Haber tablomuzdaki kayıt sayımızı verecek.
        }

        public Kullanici Get(Expression<Func<Kullanici, bool>> expression)
        {
            return _context.Kullanici.FirstOrDefault(expression); // Burada da tek bir değer dönecek ancak expression sonucuna göre değer dönecek.
        }

        public IEnumerable<Kullanici> GetAll()
        {
            return _context.Kullanici.Select(x => x); // Tüm Kullanicilar dönecek
        }

        public Kullanici GetById(int id)
        {
            return _context.Kullanici.FirstOrDefault(x => x.ID == id); // Sadece gelen id'ye ait değer dönecek.
        }

        public IQueryable<Kullanici> GetMany(Expression<Func<Kullanici, bool>> expression)
        {
            return _context.Kullanici.Where(expression); // Burada da  birden fazla değer dönecek ancak expression sonucuna göre değer dönecek.
        }
    }
}