document.getElementById('convert-btn').addEventListener('click', function () {
    const input = document.getElementById('pressure-input').value.trim();
    const unitSelection = document.getElementById('unit-selection').value;
    const outputElement = document.getElementById('conversion-output');

    if (!input || isNaN(input)) {
        outputElement.value = "Please enter a valid number.";
        return;
    }

    const value = parseFloat(input);

    if (unitSelection === 'hpa') {
        const inHg = value / 33.8639;
        outputElement.value = `${value} hPa = ${inHg.toFixed(2)} inHg`;
    } else if (unitSelection === 'inhg') {
        const hPa = value * 33.8639;
        outputElement.value = `${value} inHg = ${hPa.toFixed(2)} hPa`;
    } else {
        outputElement.value = "Please select a valid unit.";
    }
});
