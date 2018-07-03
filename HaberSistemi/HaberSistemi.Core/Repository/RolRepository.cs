using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;

namespace HaberSistemi.Core.Repository
{
    public class RolRepository : IRolRepository
    {
        private readonly HaberContext _context = new HaberContext();

        public IEnumerable<Data.Model.Rol> GetAll()
        {
            return _context.Rol.Select(x => x); // Tüm Roller dönecek
        }

        public Data.Model.Rol GetById(int id)
        {
            return _context.Rol.FirstOrDefault(x => x.ID == id);
        }

        public Data.Model.Rol Get(System.Linq.Expressions.Expression<Func<Data.Model.Rol, bool>> expression)
        {
            return _context.Rol.FirstOrDefault(expression);
        }

        public IQueryable<Data.Model.Rol> GetMany(System.Linq.Expressions.Expression<Func<Data.Model.Rol, bool>> expression)
        {
            return _context.Rol.Where(expression);
        }

        public void Insert(Data.Model.Rol obj)
        {
            _context.Rol.Add(obj);
        }

        public void Update(Data.Model.Rol obj)
        {
            _context.Rol.AddOrUpdate();
        }

        public void Delete(int id)
        {
            var Rol = GetById(id);
            if (Rol != null)
            {
                _context.Rol.Remove(Rol);
            }
        }

        public int Count()
        {
            return _context.Rol.Count();
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}