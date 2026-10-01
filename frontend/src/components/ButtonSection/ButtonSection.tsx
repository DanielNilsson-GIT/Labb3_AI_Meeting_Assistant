import AiButton from "../AiButton/AiButton";
import { useDispatch, useSelector } from "react-redux";
import { changeTool } from "../../reducers/toolSlice";
import { type RootState } from "../../store/store";
import "./ButtonSectionStyle.css";

function ButtonSection() {
    const dispatch = useDispatch();
    const activeTool = useSelector(
        (state: RootState) => state.tool.selectedTool,
    );

    return (
        <div className="button-section">
            <AiButton
                buttonName="Summarzie"
                buttonState={activeTool === "Summary"} //kollar ifall activeTool är true
                onClick={() =>
                    dispatch(changeTool({ selectedTool: "Summary" }))
                }
            />
            <AiButton
                buttonName="Agenda"
                buttonState={activeTool === "Agenda"}
                onClick={() => dispatch(changeTool({ selectedTool: "Agenda" }))}
            />
            <AiButton
                buttonName="Invitation"
                buttonState={activeTool === "Invitation"}
                onClick={() =>
                    dispatch(changeTool({ selectedTool: "Invitation" }))
                }
            />
        </div>
    );
}
export default ButtonSection;
