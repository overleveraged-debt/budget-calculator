document.getElementById('budgetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    
    // Calculate 50-30-20 Budget Rule
    const savings = (income * 0.20).toFixed(2);
    const debtRepayment = (income * 0.30).toFixed(2);
    const remainingExpenses = (income - (parseFloat(savings) + parseFloat(debtRepayment))).toFixed(2);
    
    // Display results
    document.getElementById('savings').value = savings;
    document.getElementById('debtRepayment').value = debtRepayment;
    
    document.getElementById('savingsResult').textContent = savings;
    document.getElementById('debtRepaymentResult').textContent = debtRepayment;
    document.getElementById('remainingExpenses').textContent = remainingExpenses;
    
    document.getElementById('result').style.display = 'block';
});
