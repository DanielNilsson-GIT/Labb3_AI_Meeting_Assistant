using Labb3_AI_Meeting_Assistant.DTOs;
using Labb3_AI_Meeting_Assistant.Services;
using Labb3_AI_Meeting_Assistant.Utilities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi;
using System.Net.Http.Headers;
using System.Text.Json;


namespace Labb3_AI_Meeting_Assistant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    
    public class chatController : ControllerBase
    {
       
        private readonly IAiService _aiService;

        public chatController(IAiService aiService)
        {
            _aiService = aiService;
        }

        [HttpPost("summarize")]
        public async Task<IActionResult> Summarize([FromBody]chatRequestDto dto)
        {
            try
            {

            var answer = await _aiService.SendPrompt(SystemPrompts.summarizePrompt, dto.chatRequest);
            var deserializedsummary = JsonSerializer.Deserialize<meetingNotesDto>(answer);
            return Ok(deserializedsummary);
            }
            catch(Exception ex)
            {
                errorDto erdto = new();
                erdto.error=ex.Message;
                return StatusCode(503, erdto);
            }

        }

        [HttpPost("agenda")]
        public async Task<IActionResult> Agenda([FromBody]chatRequestDto dto)
        {
            try
            {

            var answer = await _aiService.SendPrompt(SystemPrompts.agendaPrompt, dto.chatRequest);
            var deserializedagenda = JsonSerializer.Deserialize<meetingAgendaDto>(answer);
            return Ok(deserializedagenda);
            }
              catch(Exception ex)
            {
                errorDto erdto = new();
                erdto.error = ex.Message;
                return StatusCode(503, erdto);
            }
        }

        [HttpPost("meetinginvite")]
        public async Task<IActionResult> MeetingInvite([FromBody] chatRequestDto dto)
        {
            try
            {

            var answer = await _aiService.SendPrompt(SystemPrompts.meetingInvitationPrompt, dto.chatRequest);

            Console.WriteLine(answer);

            var deserializedinvite = JsonSerializer.Deserialize<meetingInviteDto>(answer);

            

            return Ok(deserializedinvite);
            }
            catch (Exception ex)
            {
                errorDto erdto = new();
                erdto.error = ex.Message;
                return StatusCode(503, erdto);
            }
        }


    }
}
