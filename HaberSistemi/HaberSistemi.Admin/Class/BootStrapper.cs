using Autofac;
using Autofac.Integration.Mvc;
using HaberSistemi.Core.Infrastructure;
using HaberSistemi.Core.Repostitory;
using System.Web.Mvc;

namespace HaberSistemi.Admin.Class
{
    public class BootStrapper
    {
        //boot aşamasında çalışacak

        public static void RunConfig()
        {
            BuildAutoFac();
        }

        private static void BuildAutoFac()
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            builder.RegisterType<HaberRepository>().As<IHaberRepository>();
            builder.RegisterType<KullaniciRepository>().As<IKullaniciRepository>();
            builder.RegisterType<RolRepository>().As<IRolRepository>();
            builder.RegisterType<ResimRepository>().As<IResimRepository>();
            builder.RegisterType<KategoriRepository>().As<IKategoriRepository>();

            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}