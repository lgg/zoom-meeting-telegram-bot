function createDefaultInstantMeetingData(title) {
    return {
        "topic": title,
        "type": 1, // instant meeting
        //"password": "pass",
        "agenda": "Description",
        "settings": {
            "host_video": false,
            "participant_video": false,
            "mute_upon_entry": true,
            "audio": "voip",
            "enforce_login": true, // only signed in users can join this meeting
        }
    }
}

const meetingScheme = {
    getDefault: createDefaultInstantMeetingData,
};

module.exports = meetingScheme;