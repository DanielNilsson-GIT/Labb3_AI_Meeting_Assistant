import type { MeetingNotes } from "../../types/types";

function MeetingnotesResult({ aiResult }: { aiResult: MeetingNotes }) {
    return (
        <>
            <section className="result">
                <h2 className="result__heading">RESULT</h2>

                <p>Titel:{aiResult.title}</p>
                <p>{aiResult.bulletlist.heading}</p>
                <p>{aiResult.bulletlist.summary}</p>
                <p>Datum:{aiResult.date}</p>
                <p>Att göra:{aiResult.todo}</p>
                <p>{aiResult.totalsummary}</p>
            </section>
        </>
    );
}
export default MeetingnotesResult;
