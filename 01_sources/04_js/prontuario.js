// TROCAR CONTEÚDO DA EVOLUÇÃO
$("#btn-prescricao").click(function(){
    if($("#prescricao").css("display") == "none"){
        $("#prescricao").show();
        $("#btn-prescricao").toggleClass("btn-primary");
    }

    if($("#btn-evolucao").hasClass("btn-primary")){
        $("#btn-evolucao").removeClass("btn-primary");
        $("#evolucao").hide();
    }
    
    if($("#btn-historico").hasClass("btn-primary")){
        $("#btn-historico").removeClass("btn-primary");
        $("#historico").hide();
    }
})

$("#btn-evolucao").click(function(){
    if($("#evolucao").css("display") == "none"){
        $("#evolucao").show();
        $("#btn-evolucao").toggleClass("btn-primary");
    }
    
    if($("#btn-prescricao").hasClass("btn-primary")){
        $("#btn-prescricao").removeClass("btn-primary");
        $("#prescricao").hide();
    }
    
    if($("#btn-historico").hasClass("btn-primary")){
        $("#btn-historico").removeClass("btn-primary");
        $("#historico").hide();
    }
})

$("#btn-historico").click(function(){
    if($("#historico").css("display") == "none"){
        $("#historico").show();
        $("#btn-historico").toggleClass("btn-primary");
    }

    if($("#btn-prescricao").hasClass("btn-primary")){
        $("#btn-prescricao").removeClass("btn-primary");
        $("#prescricao").hide();
    }
    
    if($("#btn-evolucao").hasClass("btn-primary")){
        $("#btn-evolucao").removeClass("btn-primary");
        $("#evolucao").hide();
    }
})

// FUNÇÕES AUXILIARES

function create_div_select(boolean){
    let select = document.createElement("div");
    select.classList.add("select");
    let label = document.createElement("label");
    label.classList.add("check-select-content");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    if(boolean == true){
        input.checked = true;
    }
    let checkmark = document.createElement("div");
    checkmark.classList.add("checkmark");
    //
    label.appendChild(input);
    label.appendChild(checkmark);
    select.appendChild(label);
    return select;
}

function create_add_desc_evolucao(){
    let add_desc_evolucao = document.createElement("div");
    add_desc_evolucao.classList.add("add-desc-evolucao");
    let add_desc = document.createElement("div");
    add_desc.classList.add("add-desc");
    //
    add_desc_evolucao.appendChild(add_desc);
    return add_desc_evolucao;
}

function create_desc_procedimento(text){
    let desc_procedimento = document.createElement("div");
    desc_procedimento.classList.add("desc-procedimento");
    let input_desc = document.createElement("div");
    input_desc.classList.add("input-desc");
    let textarea = document.createElement("textarea");
    textarea.classList.add("form-control");
    textarea.setAttribute("placeholder", "INFORMAÇÕES ADICIONAIS");
    textarea.setAttribute("id", "text-input");
    textarea.setAttribute("rows", 3);
    textarea.value = text;
    //
    input_desc.appendChild(textarea);
    desc_procedimento.appendChild(input_desc);
    return desc_procedimento;
}


// CARREGAR PRESCRIÇÃO DO PACIENTE
let exames_solicitados = document.querySelector(".exames-solicitados");
let procedimentos_adicionais_prescricao = document.querySelector(".procedimentos-adicionais-prescricao area-evolucao");
let medicacao = document.querySelector(".medicacao");
let dieta = document.querySelector(".dieta-content");
let cuidados = document.querySelector(".cuidados");

//let paciente_db = banco.alas[0].clinica.pacientes;
let paciente_db = paciente;

