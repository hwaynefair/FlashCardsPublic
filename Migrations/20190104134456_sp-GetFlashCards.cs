using Microsoft.EntityFrameworkCore.Migrations;

namespace CoreAPI21withAngular.Migrations
{
    public partial class spGetFlashCards : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE PROCEDURE [dbo].[GetFlashCards]
                    @Category varchar(50)
                AS
                BEGIN
                    SET NOCOUNT ON;
                    select * from FlashCards where category =  @Category;
                END";

            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
