
//uso do localstorage
function store(nome, pass) {
    localStorage.setItem("nome", nome);
    localStorage.setItem("pass", pass);
}


//interação com o botão de menu
$("#menu-buttom").click(function () {
    $("#nav-menu").addClass("nav-show");
    $(".overlay").fadeIn(200);
})
$("#app").mouseup(function (e) {
    var menu = $("#nav-menu");
    if ((!menu.is(e.target)) && (menu.has(e.target).length === 0)) {
        $("#nav-menu").removeClass("nav-show");
        $(".overlay").fadeOut(200);
    }
})