function loadPrescricao(paciente){
    // Exames
    let exames_solicitados = document.querySelector(".exames-solicitados");
    console.log(paciente);
    for(let data_exame of paciente.prontuario.prescricao.exames_solicitados){
        let linha_evolucao_content = document.createElement("div");
        linha_evolucao_content.classList.add("linha-evolucao-content");

        let linha_evolucao = document.createElement("div");
        linha_evolucao.classList.add("exame","linha-evolucao");
        let title = document.createElement("div");
        title.classList.add("title");
        title.innerHTML = data_exame.exame;
        let local = document.createElement("div");
        local.classList.add("local");
        local.innerHTML = data_exame.local;

        linha_evolucao.appendChild(title);
        linha_evolucao.appendChild(local);
        linha_evolucao.appendChild(create_div_select(data_exame.feito));
        linha_evolucao.appendChild(create_add_desc_evolucao());

        linha_evolucao_content.appendChild(linha_evolucao);
        linha_evolucao_content.appendChild(create_desc_procedimento(data_exame.inf_adicionais));

        exames_solicitados.appendChild(linha_evolucao_content);
    }

    // Rotina de Medicação
    let medicacao_content = document.querySelector(".medicacao-content");
    for(let data_medicacao of paciente.prontuario.prescricao.rotina_medicacao){
        let linha_evolucao_content = document.createElement("div");
        linha_evolucao_content.classList.add("linha-evolucao-content");

        let linha_evolucao = document.createElement("div");
        linha_evolucao.classList.add("medicacao", "linha-evolucao");
        let title = document.createElement("div");
        title.classList.add("title");
        title.innerHTML = data_medicacao.medicacao;
        let frequencia =document.createElement("div");
        frequencia.classList.add("frequencia");
        frequencia.innerHTML = data_medicacao.dosagem;

        linha_evolucao.appendChild(title);
        linha_evolucao.appendChild(frequencia);
        linha_evolucao.appendChild(create_div_select(data_medicacao.feito));
        linha_evolucao.appendChild(create_add_desc_evolucao());

        linha_evolucao_content.appendChild(linha_evolucao);
        linha_evolucao_content.appendChild(create_desc_procedimento(data_medicacao.inf_adicionais));

        medicacao_content.appendChild(linha_evolucao_content);        
    }

    // Dieta
    let dieta_content = document.querySelector(".dieta-content");
    for(let data_dieta of paciente.prontuario.prescricao.dieta){
        let linha_evolucao_content = document.createElement("div");
        linha_evolucao_content.classList.add("linha-evolucao-content");
        
        let linha_evolucao = document.createElement("div");
        linha_evolucao.classList.add("dieta", "linha-evolucao");
        let title = document.createElement("div");
        title.classList.add("title");
        title.innerHTML = data_dieta.alimento;
        let quantidade = document.createElement("div");
        quantidade.classList.add("quantidade");
        quantidade.innerHTML = data_dieta.quantidade;

        linha_evolucao.appendChild(title);
        linha_evolucao.appendChild(quantidade);
        linha_evolucao.appendChild(create_div_select(data_dieta.feito));
        linha_evolucao.appendChild(create_add_desc_evolucao());

        linha_evolucao_content.appendChild(linha_evolucao);
        linha_evolucao_content.appendChild(create_desc_procedimento(data_dieta.inf_adicionais));

        dieta_content.appendChild(linha_evolucao_content);
    }

    // Cuidados
    let cuidados_content = document.querySelector(".cuidados");
    for(let data_cuidado of paciente.prontuario.prescricao.cuidados){
        let linha_evolucao_content = document.createElement("div");
        linha_evolucao_content.classList.add("linha-evolucao-content");
        
        let linha_evolucao = document.createElement("div");
        linha_evolucao.classList.add("cuidado", "linha-evolucao");
        let title = document.createElement("div");
        title.classList.add("title");
        title.innerHTML = data_cuidado.cuidado;

        linha_evolucao.appendChild(title);
        linha_evolucao.appendChild(create_div_select(data_cuidado.feito));
        linha_evolucao.appendChild(create_add_desc_evolucao());

        linha_evolucao_content.appendChild(linha_evolucao);
        linha_evolucao_content.appendChild(create_desc_procedimento(data_cuidado.inf_adicionais));

        cuidados_content.appendChild(linha_evolucao_content);
    }

    // Procedimentos Adicionais
    let procedimentos_adicionais_content = document.querySelector(".procedimentos-adicionais-prescricao");
    for(let data_procedimentos_adicionais of paciente.prontuario.prescricao.procedimentos_adicionais){
        let linha_evolucao_content = document.createElement("div");
        linha_evolucao_content.classList.add("linha-evolucao-content");
        
        let linha_evolucao = document.createElement("div");
        linha_evolucao.classList.add("procedimento", "linha-evolucao");
        let title = document.createElement("div");
        title.classList.add("title");
        title.innerHTML = data_procedimentos_adicionais.procedimento;

        linha_evolucao.appendChild(title);
        linha_evolucao.appendChild(create_div_select(data_procedimentos_adicionais.feito));
        linha_evolucao.appendChild(create_add_desc_evolucao());

        linha_evolucao_content.appendChild(linha_evolucao);
        linha_evolucao_content.appendChild(create_desc_procedimento(data_procedimentos_adicionais.inf_adicionais));

        procedimentos_adicionais_content.appendChild(linha_evolucao_content);
    }
}

