const button = document.getElementById("themeToggle");

button.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

   
    if (document.body.classList.contains("light")) {
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }
});


document.body.classList.add("dark");
