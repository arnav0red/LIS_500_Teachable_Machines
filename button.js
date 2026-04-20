document.addEventListener("DOMContentLoaded", () =>
{
    const btn = document.getElementById("startBtn");
    const app = document.getElementById("app");

    btn.addEventListener("click", () =>
    {
        btn.style.display = "none";
        app.style.display = "block";

        startModel();  // THIS starts camera + model
    });
});