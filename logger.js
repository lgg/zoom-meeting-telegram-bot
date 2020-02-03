let withTime = true;

function getTime() {
    return Date.now()
}

function log(level, msg) {
    let logString = level + ': ' + msg;
    logString = withTime ? getTime() + ' ' + logString : logString;
    console.log(logString)
}

function setWithTime(flag) {
    withTime = !!flag;
}

function debug(msg) {
    log('DEBUG', msg)
}

function info(msg) {
    log('INFO', msg)
}

function error(msg) {
    log('ERROR', msg)
}

function warning(msg) {
    log('WARNING', msg)
}

const logger = {
    debug: debug,
    info: info,
    error: error,
    warn: warning,
    logTime: setWithTime
};

module.exports = logger;
