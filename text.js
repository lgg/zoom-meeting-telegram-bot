const utils = require('./utils');

let scenesText = {},
    scenes = [
        ['set_zoom_key', 'You need to auth with Zoom (@TODO: add guide here) Send me your Zoom API Key', 'Zoom key saved: '],
        ['set_zoom_secret', 'You need to auth with Zoom (@TODO: add guide here) Send me your Zoom Secret Key', 'Zoom secret saved: '],
        ['set_zoom_email', 'You need to auth with Zoom (@TODO: add guide here) Send me your Zoom email', 'Email saved: ']
    ];

utils.each(scenes, (el) => {
    addSceneText(scenesText, el[0], el[1], el[2])
});

let zoomText = {
    auth: {
        errors: {
            noEmail: 'You need to set email from your Zoom account. Use /set_zoom_email command',
            noSecret: 'You need to set Zoom API Secret. Use /set_zoom_secret command',
            noKey: 'You need to set Zoom API Key. Use /set_zoom_key command'
        }
    }
};

module.exports = {
    scenes: scenesText,
    zoom: zoomText
};

function addSceneText(scenes, name, enter, leave) {
    scenes[name] = {
        enter: enter,
        leave: leave
    };
}