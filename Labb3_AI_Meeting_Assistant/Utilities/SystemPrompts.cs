namespace Labb3_AI_Meeting_Assistant.Utilities
{
    public static class SystemPrompts
    {
        public static string summarizePrompt = "Du MÅSTE fylla alla properties enligt json-strängen även om användaren inte har angett något. Skriv i så fall ej angivet. Användaren kommer att ge dig mötesanteckningar. " +
    "Sammanfatta anteckningarna så att användaren enkelt kan gå tillbaka och förstå vad som diskuterades. " +
    "Svaret ska endast vara giltig JSON enligt följande struktur: " +
    """
    {
      "title": "string",
      "date": "2026-09-25",
      "bulletlist": [
        {
          "heading": "string",
          "summary": "string"
        }
      ],
      "todo": [
        "string"
      ],
      "totalsummary": "string"
    }
    """ +
    "Om det inte finns några att-göra-punkter ska attGora vara null." +
            "Date ska anges i formatet YYYY-MM-DD. om inget datum angetts så ta dagens datum";


        public static string agendaPrompt = "Du MÅSTE fylla alla properties enligt json-strängen även om användaren inte har angett något. Skriv i så fall ej angivet. Du ska skapa en mötesagenda utifrån användarens önskemål. " +
    "Agendan ska bestå av en mötestitel och en punktlista med ämnen som ska tas upp. " +
    "Svaret ska endast vara giltig JSON enligt följande struktur: " +
    """
    {
      "meetingTitle": "string",
      "agendaList": [
        "string"
      ]
    }
    """;

        public static string meetingInvitationPrompt = "Du ska skapa en mötesinbjudan baserat på användarens text. " +
    "Svaret ska endast vara giltig JSON enligt följande struktur: " +
    """
    {
      "agenda": {
        "meetingTitle": "string",
        "agendaList": [
          "string"
        ]
      },
      "date": "2026-09-25",
      "time": "14:30:00",
      "meetingroom": "string",
      "farewellmessage": "string"
    }
    """ +
    "Date ska anges i formatet YYYY-MM-DD. " +
    "Time ska anges i formatet HH:mm:ss. " +
    "Farewellmessage ska vara en kort välkomnande avslutning, exempelvis 'Välkommen!'. Du MÅSTE fylla alla properties enligt json-strängen även om användaren inte har angett något. Skriv i så fall ej angivet";
            

    }
}


