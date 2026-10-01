import type { MeetingInvite } from "../../types/types";

function MeetingInviteResult({ aiResult }: { aiResult: MeetingInvite }) {
    return (
        <>
            <section className="result">
                <h2 className="result__heading">RESULT</h2>

                <p>Titel:{aiResult.agenda.meetingTitle}</p>
                <p>Agenda:{aiResult.agenda.agendaList}</p>
                <p>Datum:{aiResult.date}</p>
                <p>Tid:{aiResult.time}</p>
                <p>Mötesrum:{aiResult.meetingroom}</p>
                <p>{aiResult.farewellmessage}</p>
            </section>
        </>
    );
}
export default MeetingInviteResult;
