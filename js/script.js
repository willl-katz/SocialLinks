var closepop = document.querySelector(".close");

closepop.addEventListener("click", () => {
    var pop = document.querySelector(".container-pop");
    pop.classList.toggle("closed");
});