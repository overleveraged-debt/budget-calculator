document.getElementById("calculate").addEventListener("click", function() {
    let income = parseFloat(document.getElementById("income").value);
    let expenses = parseFloat(document.getElementById("expenses").value);
    let savings = parseFloat(document.getElementById("savings").value);
    let debt = parseFloat(document.getElementById("debt").value);

    if (!income || !expenses || !savings || !debt) {
        alert("Please fill in all fields.");
        return;
    }

    // Basic calculations
    let remaining = income - expenses - savings - debt;

    // Financial Health Score (based on income to expense ratio)
    let healthScore = Math.round(((income - expenses) / income) * 100);

    // Breakdown
    let breakdown = `
        <p><strong>Income:</strong> ₹${income}</p>
        <p><strong>Expenses:</strong> ₹${expenses}</p>
        <p><strong>Savings Goal:</strong> ₹${savings}</p>
        <p><strong>Debt Repayment:</strong> ₹${debt}</p>
        <p><strong>Remaining Balance:</strong> ₹${remaining}</p>
    `;

    let financialHealth = `
        <p><strong>Financial Health Score:</strong> ${healthScore}%</p>
    `;

    // Update results in the UI
    document.getElementById("budgetBreakdown").innerHTML = breakdown;
    document.getElementById("financialHealth").innerHTML = financialHealth;

    // Add more advanced features such as debt prioritization, savings goal tracking, etc.
});
