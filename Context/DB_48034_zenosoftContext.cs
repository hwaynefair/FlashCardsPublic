using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CoreAPI21
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
        public virtual DbSet<FlashCards> FlashCards { get; set; }       
        // Unable to generate entity type for table 'dbo.BUActs'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.PaletteColorBU'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.Websites'. Please see the warning messages.

  

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FlashCards>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Answer).HasColumnName("answer");

                entity.Property(e => e.Answered).HasColumnName("answered");

                entity.Property(e => e.Category)
                    .HasColumnName("category")
                    .HasMaxLength(250);

                entity.Property(e => e.Question).HasColumnName("question");
            });


          
        }
    }
}
