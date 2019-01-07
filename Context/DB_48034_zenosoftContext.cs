using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CoreAPI21withAngular.Models
{
    public partial class DB_48034_zenosoftContext : DbContext
    {
        public DB_48034_zenosoftContext()
        {
        }

        public DB_48034_zenosoftContext(DbContextOptions<DB_48034_zenosoftContext> options)
            : base(options)
        {
        }

        // Unable to generate entity type for table 'dbo.FlashCards'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=s18.winhost.com;Database=DB_48034_zenosoft;User Id=DB_48034_zenosoft_user;Password=innerfit7;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}
    }
}