// FUNÇÕES AUXILIARES
function create_botoes(input, div_remove){
    let botoes = document.createElement("div");
    botoes.classList.add("botoes");

    let edit = document.createElement("div");
    edit.classList.add("edit", "botao-1");
    let fa_edit = document.createElement("div");
    fa_edit.classList.add("fas", "fa-edit");
    edit.appendChild(fa_edit);

    let dell = document.createElement("div");
    dell.classList.add("dell", "botao-1");
    let fa_trash_alt = document.createElement("div");
    fa_trash_alt.classList.add("fas", "fa-trash-alt");
    dell.appendChild(fa_trash_alt);

    $(edit).click(function(){
        if($(input).attr("disabled")){
            $(input).removeAttr("disabled");
            $(fa_edit).removeClass("fa-edit").addClass("fa-save");
            $(fa_edit).removeClass("fas").addClass("far");
        } else{
            if(confirm("Ao salvar, você descartará a informação anterior")){
            }
            $(input).attr("disabled", "disabled");
            $(fa_edit).removeClass("fa-save").addClass("fa-edit");
            $(fa_edit).removeClass("far").addClass("fas");
        }
    })

    $(dell).click(function(){
        if(confirm("Você tem certeza que quer remover este procedimento?")){
            $(div_remove).remove();
        }
    })
    
    botoes.appendChild(edit);
    botoes.appendChild(dell);
    return botoes;
}

function loadQueixasPaciente(){
    let queixas_content = document.querySelector(".queixa-content");
    let linha_evolucao = document.createElement("div");
    linha_evolucao.classList.add("queixa", "linha-evolucao");

    let title = document.createElement("div");
    title.classList.add("title");
    let text1 = document.createElement("input");
    text1.setAttribute("disabled", "disabled");
    text1.setAttribute("type", "text");
    text1.setAttribute("placeholder", "Queixa do Paciente");
    title.appendChild(text1);

    linha_evolucao.appendChild(title);
    linha_evolucao.appendChild(create_botoes(text1, linha_evolucao));

    queixas_content.appendChild(linha_evolucao);
}

function loadComportamentos(){
    let comportamentos_content = document.querySelector(".comportamento-content");
    let linha_evolucao = document.createElement("div");
    linha_evolucao.classList.add("procedimento", "linha-evolucao");

    let title = document.createElement("div");
    title.classList.add("title");
    let text1 = document.createElement("input");
    text1.setAttribute("disabled", "disabled");
    text1.setAttribute("type", "text");
    text1.setAttribute("placeholder", "Comportamento do Paciente");
    title.appendChild(text1);

    linha_evolucao.appendChild(title);
    linha_evolucao.appendChild(create_botoes(text1, linha_evolucao));

    comportamentos_content.appendChild(linha_evolucao);
}

function loadProcedimentosAdicionais(){
    let procedimentos_content = document.querySelector(".procedimentos_content");
    let linha_evolucao = document.createElement("div");
    linha_evolucao.classList.add("procedimento", "linha-evolucao");

    let title = document.createElement("div");
    title.classList.add("title");
    let text1 = document.createElement("input");
    text1.setAttribute("disabled", "disabled");
    text1.setAttribute("type", "text");
    text1.setAttribute("placeholder", "Procedimento Adicional");
    title.appendChild(text1);

    linha_evolucao.appendChild(title);
    linha_evolucao.appendChild(create_botoes(text1, linha_evolucao));

    procedimentos_content.appendChild(linha_evolucao);
}

