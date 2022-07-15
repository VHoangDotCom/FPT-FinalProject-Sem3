﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ElevatorSystem.Admin.Models;
using ElevatorSystem.Admin.Models.Entity;

namespace ElevatorSystem.Admin.Controllers.AdminController
{
    public class CategoriesController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Categories
        public ActionResult Index()
        {
            return View(db.Categories.ToList());
        }

        // GET: Categories/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return HttpNotFound();
            }
            return View(category);
        }

        // GET: Categories/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Categories/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Name,Description,CreatedAt,ModifiedAt,DeletedAt")] Category category)
        {
            if (ModelState.IsValid)
            {
                category.CreatedAt = DateTime.Today;
                db.Categories.Add(category);
                db.SaveChanges();
                TempData["CreateMessage"] = "Category { #" + category.ID + "." + category.Name + " } has been added to the list !";
                return RedirectToAction("Index");
            }

            return View(category);
        }

        // GET: Categories/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return HttpNotFound();
            }
            return View(category);
        }

        // POST: Categories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Name,Description,CreatedAt,ModifiedAt,DeletedAt")] Category category)
        {
            if (ModelState.IsValid)
            {
                category.ModifiedAt = DateTime.Today;
                db.Entry(category).State = EntityState.Modified;
                db.SaveChanges();
                TempData["UpdateMessage"] = "Category { #" + category.ID + "." + category.Name + " } has been updated !";
                return RedirectToAction("Index");
            }
            return View(category);
        }

        // GET: Categories/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Category category = db.Categories.Find(id);
           
            if (category == null)
            {
                return HttpNotFound();
            }
            return View(category);
        }

        // POST: Categories/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
           
            Category category = db.Categories.Find(id);
            category.DeletedAt = DateTime.Today;

            //Check Product List
            IEnumerable<Elevator> elevatorList = db.Elevators.ToList();
            var result = elevatorList.GroupBy(x => x.Category)
                                     .Where(x => x.Count() >= 1)
                                     .Select(y => new { category = y.Key, Count = y.Count() });

            var result1 = from product1 in db.Elevators
                         where (product1.CategoryID == id)
                          select new { product1};

            if(result1.Count() < 1)
            {
                db.Categories.Remove(category);
                db.SaveChanges();
                TempData["DeleteMessage"] = "Category { #" + category.ID + "." + category.Name + " } has been removed from the list !";
                return RedirectToAction("Index");
            }
            else
            {
                ViewData["InvalidRemove"] = "Cannot remove category { #" + category.ID + "." + category.Name + " } because it has ";
                return View(category);
            }
            
         
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
