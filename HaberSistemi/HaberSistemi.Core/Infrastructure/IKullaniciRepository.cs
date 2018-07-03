using HaberSistemi.Data.Model;

namespace HaberSistemi.Core.Infrastructure
{
    public interface IKullaniciRepository : IRepository<Kullanici>
    {
        Kullanici KullaniciBul(string Email);
    }
}