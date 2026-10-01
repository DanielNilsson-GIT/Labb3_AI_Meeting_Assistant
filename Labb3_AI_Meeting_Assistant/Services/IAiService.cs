using Microsoft.AspNetCore.Mvc;

namespace Labb3_AI_Meeting_Assistant.Services
{
    public interface IAiService
    {
        public Task<string> SendPrompt(string systemPrompt, string userPrompt);
    }
}
