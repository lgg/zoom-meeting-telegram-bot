require('dotenv').config();
const request = require('request');
const zoomScheme = require('./zoom-meeting-scheme');
const logger = require('./logger');
logger.logTime(false);

let authToken = process.env.AUTH_TOKEN;
authToken = process.env.JWT;

let userId = process.env.USER_ID;
let url = 'https://api.zoom.us/v2/users/me/meetings';

let data = zoomScheme.getDefault('Test Call');


request.post({
    url: url,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
    },
    body: JSON.stringify(data),
}, function (error, response, body) {

    //console.log(body);

    if (error) {
        logger.error(error)
    } else {
        let data = JSON.parse(body);
        if (data["join_url"]) {
            let joinUrl = data["join_url"];
            logger.info('Join URL: ' + joinUrl)
        } else {
            logger.error('Join URL not found')
        }
    }
});
