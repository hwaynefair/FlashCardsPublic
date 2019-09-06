namespace CoreAPI21
{
    public partial class FlashCards
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public string Category { get; set; }
        public bool? Answered { get; set; }
    }
}
