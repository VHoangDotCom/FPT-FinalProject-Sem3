using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ElevatorSystem.Admin.Models.ViewModels
{
    public class ComplaintHeaderViewModel
    {
      
        public string AddressLine2 { get; set; }
        public string FullName { get; set; }
        public string Title { get; set; }
        public int TimeAgo { get; set; }
        public ComplaintHeaderViewModel()
        {

        }

    }
}