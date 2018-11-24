var URL = "http://localhost:3000/pacientes";
var pacientes = null;
var namesPaciente = [];
var idPaciente = 0;

function getPacientes() { // retorna os pacientes do servidor
    $.ajax({
        type: "GET",
        url: URL,
        async: false,
        success: function (data) {
            pacientes = data
            pacientes.sort(sortByAtribute('nome'));
            namesPaciente = onlyNames(pacientes);
            idPaciente = getMax(pacientes, 'id');
        }
    })
}

function createList(lista) { // popula a variável pacientes
    for (let elem of lista) {
        let li = document.createElement("li");
        li.classList.add("list-group-item","list-group-item-action");
        li.innerHTML = elem.nome;
        $("#list-pacientes").append(li);
    }
}

var sortByAtribute = function (prop) { //ordenar a lista de pacientes por nome
    return function (x, y) {
        return ((x[prop] === y[prop]) ? 0 : ((x[prop]) > (y[prop]) ? 1 : -1));
    }
}

function getMax(arr, prop) { //encontrar o maior id da lista de pacientes
    var max;
    for (var i = 0; i < arr.length; i++) {
        if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i];
    }
    return max.id;
}

function onlyNames(lista) { //pegar somente os nomes
    let names = [];
    for (let elem of lista) {
        names.push(elem.nome);
    }
    return names;
}

getPacientes();

$("#main-op-paciente-internado").click(function () { //botão de listar os pacientes internados - triegem internados
    $("#sis-body-panel").hide();
    $("#step-back").show();
    $("#list-pacientes").empty();
    createList(pacientes);
    $("#list-pacientes").show();
})

$("#step-back").click(function () {
    $("#sis-body-panel").show();
    $("#step-back").hide();
    $("#list-pacientes").hide();
})
