let cookies = 0;

function clicked() {
    cookies += 1;
    textEl = document.getElementById("cookies");
    textEl.textContent = "Kakor: " + cookies;
}