using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace HaberSistemi.Admin.CustomFilter
{
    public class LoginFilter : FilterAttribute, IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext filterContext)
        {
            // Action Method çalıştırıldıktan sonra devreye giriyor.
            HttpContextWrapper wrapper = new HttpContextWrapper(HttpContext.Current);
            var SessionControl = filterContext.HttpContext.Session["KullaniciEmail"];
            if (SessionControl == null)
            {
                filterContext.Result = new RedirectToRouteResult
                (
                    new RouteValueDictionary { { "controller", "Account" }, { "action", "Login" } }
                );
            }
        }

        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // Action Method tetiklendiği anda devreye giriyor.
        }
    }
}