import "../Result/ResultStyle.css";

import type { MeetingNotes } from "../../types/types";
import type { MeetingAgenda } from "../../types/types";
import type { MeetingInvite } from "../../types/types";
import type { boterror } from "../../types/types";
import MeetingnotesResult from "../MeetingnotesResult/MeetingnotesResult";
import MeetingAgendaResult from "../MeetingAgendaResult/MeetingAgendaResult";
import MeetingInviteResult from "../MeetingInviteResult/MeetingInviteResult";
import Errorresult from "../Errorresult/Errorresult";

function Result({
    aiResult,
    statusloading,
}: {
    aiResult: MeetingNotes | MeetingAgenda | MeetingInvite | boterror | null;
    statusloading: boolean;
}) {
    if (statusloading === true) {
        return <p>Working on a response...</p>;
    } else {
        if (aiResult != null && "title" in aiResult) {
            return <MeetingnotesResult aiResult={aiResult} />;
        } else if (aiResult != null && "meetingTitle" in aiResult) {
            return <MeetingAgendaResult aiResult={aiResult} />;
        } else if (aiResult != null && "agenda" in aiResult) {
            return <MeetingInviteResult aiResult={aiResult} />;
        } else if (aiResult != null && "error" in aiResult) {
            return <Errorresult aiResult={aiResult} />;
        } else {
            return (
                <>
                    <section className="result"></section>
                </>
            );
        }
    }
}

export default Result;
