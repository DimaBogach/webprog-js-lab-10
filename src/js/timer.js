import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let selectedDate;
const startButton = document.getElementById("startTimer");
const timerDisplay = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
};

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0];
        if (selectedDate <= new Date()) {
            iziToast.error({ title: "Помилка", message: "Виберіть майбутню дату!" });
            startButton.disabled = true;
        } else {
            startButton.disabled = false;
        }
    }
});

startButton.addEventListener("click", () => {
    const interval = setInterval(() => {
        const deltaTime = selectedDate - new Date();
        if (deltaTime <= 0) {
            clearInterval(interval);
            iziToast.success({ title: "Готово", message: "Час вийшов!" });
            return;
        }
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        Object.assign(timerDisplay, { days, hours, minutes, seconds });
    }, 1000);
});

function convertMs(ms) {
    return {
        days: Math.floor(ms / 86400000),
        hours: Math.floor((ms % 86400000) / 3600000),
        minutes: Math.floor((ms % 3600000) / 60000),
        seconds: Math.floor((ms % 60000) / 1000),
    };
}
