
function store(nome, pass) { //uso do localstorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("pass", pass);
}

$("#menu-buttom").click(function () { //botão de menu
    $("#nav-menu").addClass("nav-show");
    $("#overlay-menu").fadeIn(200);
})

$("#app").mouseup(function (e) { // fecha menu com clique fora dele
    var menu = $("#nav-menu");
    if ((!menu.is(e.target)) && (menu.has(e.target).length === 0)) {
        $("#nav-menu").removeClass("nav-show");
        $("#overlay-menu").fadeOut(200);
    }
})





