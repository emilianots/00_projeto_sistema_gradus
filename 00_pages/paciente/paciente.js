
var paciente = JSON.parse(localStorage.getItem('paciente'));
console.log(paciente);
window.onload = function () {
    if (paciente == null) {
        alert("Erro fatal no banco de dados!")
        return;
    }
    $("#upper-nome-paciente").append(paciente.nome);
    $("#nome-paciente").append(paciente.nome);
    $("#sexo").append(paciente.sexo);
    $("#data-nasc").append(paciente.dataNasc);
    $("#rg").append(paciente.rg);
    $("#n-sus").append(paciente.nSus)
    $("#naturalidade").append(paciente.naturalidade);
    $("#profissao").append(paciente.profissao);
    $("#std-civil").append(paciente.estadoCivil);
    $("#nome-conjuge").append(paciente.nomeConjugue);
    $("#nome-mae").append(paciente.nomeMae);
    $("#nome-pai").append(paciente.nomePai);
    $("#numero-registro").append(paciente.nRegistro);
    $("#doc-autorizacao").append(paciente.docAutorizacao);
    $("#leito").append(paciente.leito);
    $("#tipo-convenio").append(paciente.tipoConvenio);
    $("#n-prontuario").append(paciente.nProntuario);
    $("#mot-internamento").append(paciente.motInternamento);

}
function gerarPDF() {
    $("#app").css({
        width: '100vw',
        border: '1px, solid gray'
    })
    $("#step-back").css('display', 'none');
    $("#rodape").css("display", "none");
    
    window.print();
    $("#app").css({
        width: '550px',
        border: '0px, solid transparent'
    })

    $("#step-back").css("display", "block");
    $("#rodape").css("display", "block");
    
}

function printPDFGeral() {
    $("#dados-paciente").show();
    $("#app").css({ width: "100vw", border: "1px, solid gray" });
    $("#sis-top-bar").hide();
    $("#pac-panel").hide();
    $("#rodape").hide();

    window.print();
    $("#dados-paciente").hide();
    $("#app").css({ width: "550px", border: "1px, solid transparent" });
    $("#sis-top-bar").show();
    $("#pac-panel").show();
    $("#rodape").show();

}