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
    public class RolRepository : IRolRepository
    {
        private readonly HaberContext _context = new HaberContext();

        public void Insert(Rol obj)
        {
            _context.Rol.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(Rol obj)
        {
            _context.Rol.AddOrUpdate(obj);
        }

        public void Delete(int id)
        {
            var RolAl = GetById(id);
            if (RolAl != null)
            {
                _context.Rol.Remove(RolAl);
            }
        }

        public int Count()
        {
            return _context.Rol.Count(); // Haber tablomuzdaki kayıt sayımızı verecek.
        }

        public Rol Get(Expression<Func<Rol, bool>> expression)
        {
            return _context.Rol.FirstOrDefault(expression); // Burada da tek bir değer dönecek ancak expression sonucuna göre değer dönecek.
        }

        public IEnumerable<Rol> GetAll()
        {
            return _context.Rol.Select(x => x); // Tüm Kullanicilar dönecek
        }

        public Rol GetById(int id)
        {
            return _context.Rol.FirstOrDefault(x => x.ID == id); // Sadece gelen id'ye ait değer dönecek.
        }

        public IQueryable<Rol> GetMany(Expression<Func<Rol, bool>> expression)
        {
            return _context.Rol.Where(expression); // Burada da  birden fazla değer dönecek ancak expression sonucuna göre değer dönecek.
        }
    }
}