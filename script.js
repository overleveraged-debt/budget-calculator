function calculateBudget() {
    // Getting input values
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const debt = parseFloat(document.getElementById('debt').value);
    const savingsGoal = parseFloat(document.getElementById('savings').value);

    // Calculating financial health score (Debt-to-Income ratio, Savings-to-Income ratio, Emergency Fund)
    const dti = (debt / income) * 100;
    const savingsRatio = (savingsGoal / income) * 100;
    const emergencyFund = expenses * 3; // Recommended emergency fund of 3 months of expenses

    // Financial Health Score Logic (Basic example)
    let healthScore = "Good";
    if (dti > 40) healthScore = "Critical";
    else if (dti > 30) healthScore = "Fair";

    // Remaining Balance
    const remainingBalance = income - (expenses + debt + savingsGoal);

    // Setting results
    document.getElementById('score').innerText = healthScore;
    document.getElementById('remaining').innerText = remainingBalance.toFixed(2);

    // Graphical representation (Pie Chart for Budget Allocation)
    const ctx = document.getElementById('budgetChart').getContext('2d');
    const budgetChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Expenses', 'Debt Repayment', 'Savings', 'Remaining'],
            datasets: [{
                data: [expenses, debt, savingsGoal, remainingBalance],
                backgroundColor: ['#38A169', '#022E8E', '#FFB020', '#E53E3E'],
            }]
        }
    });

    // Suggestions Section based on Debt-to-Income Ratio and Remaining Balance
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (dti > 40) {
        suggestions.innerHTML += '<li>Your Debt-to-Income ratio is high! Consider reducing debt or increasing income.</li>';
    }
    if (remainingBalance < 0) {
        suggestions.innerHTML += '<li>You are overspending! Review your expenses and consider cutting back.</li>';
    } else if (remainingBalance > 0 && savingsGoal > 0) {
        suggestions.innerHTML += '<li>You have a positive balance. Great job! Keep saving for your goals!</li>';
    }

    // Provide additional guidance on debt repayment strategy
    if (debt > 0) {
        suggestions.innerHTML += '<li>Consider using the Debt Snowball method for faster pay-off or try consolidating your debt.</li>';
    }
}
