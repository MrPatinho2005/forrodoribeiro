// Mostra o site e o header depois da animação da logo
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("site").classList.remove("hidden");
    document.getElementById("header").classList.remove("hidden");
  }, 2500); // tempo da animação
});
