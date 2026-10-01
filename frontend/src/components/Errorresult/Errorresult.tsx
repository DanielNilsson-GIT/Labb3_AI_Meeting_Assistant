import { type boterror } from "../../types/types";

function Errorresult({ aiResult }: { aiResult: boterror }) {
    return (
        <>
            <p>{aiResult.error}</p>
        </>
    );
}
export default Errorresult;
