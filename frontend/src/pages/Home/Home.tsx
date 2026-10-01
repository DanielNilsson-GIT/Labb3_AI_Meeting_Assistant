import Top from "../../components/Top/Top";
import ButtonSection from "../../components/ButtonSection/ButtonSection";
import UserInputField from "../../components/UserInputField/UserInputField";
import Result from "../../components/Result/Result";
import "./HomeStyle.css";
import { useState } from "react";
import { type MeetingNotes } from "../../types/types";
import { type MeetingAgenda } from "../../types/types";
import { type MeetingInvite } from "../../types/types";

function Home() {
    const [answer, setAnswer] = useState<
        MeetingNotes | MeetingAgenda | MeetingInvite | null
    >(null);
    return (
        <div className="Home">
            <Top />
            <ButtonSection />
            <UserInputField fieldType="text" setAnswer={setAnswer} />
            <Result aiResult={answer} />
        </div>
    );
}
export default Home;
