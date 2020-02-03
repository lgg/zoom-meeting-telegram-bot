module.exports = {
    removeLastChar: removeLastChar,
    each: each,
    addLeadingZeroSingle: addLeadingZeroSingle,
    addLeadingZeroRange: addLeadingZeroRange
};


function removeLastChar(str) {
    return str.substring(0, str.length - 1);
}

function each(arr, func) {

    // check if we have array or object
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            // pass [current el, i]
            func(arr[i], i);
        }

        return;
    }

    if (typeof arr === 'object' && arr !== null && !Array.isArray(arr)) {
        Object.keys(arr).forEach(function (key) {
            func(arr[key], key);
        });
    }
}

function addLeadingZeroSingle(time) {
    return time.length === 1 ? '0' + time : time;
}

function addLeadingZeroRange(time) {
    let t = time.split(':');

    return addLeadingZeroSingle(t[0]) + ':' + addLeadingZeroSingle(t[1]);
}
