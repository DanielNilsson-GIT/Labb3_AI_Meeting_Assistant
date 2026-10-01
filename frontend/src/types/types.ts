export interface ChatRequest {
    request: string;
}

export interface tool {
    selectedTool: string;
}

export interface MeetingNotes {
    title: string;
    date: string;
    bulletlist: BulletList;
    todo: string[];
    totalsummary: string;
}

export interface MeetingAgenda {
    meetingTitle: string;
    agendaList: string[];
}

export interface MeetingInvite {
    agenda: MeetingAgenda;
    date: string;
    time: string; //ska egentligen va timeOnly?
    meetingroom: string;
    farewellmessage: string;
}

export interface BulletList {
    heading: string;
    summary: string;
}

export interface boterror {
    error: string;
}
