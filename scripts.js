function mostrarMais(id) {
    var conteudoCurto = document.querySelector("#noticia-" + id + " .conteudo-curto");
    var conteudoCompleto = document.querySelector("#noticia-" + id + " .conteudo-completo");

    conteudoCurto.style.display = "none";
    conteudoCompleto.style.display = "block";
}

function mostrarMenos(id) {
    var conteudoCurto = document.querySelector("#noticia-" + id + " .conteudo-curto");
    var conteudoCompleto = document.querySelector("#noticia-" + id + " .conteudo-completo");

    conteudoCurto.style.display = "block";
    conteudoCompleto.style.display = "none";
}
