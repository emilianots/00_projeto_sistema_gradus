
var paciente = JSON.parse(localStorage.getItem('paciente'));
window.onload = function () {
    if (paciente == null) {
        return;
    }
    $("#nome-paciente").append(paciente.nome);
    $("#sexo").append(paciente.sexo);
    $("#data-nasc").append(paciente.dataNasc);
    $("#rg").append(paciente.rg);
    $("#naturalidade").append(paciente.naturalidade);
    $("#nome-mae").append(paciente.nomeMae);
    $("#nome-pai").append(paciente.nomePai);
    $("#std-civil").append(paciente.estadoCivil);
    $("#nome-conjuge").append(paciente.nomeConjugue);
    $("#profissao").append(paciente.profissão);

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