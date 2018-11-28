/* window.onload = function () {
    alert("Para a total utilização do sistema\né necessário a instalação do servidor local:\n \njson-server")
} */
//console.log(banco.alas[0].clinica.pacientes);

var sortByAtribute = function (prop) { //ordenar a lista de pacientes por nome
    return function (x, y) {
        return ((x[prop] === y[prop]) ? 0 : ((x[prop]) > (y[prop]) ? 1 : -1));
    }
}


var listPacientes = banco.alas[0].clinica.pacientes;
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
        let lista_pacientes = document.querySelector("#lista-pacientes");

        let linha_paciente = document.createElement("div");
        let coluna_sus = document.createElement("div");
        let coluna_nome = document.createElement("div");
        //let coluna_ala = document.createElement("div");

        linha_paciente.classList.add("linha-paciente");
        linha_paciente.id = paciente.id;
        coluna_sus.classList.add("lista-p-id", "coluna-sus");
        coluna_nome.classList.add("lista-p-name", "coluna-nome");

        coluna_sus.innerHTML = paciente.nSus;
        coluna_nome.innerHTML = paciente.nome;

        linha_paciente.appendChild(coluna_sus);
        linha_paciente.appendChild(coluna_nome);

        linha_paciente.addEventListener("click", function () {
            localStorage.setItem('paciente', JSON.stringify(paciente));
            window.location = "./00_pages/paciente/paciente.html"
        })

        lista_pacientes.appendChild(linha_paciente);
    }
}

// Filtrar pacientes
let bar_pesquisa = document.querySelector("#bar-pesquisa");
bar_pesquisa.addEventListener("keyup", filter_pacientes);
let filter = document.querySelector("#type-search");

function filter_pacientes() {
    let escrita = document.querySelector("#bar-pesquisa").value.toUpperCase();
    let linhas_pacientes = document.querySelectorAll(".linha-paciente");

    for (let i = 0; i < linhas_pacientes.length; i++) {
        if (filter.value == "nome") {
            let paciente_name = linhas_pacientes[i].querySelector(".coluna-nome");
            if (paciente_name.innerHTML.toUpperCase().indexOf(escrita) > -1) {
                linhas_pacientes[i].style.display = "";
            } else {
                linhas_pacientes[i].style.display = "none";
            }
        } else {
            let paciente_sus = linhas_pacientes[i].querySelector(".coluna-sus");
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
        bar_pesquisa.placeholder = "Pesquisar paciente";
        i = 0;
    } else {
        bar_pesquisa.placeholder = "Pesquisar número do SUS";
        i = 1;
    }
})

load_pacientes();





