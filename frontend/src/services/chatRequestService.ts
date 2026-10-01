async function chattest(request: string) {
    let postpayload = await fetch("https://localhost:7191/api/chat/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, //headers är metadata som skickas till backendcontroller och säger här att datan är i jsonformat
        body: JSON.stringify({ chatRequest: request }),
    }); //adress från launcsettings.json. OBS måste säga att det är en postmethod för fetch har get som standard
    const data = await postpayload.json();

    return data;
}
export default chattest;
