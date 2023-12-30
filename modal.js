// Obtendo o modal
var modal = document.getElementById("myModal");

// Obtendo o elemento <span> que fecha o modal
// var span = document.getElementsByClassName("close1")[0];

//codigo para o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica em <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica em <span> (x), fecha o modal

// //clique do botão do modal agradecimento para serviços
// var modalAgrad = document.getElementById("myModalAgrad");
// var btn_modal_agrad = document.getElementById('div_modal');
// btn_modal_agrad.addEventListener('click', function(){
//     window.location.href = "cardapio.html"
//     modalAgrad.style.display = "none";
// });


// Quando o usuário clica fora do modal, ele também fecha
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


