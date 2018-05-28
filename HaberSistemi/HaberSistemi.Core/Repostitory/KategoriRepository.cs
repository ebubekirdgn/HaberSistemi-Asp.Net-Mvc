using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.DataContext;
using HaberSistemi.Data.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace HaberSistemi.Core.Repostitory
{
    public class KategoriRepository : IKategoriRepository
    {
        private readonly HaberContext _context = new HaberContext();

        public void Insert(Kategori obj)
        {
            _context.Kategori.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(Kategori obj)
        {
            _context.Kategori.AddOrUpdate(obj);
        }

        public void Delete(int id)
        {
            var KategoriAl = GetById(id);
            if (KategoriAl != null)
            {
                _context.Kategori.Remove(KategoriAl);
            }
        }

        public int Count()
        {
            return _context.Kategori.Count(); // Haber tablomuzdaki kayıt sayımızı verecek.
        }

        public Kategori Get(Expression<Func<Kategori, bool>> expression)
        {
            return _context.Kategori.FirstOrDefault(expression); // Burada da tek bir değer dönecek ancak expression sonucuna göre değer dönecek.
        }

        public IEnumerable<Kategori> GetAll()
        {
            return _context.Kategori.Select(x => x); // Tüm haberler dönecek
        }

        public Kategori GetById(int id)
        {
            return _context.Kategori.FirstOrDefault(x => x.ID == id); // Sadece gelen id'ye ait değer dönecek.
        }

        public IQueryable<Kategori> GetMany(Expression<Func<Kategori, bool>> expression)
        {
            return _context.Kategori.Where(expression); // Burada da  birden fazla değer dönecek ancak expression sonucuna göre değer dönecek.
        }
    }
}