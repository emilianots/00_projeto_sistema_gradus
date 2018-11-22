$("#menu-buttom").click(function () {
    $("#nav-menu").addClass("nav-show");
})
$("#app").mouseup(function (e) {
    var menu = $("#nav-menu");
    if ((!menu.is(e.target)) && (menu.has(e.target).length === 0)) {
        $("#nav-menu").removeClass("nav-show");
    }
})