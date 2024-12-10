// script.js
document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user input
    const income = parseFloat(document.getElementById('income').value);

    // Validate input
    if (isNaN(income) || income <= 0) {
        alert("Please enter a valid income.");
        return;
    }

    // Apply 50-30-20 rule
    const needs = (income * 0.50).toFixed(2);
    const wants = (income * 0.30).toFixed(2);
    const savingsDebt = (income * 0.20).toFixed(2);

    // Display results
    document.getElementById('needs').textContent = needs;
    document.getElementById('wants').textContent = wants;
    document.getElementById('savingsDebt').textContent = savingsDebt;
    
    document.getElementById('results').style.display = 'block';
});
