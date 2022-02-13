function log(message) {
    let logger = document.getElementById('log');
    let suffix = '<br />';

    if (typeof message == 'object') {
        logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + suffix;
    } else {
        logger.innerHTML += message + suffix;
    }
}