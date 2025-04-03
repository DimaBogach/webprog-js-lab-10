let timeoutId;

document.getElementById("startTimeout").addEventListener("click", () => {
    timeoutId = setTimeout(() => {
        document.getElementById("timeoutMessage").textContent = "Час вийшов!";
    }, 5000);
});

document.getElementById("cancelTimeout").addEventListener("click", () => {
    clearTimeout(timeoutId);
    document.getElementById("timeoutMessage").textContent = "Таймер скасовано!";
});
