document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour afficher l'horloge mondiale
    function updateWorldClock() {
        const worldClockElement = document.getElementById("world-clock");
        const now = new Date();
        const utcString = now.toUTCString();
        worldClockElement.textContent = `World Clock: ${utcString.slice(17, 22)}`;
    }

    // Fonction pour gérer le compteur de visites
    function updateVisitCounter() {
        const visitCounterElement = document.getElementById("visit-counter");
        let visitCount = localStorage.getItem("visitCount") || 0;
        visitCount++;
        localStorage.setItem("visitCount", visitCount);
        visitCounterElement.textContent = `Visits: ${visitCount}`;
    }

    // Mise à jour de l'horloge mondiale toutes les secondes
    setInterval(updateWorldClock, 1000);

    // Mise à jour du compteur de visites au chargement de la page
    updateVisitCounter();
});
