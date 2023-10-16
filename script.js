let cookies = 0;
let CPC = 1; 

function clicked() {
    cookies = Math.round((cookies + CPC) * 10) / 10;
    textEl = document.getElementById("cookies");
    textEl.textContent = "Kakor: " + cookies;
}

function increase_CPC() {
    CPC = Math.round((CPC + 0.1) * 10) / 10;
    textEl = document.getElementById("CPC");
    textEl.textContent = "CPC: " + CPC;
}