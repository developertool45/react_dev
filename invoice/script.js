function generateInvoice() {
  // Get form input values
  const clientName = document.getElementById('clientName').value;
  const itemName = document.getElementById('itemName').value;
  const quantity = parseInt(document.getElementById('quantity').value, 10);
  const price = parseFloat(document.getElementById('price').value);

  // Validate input
  if (isNaN(quantity) || isNaN(price)) {
    alert('Please enter valid quantity and price values.');
    return;
  }

  // Calculate total
  const total = quantity * price;

  // Generate invoice content
  const invoiceContent = `
    Client Name: ${clientName}
    Item: ${itemName}
    Quantity: ${quantity}
    Price per Unit: ${price.toFixed(2)}
    Total: ${total.toFixed(2)}
  `;

  // Display generated invoice
  document.getElementById('invoiceContent').textContent = invoiceContent;
  document.getElementById('invoiceResult').classList.remove('hidden');
}
