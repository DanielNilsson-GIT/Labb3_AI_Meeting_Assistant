import "../Result/ResultStyle.css";

import type { MeetingNotes } from "../../types/types";
import type { MeetingAgenda } from "../../types/types";
import type { MeetingInvite } from "../../types/types";
import MeetingnotesResult from "../MeetingnotesResult/MeetingnotesResult";
import MeetingAgendaResult from "../MeetingAgendaResult/MeetingAgendaResult";
import MeetingInviteResult from "../MeetingInviteResult/MeetingInviteResult";

function Result({
    aiResult,
}: {
    aiResult: MeetingNotes | MeetingAgenda | MeetingInvite | null;
}) {
    if (aiResult != null && "title" in aiResult) {
        return <MeetingnotesResult aiResult={aiResult} />;
    } else if (aiResult != null && "meetingTitle" in aiResult) {
        return <MeetingAgendaResult aiResult={aiResult} />;
    } else if (aiResult != null && "agenda" in aiResult) {
        return <MeetingInviteResult aiResult={aiResult} />;
    } else {
        return (
            <>
                <section className="result"></section>
            </>
        );
    }
}

export default Result;
