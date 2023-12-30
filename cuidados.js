var url_whats = "https://api.whatsapp.com/send?phone=5511914604087&text=Ol%C3%A1%20tudo%20bem?%20Estou%20com%20a%20seguinte%20d%C3%BAvida;%20%22%20Escreva%20sua%20d%C3%BAvida%20aqui%20%22.%20";

//clique do botão do whatsApp do cuidados
var btn_whats_2 = document.getElementById('div_whats_2');
btn_whats_2.addEventListener('click', function() { 
    openInNewTab(url_whats);
});

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

 //clique do botão para home
 var btn_home = document.getElementById('img-bnt-seta');
 btn_home.addEventListener('click', function(){
     window.location.href = "index.html";
 });