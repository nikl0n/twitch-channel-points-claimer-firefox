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

// Startet den Auto-Claimer, der alle 5 Sekunden (5000 Millisekunden) nach dem Button sucht und ihn drückt.
startAutoClaimer(5000);
