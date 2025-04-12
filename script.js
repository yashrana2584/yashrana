function calculateBmi() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    // Convert input to float
    weight = parseFloat(weight);
    height = parseFloat(height);

    // Calculate BMI
    let bmi = (weight / (height * height)) * 703;

    // Display BMI result
    document.getElementById('heading').innerHTML = 'Your BMI is:';
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(2);

    // Display message based on BMI category
    if (bmi < 18.5) {
        document.getElementById('message').innerHTML = 'You are underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'You are a healthy weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('message').innerHTML = 'You are overweight';
    } else {
        document.getElementById('message').innerHTML = 'You are obese';
    }
}

function reload() {
    window.location.reload();
}
