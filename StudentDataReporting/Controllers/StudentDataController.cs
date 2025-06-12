using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace StudentDataReporting.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class StudentDataController : ControllerBase
    {

        private readonly StudentDbContext _context;

        public StudentDataController(StudentDbContext context)
        {
            _context = context;
        }

        // Endpoint to get average marks for each student
        [HttpGet("average-marks")]
        public async Task<ActionResult<IEnumerable<object>>> GetAverageMarks()
        {
            var averageMarks = await _context.Marks
                .GroupBy(m => m.StudentId)
                .Select(g => new
                {
                    StudentId = g.Key,
                    StudentName = _context.Students.Where(s => s.Id == g.Key).Select(s => s.Name).FirstOrDefault(),
                    AverageScore = g.Average(m => m.Score)
                }).ToListAsync();

            return Ok(averageMarks);
        }
        [HttpGet("Students")]
        public async Task<ActionResult<IEnumerable<object>>> GetStudent()
        {
            var students = await _context.Students
                .Include(s => s.Marks)
                   .Select(s => new
                   {
                       s.Id,
                       s.Name,
                       Marks = s.Marks.Select(m => new { m.Subject, m.Score }) // No circular ref
                   })
                .ToListAsync();
                
               

            return Ok(students);
        }

        // Endpoint to get marks for a specific student and subject
        [HttpGet("student-subject-marks/{studentId}/{subject}")]
        public async Task<ActionResult<IEnumerable<object>>> GetStudentSubjectMarks(int studentId, string subject)
        {
            var studentMarks = await _context.Marks
                .Where(m => m.StudentId == studentId && m.Subject == subject)
                .Select(m => new
                {
                    m.Subject,
                    m.Score

                })
                .ToListAsync();

            return Ok(studentMarks);
        }
    }
}
