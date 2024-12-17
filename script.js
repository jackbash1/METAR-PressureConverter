// Conversion functions (pure logic, testable)
function convertToInHg(hPa) {
    if (isNaN(hPa)) throw new Error("Input must be a number");
    return (parseFloat(hPa) / 33.8639).toFixed(2);
}

function convertToHpa(inHg) {
    if (isNaN(inHg)) throw new Error("Input must be a number");
    return (parseFloat(inHg) * 33.8639).toFixed(2);
}

// Function to handle DOM events
function handleConversion() {
    const input = document.getElementById("pressure-input").value.trim();
    const unitSelection = document.getElementById("unit-selection").value;
    const outputElement = document.getElementById("conversion-output");

    if (!input || isNaN(input)) {
        outputElement.value = "Please enter a valid number.";
        return;
    }

    const value = parseFloat(input);

    if (unitSelection === "hpa") {
        const result = convertToInHg(value);
        outputElement.value = `${value} hPa = ${result} inHg`;
    } else if (unitSelection === "inhg") {
        const result = convertToHpa(value);
        outputElement.value = `${value} inHg = ${result} hPa`;
    } else {
        outputElement.value = "Please select a valid unit.";
    }
}

// Event listener for the button
document.getElementById("convert-btn").addEventListener("click", handleConversion);

// Export functions for testing
if (typeof module !== "undefined") {
    module.exports = { convertToInHg, convertToHpa };
}
