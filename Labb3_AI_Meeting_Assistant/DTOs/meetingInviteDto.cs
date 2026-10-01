namespace Labb3_AI_Meeting_Assistant.DTOs
{
    public class meetingInviteDto
    {
        //gör dessa till en agenda
        public meetingAgendaDto? agenda { get; set; }

        public DateOnly date { get; set; }

        public TimeOnly time { get; set; }

        public string meetingroom { get; set; }

        public string farewellmessage { get; set; }
        
    }
     
}
