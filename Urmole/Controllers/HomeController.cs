using System.Web.Mvc;

namespace Urmole.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AngularWay()
        {
            return View();
        }

        public ActionResult JqueryWay()
        {
            return View();
        }

        public ActionResult MvcWay()
        {
            return View();
        }


        //

        public PartialViewResult ShowModal()
        {
            return PartialView("AngularParials/_Modal");
        }
    }
}