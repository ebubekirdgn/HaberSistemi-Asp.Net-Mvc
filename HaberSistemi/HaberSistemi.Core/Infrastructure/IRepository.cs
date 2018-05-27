using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace HaberSistemi.Data.Infrastructure
{
    public interface IRepostitory<T> where T : class
    {
        IEnumerable<T> GetAll(); // Tüm datamızı getirecek olan method

        T GetById(int id); // Tek bir data getirecek olan method

        T Get(Expression<Func<T, bool>> expression);

        IQueryable<T> GetMany(Expression<Func<T, bool>> expression); //Birden fazla değer dönecek ama expressiona göre dönecek.

        void Insert(T obj); // Ekleme işlemi yapacak olan method

        void Update(T obj); //Güncelleme yapacak olan method

        void Delete(int id); // Silme yapacak olan method

        int Count();//Kayıt sayımızı verecek olan method

        void Save();// Kaydetme methodumuz
    }
}