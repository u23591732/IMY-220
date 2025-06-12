namespace StudentDataReporting.Data
{
    public class Student
    {
       
            public int Id { get; set; }
            public string Name { get; set; }
            public ICollection<Marks> Marks { get; set; }
       
    }
}
