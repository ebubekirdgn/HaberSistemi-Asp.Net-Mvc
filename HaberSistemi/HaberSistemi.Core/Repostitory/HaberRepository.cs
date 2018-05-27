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
    public class HaberRepository : IHaberRepository
    {
        private readonly HaberContext _context = new HaberContext();

        public void Insert(Haber obj)
        {
            _context.Haber.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(Haber obj)
        {
            _context.Haber.AddOrUpdate(obj);
        }

        public void Delete(int id)
        {
            var Haber = GetById(id);
            if (Haber != null)
            {
                _context.Haber.Remove(Haber);
            }
        }

        public int Count()
        {
            return _context.Haber.Count(); // Haber tablomuzdaki kayıt sayımızı verecek.
        }

        public Haber Get(Expression<Func<Haber, bool>> expression)
        {
            return _context.Haber.FirstOrDefault(expression); // Burada da tek bir değer dönecek ancak expression sonucuna göre değer dönecek.
        }

        public IEnumerable<Haber> GetAll()
        {
            return _context.Haber.Select(x => x); // Tüm haberler dönecek
        }

        public Haber GetById(int id)
        {
            return _context.Haber.FirstOrDefault(x => x.ID == id); // Sadece gelen id'ye ait değer dönecek.
        }

        public IQueryable<Haber> GetMany(Expression<Func<Haber, bool>> expression)
        {
            return _context.Haber.Where(expression); // Burada da  birden fazla değer dönecek ancak expression sonucuna göre değer dönecek.
        }
    }
}