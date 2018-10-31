//innesText
let cascade = document.getElementById("op-selected");
let content = document.getElementById("cascade-content");
let board = document.getElementById("blank-board");
let selecao = document.querySelector(".op-name-in")

content.addEventListener("click", function () {
    if (selecao.innerHTML != "Selecione uma ala") {
        selecao.innerHTML = "Selecione uma ala";
        board.style.display = "none";
        return
    }
    selecao.innerHTML = content.children[0].innerHTML;
    board.style.display = "block";
})

cascade.addEventListener("click", function () {
    content.classList.toggle("casc-all");
})