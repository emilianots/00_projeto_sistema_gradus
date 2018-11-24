var URL = "http://localhost:3000/pacientes";
var pacientes = null;

function getPacientes() {
    $.ajax({
        type: "GET",
        url: URL,
        async: false,
        success: function (data) {
            pacientes = data
            pacientes.sort(sortByAtribute('nome'));
        }
    })
}
function createList(lista) {
    for (let elem of lista) {
        let li = document.createElement("li");
        li.classList.add("list-group-item","list-group-item-action");
        li.innerHTML = elem.nome;
        $("#list-pacientes").append(li);
    }
}
var sortByAtribute = function (prop) {
    return function (x, y) {
        return ((x[prop] === y[prop]) ? 0 : ((x[prop]) > (y[prop]) ? 1 : -1));
    }
}

getPacientes();

//console.table(pacientes);

$("#main-op-paciente-internado").click(function () {
    //console.table(pacientes);
    $("#sis-body-panel").hide();
    $("#step-back").show();
    createList(pacientes);
    $("#list-pacientes").show();
})

$("#step-back").click(function () {
    $("#sis-body-panel").show();
    $("#step-back").hide();
    $("#list-pacientes").hide();
})
