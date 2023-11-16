//your JS code here. If required.
// Get the counter element and the button
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

    // Initialize counter value
    let counterValue = 0;

    // Function to update counter text and show alert
    function incrementCounter() {
      // Show alert with current counter value before incrementing
      alert(`Current counter value: ${counterValue}`);
      
      // Increment the counter value
      counterValue++;

      // Update the counter text
      counterElement.textContent = counterValue;
    }

    // Add event listener to the button
    incrementButton.addEventListener('click', incrementCounter);