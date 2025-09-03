const form = document.getElementById('bmi-form'); 
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');

const bmiResult = document.getElementById('bmi-result');
const bmiCategory = document.getElementById('bmi-category');
const bmiMessage = document.getElementById('bmi-message');

const resetButton = document.getElementById('reset');

// Reset button functionality
resetButton.addEventListener('click', function() {
    weightInput.value = '';
    heightInput.value = '';
    bmiResult.textContent = '';
    bmiCategory.textContent = '';
    bmiMessage.textContent = '';
});

// Form submit functionality
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form reload

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert cm → meters

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        bmiResult.textContent = '';
        bmiCategory.textContent = '';
        bmiMessage.textContent = " Please enter valid weight and height values.";
        return;
    }

    const bmi = weight / (height * height); // Formula

    let category = '';
    let message = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        message = 'You should try to gain some healthy weight.';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        message = 'Great! You are in the healthy BMI range.';
    } else if (bmi < 29.9) {
        category = 'Overweight';
        message = 'Consider a balanced diet and regular exercise.';
    } else {
        category = 'Obesity';
        message = 'It’s recommended to consult a healthcare professional.';
    }

    // Update spans
    bmiResult.textContent = bmi.toFixed(2);
    bmiCategory.textContent = category;
    bmiMessage.textContent = message;
});
