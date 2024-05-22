
// HTML + CSS

document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

// HTML + CSS + JS

function readMore() {
    var dots = document.getElementById("dots");
    var btn = document.getElementById("btn");
    var more = document.getElementById("more");

    if(dots.style.display === "none") {
        dots.style.display="inline";
        more.style.display="none";
        btn.innerHTML="Подробнее";
    } else {
        dots.style.display="none";
        more.style.display="inline";
        btn.innerHTML="Скрыть";
    }
}