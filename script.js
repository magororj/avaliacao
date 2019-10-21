$(document).ready(function() {
    var servicos_html = "";
    $.getJSON("./json/servico.json", function(Servico) {
        $.each(Servico.Servico, function(key, val) {
            servicos_html += `
            <div class="col-md-4">
                <div class="col-md-8 ml-n3">
                <img class="img-fluid" src="./assets/servico-` + val.Posicao + `.png">
                </div>
              <div>
              <h5 class="mt-3">` + val.Titulo + `</h5>
              <h6>` + val.Subtitulo + `</h6>
              <p>` + val.Descricao + `</p>
              </div>
            </div>`;
        });
        $("#servicos > div").html(servicos_html);
    });

});