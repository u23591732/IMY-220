using Microsoft.EntityFrameworkCore;
using StudentDataReporting.Data;
namespace StudentDataReporting
{
    public class StudentDbContext:DbContext
    {


        public DbSet<Student> Students { get; set; }
        public DbSet<Marks> Marks { get; set; }

        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options) { }

        // Seed data for 15 students
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().HasData(
                new Student { Id = 1, Name = "Alice" },
                new Student { Id = 2, Name = "Bob" },
                new Student { Id = 3, Name = "Charlie" },
                new Student { Id = 4, Name = "David" },
                new Student { Id = 5, Name = "Eva" },
                new Student { Id = 6, Name = "Frank" },
                new Student { Id = 7, Name = "Grace" },
                new Student { Id = 8, Name = "Hannah" },
                new Student { Id = 9, Name = "Isaac" },
                new Student { Id = 10, Name = "Jack" }
          
            );

            modelBuilder.Entity<Marks>().HasData(
                new Marks { Id = 1, StudentId = 1, Subject = "Math", Score = 85 },
                new Marks { Id = 2, StudentId = 2, Subject = "Math", Score = 90 },
                new Marks { Id = 3, StudentId = 3, Subject = "Math", Score = 78 },
                new Marks { Id = 4, StudentId = 4, Subject = "Math", Score = 92 },
                new Marks { Id = 5, StudentId = 5, Subject = "Math", Score = 88 },
                new Marks { Id = 6, StudentId = 6, Subject = "Math", Score = 76 },
                new Marks { Id = 7, StudentId = 7, Subject = "Math", Score = 80 },
                new Marks { Id = 8, StudentId = 8, Subject = "Math", Score = 95 },
                new Marks { Id = 9, StudentId = 9, Subject = "Math", Score = 91},
                new Marks { Id = 10, StudentId = 10, Subject = "Math", Score = 84 },
                new Marks { Id = 11, StudentId = 1, Subject = "English", Score = 89 },
                new Marks { Id = 12, StudentId = 2, Subject = "English", Score = 95 },
                new Marks { Id = 13, StudentId = 3, Subject = "English", Score = 76},
                new Marks { Id = 14, StudentId = 4, Subject = "English", Score = 92},
                new Marks { Id = 15, StudentId = 5, Subject = "English", Score = 82 },
                new Marks { Id = 16, StudentId = 6, Subject = "English", Score = 50 },
                new Marks { Id = 17, StudentId = 7, Subject = "English", Score = 45 },
                new Marks { Id = 18, StudentId = 8, Subject = "English", Score = 71 },
                new Marks { Id = 19, StudentId = 9, Subject = "English", Score = 100 },
                new Marks { Id = 20, StudentId = 10, Subject = "English", Score = 60 },
                new Marks { Id = 21, StudentId = 1, Subject = "Science", Score = 55 },
                new Marks { Id = 22, StudentId = 2, Subject = "Science", Score = 58},
                new Marks { Id = 23, StudentId = 3, Subject = "Science", Score = 62 },
                new Marks { Id = 24, StudentId = 4, Subject = "Science", Score = 70 },
                new Marks { Id = 25, StudentId = 5, Subject = "Science", Score = 66 },
                new Marks { Id = 26, StudentId = 6, Subject = "Science", Score = 75 },
                new Marks { Id = 27, StudentId = 7, Subject = "Science", Score = 65 },
                new Marks { Id = 28, StudentId = 8, Subject = "Science", Score = 82 },
                new Marks { Id = 29, StudentId = 9, Subject = "Science", Score = 63 },
                new Marks { Id = 30, StudentId = 10, Subject = "Science", Score = 75 }

            );

            base.OnModelCreating(modelBuilder);
        }
    }

}
