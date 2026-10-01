import "../AiButton/AiButtonStyle.css";
function AiButton({
    buttonName,
    buttonState,
    onClick,
}: {
    buttonName: string;
    buttonState: boolean;
    onClick: () => void;
}) {
    if (buttonState === true) {
        return (
            <>
                <button className="active" onClick={onClick}>
                    {buttonName}
                </button>
            </>
        );
    } else {
        return (
            <>
                <button className="inactive" onClick={onClick}>
                    {buttonName}
                </button>
            </>
        );
    }
}
export default AiButton;

//måste säga vad buttonname är för typ pga typescript
