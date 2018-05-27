using HaberSistemi.Admin.Class;
using System.Web.Mvc;
using System.Web.Routing;

namespace HaberSistemi.Admin
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BootStrapper.RunConfig();
        }
    }
}