let counter = 0;
let intervalId;

document.getElementById("startInterval").addEventListener("click", () => {
    intervalId = setInterval(() => {
        document.getElementById("counter").textContent = ++counter;
    }, 1000);
});

document.getElementById("stopInterval").addEventListener("click", () => {
    clearInterval(intervalId);
});
