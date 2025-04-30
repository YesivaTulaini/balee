document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "balee" && password === "1302") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");
    } else {
        alert("Username atau password salah!");
    }
});

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");
}

function logout() {
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("mainContent").classList.add("hidden");
}