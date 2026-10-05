
const tombolMode = document.getElementById("tombolMode");
const ikonMode = document.getElementById("ikonMode");

tombolMode.addEventListener("click", function () {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
        ikonMode.textContent = "☀";
        tombolMode.setAttribute("aria-label", "Aktifkan mode terang");
        tombolMode.setAttribute("title", "Aktifkan mode terang");
    } else {
        ikonMode.textContent = "☾";
        tombolMode.setAttribute("aria-label", "Aktifkan mode gelap");
        tombolMode.setAttribute("title", "Aktifkan mode gelap");
    }
});