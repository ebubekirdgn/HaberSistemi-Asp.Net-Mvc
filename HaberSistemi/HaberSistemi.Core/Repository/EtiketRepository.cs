using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity.Migrations; // AddOrUpdate için gerekli
using HaberSistemi.Data.Model;


namespace HaberSistemi.Core.Repository
{
    public class EtiketRepository : IEtiketRepository
    {
        private readonly HaberContext _context = new HaberContext();

        public IEnumerable<Data.Model.Etiket> GetAll()
        {
            return _context.Etiket.Select(x => x); // Tüm Etiketler dönecek
        }

        public Data.Model.Etiket GetById(int id)
        {
            return _context.Etiket.FirstOrDefault(x => x.ID == id);
        }

        public Data.Model.Etiket Get(System.Linq.Expressions.Expression<Func<Data.Model.Etiket, bool>> expression)
        {
            return _context.Etiket.FirstOrDefault(expression);
        }

        public IQueryable<Data.Model.Etiket> GetMany(System.Linq.Expressions.Expression<Func<Data.Model.Etiket, bool>> expression)
        {
            return _context.Etiket.Where(expression);
        }

        public void Insert(Data.Model.Etiket obj)
        {
            _context.Etiket.Add(obj);
        }

        public void Update(Data.Model.Etiket obj)
        {
            _context.Etiket.AddOrUpdate();
        }

        public void Delete(int id)
        {
            var Etiket = GetById(id);
            if (Etiket != null)
            {
                _context.Etiket.Remove(Etiket);
            }
        }

        public int Count()
        {
            return _context.Etiket.Count();
        }

        public void Save()
        {
            _context.SaveChanges();
        }


        public IQueryable<Data.Model.Etiket> Etiketler(string[] etiketler)
        {
            return _context.Etiket.Where(x => etiketler.Contains(x.EtiketAdi));
        }

        public void EtiketEkle(int HaberID, string Etiket)
        {

            if (Etiket != null && Etiket != "")
            {
                string[] Etikets = Etiket.Split(',');
                foreach (var tag in Etikets)
                {
                    Etiket etiket = this.Get(x => x.EtiketAdi.ToLower() == tag.ToLower().Trim());
                    if (etiket == null)
                    {
                        etiket = new Etiket();
                        etiket.EtiketAdi = tag;
                        this.Insert(etiket);
                        this.Save();
                    }

                }
                this.HaberEtiketEkle(HaberID, Etikets);
            }
            
        }


        public void HaberEtiketEkle(int HaberID, string[] etiketler)
        {
            var Haber = _context.Haber.FirstOrDefault(x => x.ID == HaberID);
            var gelenEtiket = this.Etiketler(etiketler);

            Haber.Etiket.Clear();
            gelenEtiket.ToList().ForEach(etiket => Haber.Etiket.Add(etiket));
            _context.SaveChanges();
        }
    }
}
