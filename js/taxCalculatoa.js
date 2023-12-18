function calculateTax() {
    // Perform tax calculation logic based on the entered values
    const income = parseFloat(document.getElementById('income').value);
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;
    const filingStatus = document.getElementById('filingStatus').value;
    const dependents = parseInt(document.getElementById('dependents').value) || 0;
    const taxCredits = parseFloat(document.getElementById('taxCredits').value) || 0;

    // Example tax calculation logic (modify as needed)
    // This is a very basic calculation and may not accurately represent real tax rules.
    const standardDeduction = 12000; // Standard deduction for a single filer
    const dependentDeduction = 2000; // Deduction per dependent
    const taxableIncome = Math.max(0, income - standardDeduction - dependents * dependentDeduction - deductions);
    
    // Example tax rate based on filing status
    let taxRate;
    switch (filingStatus) {
      case 'single':
        taxRate = 0.15;
        break;
      case 'married':
        taxRate = 0.12;
        break;
      case 'head':
        taxRate = 0.18;
        break;
      default:
        taxRate = 0.15;
        break;
    }

    // Calculate tax liability
    const calculatedTax = taxableIncome * taxRate - taxCredits;

    // Display the result
    document.getElementById('taxResult').textContent = `Your calculated tax is: $${calculatedTax.toFixed(2)}`;
  }