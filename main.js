
if (!localStorage.theme) localStorage.theme = "light"


toggleThemeBtn.onclick = () => {
    document.body.classList.toggle("dark")
    toggleThemeBtn.innerText = document.body.classList.contains("dark") ? "Сменить тему на свтлую" : "Сменить тему на тёмную" 
    localStorage.theme = document.body.className || "light" 
}