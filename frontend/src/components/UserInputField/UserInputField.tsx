import { useSelector } from "react-redux";
import { type RootState } from "../../store/store";
import "./UserInputFieldStyle.css";
import { useState } from "react";
import chattest from "../../services/chatRequestService";

function UserInputField({
    fieldType,
    setAnswer,
}: {
    fieldType: string;
    setAnswer: (answer: any) => void;
}) {
    const [chatRequest, setChatRequest] = useState("");
    const activeTool = useSelector(
        (state: RootState) => state.tool.selectedTool,
    );

    if (activeTool === "Summary") {
        fieldType = "Write your notes and I will summarize them...";
    } else if (activeTool === "Agenda") {
        fieldType =
            "Let me help you create an agenda. What is this meeting about?";
    } else {
        fieldType = "Let's create a meeting invitation";
    }

    return (
        <>
            <form
                action=""
                className="user-input"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const answer = await chattest(chatRequest);
                    setAnswer(answer);
                    console.log(answer);
                }}
            >
                <input
                    placeholder={fieldType}
                    className="user-input__field"
                    onChange={(e) => setChatRequest(e.target.value)}
                ></input>
                <button type="submit" className="user-input__generate">
                    Generate
                </button>
            </form>
        </>
    );
}
export default UserInputField;

//i onsubmit skall själva anropet ske
