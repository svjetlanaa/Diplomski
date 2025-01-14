using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Entities.OrderAggregate;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class 
    StoreContext : IdentityDbContext<User, Role, int>
    {
        public StoreContext (DbContextOptions options) : base(options)
        {

        }
        public DbSet<Product>Oprema{get; set;}
        public DbSet<Basket> BasketOprema{get; set;}
        public DbSet<Order>Orders{get; set;}
         public DbSet<Reservation> RezervisanaOprema { get; set; }

       
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>()
                    .HasOne(a =>a.Address)
                    .WithOne()
                    .HasForeignKey<UserAddress>(a =>a.Id)
                    .OnDelete(DeleteBehavior.Cascade);
            
            builder.Entity<Role>()
            .HasData(
                new Role{Id=1, Name = "Member", NormalizedName="MEMBER"},
                new Role{Id=2, Name = "Admin", NormalizedName="ADMIN"}
            );
        }
    }
}