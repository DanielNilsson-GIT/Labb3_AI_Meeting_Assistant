namespace Labb3_AI_Meeting_Assistant.DTOs
{
    public class meetingNotesDto
    {
        public string title { get; set; }
        public DateOnly date { get; set; }
        public bulletListDto[] bulletlist { get; set; }
        public string[] todo { get; set; } 
        public string totalsummary { get; set; }

       

    }
}
