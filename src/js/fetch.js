document.getElementById("fetchData").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => {
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("Помилка:", error);
        });
});
