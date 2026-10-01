import type { MeetingNotes } from "../../types/types";

function MeetingnotesResult({ aiResult }: { aiResult: MeetingNotes }) {
    let paragraf;
    if (aiResult.todo === null) {
        paragraf = <p></p>;
    } else {
        paragraf = <p>Att göra: {aiResult.todo}</p>;
    }

    return (
        <>
            <section className="result">
                <h2 className="result__heading">RESULT</h2>
                <p>Titel: {aiResult.title}</p>
                <p>{aiResult.bulletlist.heading}</p>
                <p>{aiResult.bulletlist.summary}</p>
                <p>Datum: {aiResult.date}</p>
                {paragraf}
                <p>{aiResult.totalsummary}</p>
            </section>
        </>
    );
}
export default MeetingnotesResult;
