// JavaScript file

// Set the date and time of the last drink
// IMPORTANT: Remember you might want to make this configurable later (e.g., using localStorage)
const lastDrinkDate = new Date('2025-04-08T06:00:00');

// Get references to the HTML elements that need updating
const daysCounterElement = document.getElementById('days-counter');
const detailedTimerElement = document.getElementById('detailed-timer');

/**
 * Calculates the time difference and updates the HTML elements.
 */
function updateTimer() {
  const now = new Date();
  const diff = now - lastDrinkDate; // Difference in milliseconds

  // Calculate total units (handle potential negative diff if date is in future)
  const seconds = Math.max(0, Math.floor(diff / 1000));
  const minutes = Math.max(0, Math.floor(seconds / 60));
  const hours = Math.max(0, Math.floor(minutes / 60));
  const days = Math.max(0, Math.floor(hours / 24));

  // Calculate remaining hours, minutes, seconds for the detailed view
  const remHours = Math.max(0, hours % 24);
  const remMinutes = Math.max(0, minutes % 60);
  const remSeconds = Math.max(0, seconds % 60);

  // Update the text content of the HTML elements
  // Check if elements exist before trying to set textContent
  if (daysCounterElement) {
    daysCounterElement.textContent = `Alcohol free for ${days} days`;
  }
  if (detailedTimerElement) {
    detailedTimerElement.textContent = `It has been ${days} days, ${remHours} hours, ${remMinutes} minutes, ${remSeconds} seconds since my last drink.`;
  }
}

// --- Initialization ---

// Run the timer function immediately when the script loads
updateTimer();

// Set the timer to run the update function every 1000ms (1 second)
setInterval(updateTimer, 1000);