function loadEstadoPaciente(){
    let estado_paciente_content = document.querySelector(".estados-paciente .evolucao-content");
    let linha_evolucao = document.createElement("div");
    linha_evolucao.classList.add("estado-paciente", "linha-evolucao");

    let title = document.createElement("div");
    title.classList.add("title");
    let text1 = document.createElement("input");
    text1.setAttribute("disabled", "disabled");
    text1.setAttribute("type", "text");
    text1.setAttribute("placeholder", "Estado do Paciente");
    title.appendChild(text1);

    let hora = document.createElement("div");
    hora.classList.add("hora");
    let text2 = document.createElement("input");
    text2.setAttribute("disabled", "disabled");
    text2.setAttribute("type", "text");
    text2.setAttribute("placeholder", "00:00");
    hora.appendChild(text2);

    linha_evolucao.appendChild(title);
    linha_evolucao.appendChild(hora);
    linha_evolucao.appendChild(create_botoes([text1, text2], linha_evolucao));

    estado_paciente_content.appendChild(linha_evolucao);
}

// Adicionar função nos botões adicionar
let botoes_adicionar = document.querySelectorAll(".add-procedimento");
for(let i = 0; botoes_adicionar.length > i; i++){
    if(i == 0){ // Estado do Paciente
        botoes_adicionar[i].addEventListener("click", function(){
            loadEstadoPaciente();
        });
    } else if(i == 1){ // Queixas
        botoes_adicionar[i].addEventListener("click", function(){
            loadQueixasPaciente();
        });
    } else if(i == 2){ // Procedimentos Adicionais
        botoes_adicionar[i].addEventListener("click", function(){
            loadProcedimentosAdicionais();
        });
    } else if(i == 3){ // Comportamentos
        botoes_adicionar[i].addEventListener("click", function(){
            loadComportamentos();
        });
    }
}

// Adicionar função nos botões remover tudo
let botoes_remover = document.querySelectorAll(".rmv-all-procedimento");
for(let i = 0; botoes_remover.length > i; i++){
    if(i == 0){ // Estado do Paciente
        botoes_remover[i].addEventListener("click", function(){
            if(confirm("Você tem certeza que deseja remover TODAS as informações relacionadas ao estado do paciente?")){
                $(".evolucao-content > .estado-paciente").remove();
            }
        });

    } else if(i == 1){ // Queixas
        botoes_remover[i].addEventListener("click", function(){
            if(confirm("Você tem certeza que deseja remover TODAS as informações relacionadas as Queixas do paciente?")){
                $(".queixa-content > .queixa").remove();
            }
        });

    } else if(i == 2){ // Procedimentos Adicionais
        botoes_remover[i].addEventListener("click", function(){
            if(confirm("Você tem certeza que deseja remover TODAS as informações relacionadas aos Procedimentos Adicionais do paciente?")){
                $(".procedimentos_content > .procedimento").remove();
            }
        });

    } else if(i == 3){ // Comportamentos
        botoes_remover[i].addEventListener("click", function(){
            if(confirm("Você tem certeza que deseja remover TODAS as informações relacionadas aos Procedimentos Adicionais do paciente?")){
                $(".comportamento-content > .procedimento").remove();
            }
        });

    }
}


loadPrescricao(paciente_db);


// ADICIONAR FUNÇÃO DE VISUALIZAR INFORMAÇÕES ADICIONAIS
let linhas_evolucao_content = document.querySelectorAll(".linha-evolucao-content");

console.log(linhas_evolucao_content);

for(let linha_evolucao of linhas_evolucao_content){
    linha_evolucao.querySelector(".add-desc-evolucao").addEventListener("click", function(){
        if($(linha_evolucao.querySelector(".desc-procedimento")).css("display") == "none"){
            $(linha_evolucao.querySelector(".desc-procedimento")).show("swing");
        } else{
            $(linha_evolucao.querySelector(".desc-procedimento")).hide("swing");
        }        
    })
}