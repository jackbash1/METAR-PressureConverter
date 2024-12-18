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

// exports for the testing functions
if (typeof module !== "undefined") {
    module.exports = { convertToInHg, convertToHpa };
}
