function calculatePrice() {
    // Get the selected dog size price per day
    const dogSize = document.getElementById('dog-size').value;

    // Get the number of days
    const numDays = document.getElementById('num-days').value;

    // Validate input
    if (numDays <= 0) {
        alert('Please enter a valid number of days.');
        return;
    }

    // Calculate the price
    const price = dogSize * numDays;

    // Calculate the tax (0.47% in Utah)
    const taxRate = 0.047;
    const tax = price * taxRate;

    // Calculate the total
    const total = price + tax;

    // Display the results
    document.getElementById('price').textContent = `Price: $${price.toFixed(2)}`;
    document.getElementById('tax').textContent = `Tax: $${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}
