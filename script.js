// this function converts values to Inches of Mercury (InHg)
function convertToInHg(hPa) {
    if (isNaN(hPa)) throw new Error("Input must be a number");
    return (parseFloat(hPa) / 33.8639).toFixed(2);
}

// this function converts values to Hectopascals (hPa)
function convertToHpa(inHg) {
    if (isNaN(inHg)) throw new Error("Input must be a number");
    return (parseFloat(inHg) * 33.8639).toFixed(2);
}

function convertQNH(qnhType, qnhValueRaw) {
    if (qnhType === 'A') {
        // convert inHg value to the correct decimal format
        qnhValue = (parseFloat(qnhValueRaw) / 100).toFixed(2) // fixes the value to 2 d.p as required
        return qnhValue;
    }
    else if (qnhType === 'Q') {
        qnhValue = parseInt(qnhValueRaw, 10)
        return qnhValue;
    }    
    else {
        throw new Error('No QNH found in the METAR!')
}}      

function getUnit(qnhType) {
    if (qnhType === 'A') {
        return 'inhg'
    } else if (qnhType === 'Q') {
        return 'hpa'
    } else {
        throw new Error('Invalid QNH type in METAR!')
}}

// exports for the testing functions
if (typeof module !== "undefined") {
    module.exports = { convertToInHg, convertToHpa, convertQNH, getUnit };
}
