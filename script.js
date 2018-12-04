/* window.onload = function () {
    alert("Para a total utilização do sistema\né necessário a instalação do servidor local:\n \njson-server")
} */
//console.log(banco.alas[0].clinica.pacientes)

var sortByAtribute = function (prop) { //ordenar a lista de pacientes por nome
    return function (x, y) {
        return ((x[prop] === y[prop]) ? 0 : ((x[prop]) > (y[prop]) ? 1 : -1));
    }
}


var listPacientes = banco.alas[0].clinica.pacientes;
console.log(listPacientes)
listPacientes.sort(sortByAtribute('nome'));
for ( let elem of listPacientes) {
    elem.nome = elem.nome.toUpperCase();
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


//Carregar Pacientes
function load_pacientes() {
    for (let paciente of listPacientes) {
        //let lista_pacientes = document.querySelector("#lista-pacientes");
        let item = document.createElement('li');
        let linha = document.createElement("div");
        let nsus = document.createElement("div");
        let nome = document.createElement("div");
        
        item.classList.add('list-group-item');
        item.id = "linha-paciente";
        linha.classList.add('row');
        nsus.classList.add('col', 'col-5', 'nsus-paciente');
        nome.classList.add('col', 'nome-l-paciente');

        nsus.innerHTML = paciente.nSus.toUpperCase();
        nome.innerHTML = paciente.nome.toUpperCase();

        linha.append(nsus);
        linha.append(nome);
        item.append(linha);

        item.addEventListener("click", function () {
            localStorage.setItem('paciente', JSON.stringify(paciente));
            window.location = "./00_pages/paciente/paciente.html"
        })

        $("#lista-pacientes").append(item);
    }
}

// Filtrar pacientes
let bar_pesquisa = document.querySelector("#bar-pesquisa");
bar_pesquisa.addEventListener("keyup", filter_pacientes);
let filter = document.querySelector("#type-search");

function filter_pacientes() {
    let escrita = document.querySelector("#bar-pesquisa").value.toUpperCase();
    let linhas_pacientes = document.querySelectorAll("#linha-paciente");
    let nomesPacientes = $(".nome-l-paciente");
    let nsusPacientes = $(".nsus-paciente");

    for (let i = 0; i < linhas_pacientes.length; i++) {
        if (filter.value == "nome") {
            let paciente_name = nomesPacientes[i];
            if (paciente_name.innerHTML.toUpperCase().indexOf(escrita) > -1) {
                linhas_pacientes[i].style.display = "";
            } else {
                linhas_pacientes[i].style.display = "none";
            }
        } else {
            let paciente_sus = nsusPacientes[i];
            if (paciente_sus.innerHTML.toUpperCase().indexOf(escrita) > -1) {
                linhas_pacientes[i].style.display = "";
            } else {
                linhas_pacientes[i].style.display = "none";
            }
        }

    }
}

// Trocar Type-Search
let i = 0;
filter.addEventListener("change", function () {
    if (i == 1) {
        bar_pesquisa.placeholder = "Pesquisar por nome";
        i = 0;
    } else {
        bar_pesquisa.placeholder = "Pesquisar por número do SUS";
        i = 1;
    }
})

load_pacientes();





