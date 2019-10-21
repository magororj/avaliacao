$(document).ready(function() {
    var servicos_html = "";
    $.getJSON("./json/servico.json", function(Servico) {
        $.each(Servico.Servico, function(key, val) {
            if (key === 0) {
                servicos_html += `
            <div class="col-lg-12 col-xl-4">
                <div class="col-md-8 ml-n3">
                <img class="img-fluid" src="./assets/servico-` + val.Posicao + `.png">
                </div>
              <div>
              <h5 class="mt-3">` + val.Titulo + `</h5>
              <h6>` + val.Subtitulo + `</h6>
              <p>` + val.Descricao + `</p>
              </div>
            </div>`;
            } else {
                servicos_html += `
            <div class="col-lg-6 col-xl-4">
                <div class="col-md-8 ml-n3">
                <img class="img-fluid" src="./assets/servico-` + val.Posicao + `.png">
                </div>
              <div>
              <h5 class="mt-3">` + val.Titulo + `</h5>
              <h6>` + val.Subtitulo + `</h6>
              <p>` + val.Descricao + `</p>
              </div>
            </div>`;
            }
        });
        $("#servicos > div").html(servicos_html);
    });

});