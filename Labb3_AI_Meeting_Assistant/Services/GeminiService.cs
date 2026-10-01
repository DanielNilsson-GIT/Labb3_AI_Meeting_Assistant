using Google.GenAI;
using Google.GenAI.Types;
using Labb3_AI_Meeting_Assistant.DTOs;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;

namespace Labb3_AI_Meeting_Assistant.Services
{
    public class GeminiService:IAiService
    {
        string[] aiModels =["gemini-3.8-flash", "gemini-3.7-flash", "gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.4-flash"];
        private readonly string _apiKey;
        
        
        public GeminiService(IConfiguration config)
        {
            _apiKey = config["GEMINI_API_KEY"];
        }
        public async Task<string> SendPrompt(string systemPrompt, string userPrompt)
        {
            var client = new Client(apiKey: _apiKey);

            GenerateContentConfig config = new GenerateContentConfig
            {
                SystemInstruction = new Content
                {
                    Parts = [new Part { Text = systemPrompt }]
                }
            };

            foreach (string aimodel in aiModels)
            {
                try
                {
                var response = await client.Models.GenerateContentAsync(model: aimodel, contents: userPrompt, config);

                    return response.Candidates[0].Content.Parts[0].Text;
                }
                catch { continue; }
              
            }
            throw new Exception("Ingen AI-modell är tillgänglig jusr nu");
        }
    }
}
