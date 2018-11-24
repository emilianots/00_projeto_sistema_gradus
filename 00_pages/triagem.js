var URL = "http://localhost:3000/pacientes";
var pacientes = null;

function getPacientes() {
    $.ajax({
        type: "GET",
        url: URL,
        async: false,
        success: function (data) {
            pacientes = data
        }
    })
}

getPacientes();
$("#main-op-paciente-internado").click(function () {
    console.table(pacientes);
    $("#sis-body-panel").hide();
    $("#step-back").show();
    $("#list-pacientes").show();
})

$("#step-back").click(function () {
    $("#sis-body-panel").show();
    $("#step-back").hide();
    $("#list-pacientes").hide();
})
