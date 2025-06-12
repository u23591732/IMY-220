using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace StudentDataReporting.Migrations
{
    /// <inheritdoc />
    public partial class firstmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Marks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentId = table.Column<int>(type: "int", nullable: false),
                    Subject = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Score = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Marks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Marks_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Alice" },
                    { 2, "Bob" },
                    { 3, "Charlie" },
                    { 4, "David" },
                    { 5, "Eva" },
                    { 6, "Frank" },
                    { 7, "Grace" },
                    { 8, "Hannah" },
                    { 9, "Isaac" },
                    { 10, "Jack" }
                });

            migrationBuilder.InsertData(
                table: "Marks",
                columns: new[] { "Id", "Score", "StudentId", "Subject" },
                values: new object[,]
                {
                    { 1, 85, 1, "Math" },
                    { 2, 90, 2, "Math" },
                    { 3, 78, 3, "Math" },
                    { 4, 92, 4, "Math" },
                    { 5, 88, 5, "Math" },
                    { 6, 76, 6, "Math" },
                    { 7, 80, 7, "Math" },
                    { 8, 95, 8, "Math" },
                    { 9, 91, 9, "Math" },
                    { 10, 84, 10, "Math" },
                    { 11, 89, 1, "English" },
                    { 12, 95, 2, "English" },
                    { 13, 76, 3, "English" },
                    { 14, 92, 4, "English" },
                    { 15, 82, 5, "English" },
                    { 16, 50, 6, "English" },
                    { 17, 45, 7, "English" },
                    { 18, 71, 8, "English" },
                    { 19, 100, 9, "English" },
                    { 20, 60, 10, "English" },
                    { 21, 55, 1, "Science" },
                    { 22, 58, 2, "Science" },
                    { 23, 62, 3, "Science" },
                    { 24, 70, 4, "Science" },
                    { 25, 66, 5, "Science" },
                    { 26, 75, 6, "Science" },
                    { 27, 65, 7, "Science" },
                    { 28, 82, 8, "Science" },
                    { 29, 63, 9, "Science" },
                    { 30, 75, 10, "Science" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Marks_StudentId",
                table: "Marks",
                column: "StudentId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Marks");

            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
