import type { MeetingAgenda } from "../../types/types";

function MeetingAgendaResult({ aiResult }: { aiResult: MeetingAgenda }) {
    return (
        <>
            <section className="result">
                <h2 className="result__heading">RESULT</h2>

                <p>Titel:{aiResult.meetingTitle}</p>
                <p>Agenda:{aiResult.agendaList}</p>
            </section>
        </>
    );
}
export default MeetingAgendaResult;
//funktionen tar emot en prop som heter aiResult, och aiResult ska vara av typen MeetingAgenda.
