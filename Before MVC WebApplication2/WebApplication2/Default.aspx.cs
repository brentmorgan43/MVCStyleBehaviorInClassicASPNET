using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication2
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            bGetData.Click += new EventHandler(this.bGetData_click);
            bSave.Click += new EventHandler(this.bSave_click);

            lblComplete.Text = "";
        }

        void bGetData_click(object sender, EventArgs e)
        {
            tbEmail.Text = "email@domain.com";
            tbFirst.Text = "FirstName";
            tbLast.Text = "LastName";
        }

        void bSave_click(object sender, EventArgs e)
        {
            lblComplete.Text = "Save Complete";
        }

    }
}