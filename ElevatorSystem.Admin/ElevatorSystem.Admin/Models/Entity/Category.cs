﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ElevatorSystem.Admin.Models.Entity
{
    public class Category
    {
        [Key]
        public int ID { get; set; }
        [Required(ErrorMessage = "Please enter Category name !")]
        public string Name { get; set; }
        public string Description { get; set; }
        [DataType(DataType.Date)]
        public Nullable<DateTime> CreatedAt { get; set; }
        [DataType(DataType.Date)]
        public Nullable<DateTime> ModifiedAt { get; set; }
        [DataType(DataType.Date)]
        public Nullable<DateTime> DeletedAt { get; set; }
        public ICollection<Elevator> Elevators { get; set; }

        public Category()
        {
            this.Name = "";
           // this.CreatedAt = DateTime.Now;
            this.Elevators = new HashSet<Elevator>();
        }

        
    }
}