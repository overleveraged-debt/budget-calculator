function calculate() {
    // Get user input values
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const debt = parseFloat(document.getElementById('debt').value);
    const savings = parseFloat(document.getElementById('savings').value);

    // Calculate remaining balance
    const remainingBalance = income - (expenses + debt + savings);

    // Calculate Financial Health Score (Debt-to-Income Ratio)
    const dti = (debt / income) * 100; // Debt-to-Income ratio as a percentage

    // Set financial health score
    let healthScore = "Good";
    if (dti > 40) healthScore = "Poor"; // Simplified for demo purpose

    // Display Results
    document.getElementById('score').innerText = healthScore;
    document.getElementById('remaining').innerText = remainingBalance.toFixed(2);

    // Create a Pie Chart for Budget Allocation
    const ctx = document.getElementById('budgetChart').getContext('2d');
    const budgetChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Expenses', 'Debt Repayment', 'Savings', 'Remaining'],
            datasets: [{
                data: [expenses, debt, savings, remainingBalance],
                backgroundColor: ['#38A169', '#022E8E', '#FFB020', '#E53E3E'],
            }]
        }
    });

    // Generate Suggestions
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (dti > 40) {
        suggestions.innerHTML += '<li>Your Debt-to-Income ratio is high. Consider reducing debt payments or increasing your income.</li>';
    }
    if (remainingBalance < 0) {
        suggestions.innerHTML += '<li>You are overspending. Review your expenses and consider cutting back on non-essential items.</li>';
    } else {
        suggestions.innerHTML += '<li>You have a healthy financial balance. Keep saving and managing your debt.</li>';
    }
}
