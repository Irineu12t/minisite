

        //clique do botão para home
        var btn_home = document.getElementById('img-bnt-seta');
        btn_home.addEventListener('click', function(){
            window.location.href = "index.html";
        });

        function show(classe, textBtn){

            document.querySelector(classe).classList.toggle('max');  

            if(document.querySelector(classe).classList.contains('max')){

                document.getElementById(textBtn).innerText ='Ver menos';

            }
            else{
                document.getElementById(textBtn).innerText ='Ver mais';
            }
            
        }

        function focusDs(){
            document.getElementById('divds').scrollIntoView()
        }

        // função do menu de navegação 

        window.onscroll = function() {myFunction()};
        
        var navbar = document.getElementById("navbar_cardapio");
        var sticky = navbar.offsetTop;

        var link_button1 = document.getElementById("teste-1");
        var link_button2 = document.getElementById("teste-2");
        var link_button3 = document.getElementById("teste-3");
        
        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            link_button1.classList.remove("teste-1");
            link_button2.classList.remove("teste-1");
            link_button3.classList.remove("teste-1");



          } else {
            navbar.classList.remove("sticky");
            document.body.style.paddingTop='5px'
            link_button1.classList.add("teste-1");
            link_button2.classList.add("teste-1");
            link_button3.classList.add("teste-1");


            
          }
        }

      // clique do botão eu quero

        function btnEuquero(serviço){

          var link_serviço = `https://api.whatsapp.com/send?phone=5511914604087&text=Ol%C3%A1!%20Te%20encontrei%20atrav%C3%A9s%20do%20Instagram.%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20fazer%20${serviço}%0A%0APara%20adiantar%20o%20seu%20atendimento%20digite%20o%20seu%20nome%20%F0%9F%A4%A9`;

          openInNewTab(link_serviço);
          
        }

        function openInNewTab(url) {
          var win = window.open(url, '_blank');
          win.focus();
          }
              