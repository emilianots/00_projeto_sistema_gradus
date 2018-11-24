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
    $("#sis-body-op").hide();
    $("#step-back").show();
})

$("#step-back").click(function () {
    $("#sis-body-op").show();
    $("#step-back").hide();
})
