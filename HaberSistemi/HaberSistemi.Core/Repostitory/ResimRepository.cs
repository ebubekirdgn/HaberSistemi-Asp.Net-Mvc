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
    public class ResimRepository : IResimRepository
    {
        private readonly HaberContext _context = new HaberContext();

        public void Insert(Resim obj)
        {
            _context.Resim.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(Resim obj)
        {
            _context.Resim.AddOrUpdate(obj);
        }

        public void Delete(int id)
        {
            var ResimAl = GetById(id);
            if (ResimAl != null)
            {
                _context.Resim.Remove(ResimAl);
            }
        }

        public int Count()
        {
            return _context.Resim.Count(); // Haber tablomuzdaki kayıt sayımızı verecek.
        }

        public Resim Get(Expression<Func<Resim, bool>> expression)
        {
            return _context.Resim.FirstOrDefault(expression); // Burada da tek bir değer dönecek ancak expression sonucuna göre değer dönecek.
        }

        public IEnumerable<Resim> GetAll()
        {
            return _context.Resim.Select(x => x); // Tüm haberler dönecek
        }

        public Resim GetById(int id)
        {
            return _context.Resim.FirstOrDefault(x => x.ID == id); // Sadece gelen id'ye ait değer dönecek.
        }

        public IQueryable<Resim> GetMany(Expression<Func<Resim, bool>> expression)
        {
            return _context.Resim.Where(expression); // Burada da  birden fazla değer dönecek ancak expression sonucuna göre değer dönecek.
        }
    }
}