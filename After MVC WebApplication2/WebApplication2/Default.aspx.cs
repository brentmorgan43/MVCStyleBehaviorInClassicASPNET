using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;

namespace WebApplication2
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        [WebMethod]
        public static string GetFieldData()
        {
            XElement root = new XElement("Root");
            root.Add(new XElement("email", "email@domain.com"));
            root.Add(new XElement("firstname", "FirstName"));
            root.Add(new XElement("lastname", "LastName"));
            return JsonConvert.SerializeXNode(root).ToString();
        }

        [WebMethod]
        public static string SavePageData(string FirstName, string LastName, string Email)
        {
            XElement root = new XElement("Root");
            root.Add(new XElement("result", "Save Complete"));
            return JsonConvert.SerializeXNode(root).ToString();
        }
    }
}