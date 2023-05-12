function findAndClickClaimButton() {
  const claimButtonSelector = '[aria-label="Bonus einfordern"]';
  const claimButton = document.querySelector(claimButtonSelector);

  if (claimButton) {
    claimButton.click();
  }
}

function startAutoClaimer(interval) {
  setInterval(findAndClickClaimButton, interval);
}

// Starts the auto-claimer that searches for and presses the button every 5 seconds (5000 milliseconds).
startAutoClaimer(5000);
