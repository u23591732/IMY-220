﻿namespace StudentDataReporting.Data
{
    public class Marks
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public string Subject { get; set; }
        public int Score { get; set; }
       
        public Student Student { get; set; }
    }
}
