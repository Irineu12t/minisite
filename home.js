

        //função de clique dos botões
        function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
        }

         //clique do botão do whatsApp
        var url_whats = "https://biolink.ee/whatsappstudio";
        var btn_whats = document.getElementById("div_whats");
        btn_whats.addEventListener('click', function() { 
            openInNewTab(url_whats);
        });

         //clique do botão para o modal
        //  var modal = document.getElementById("myModal");
        //  var btn_modal = document.getElementById("div_list");
        //  btn_modal.addEventListener('click', function(){
        //      modal.style.display = "block"
        //  });;

        
        
        // Quando o usuário clica fora do modal, ele também fecha
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
        
        
 
         //clique do botão para o catalogo
        var btn_catalogo = document.getElementById("div_cat");
        btn_catalogo.addEventListener('click', function(){
            window.location.href = "cardapio.html";
        });

         //clique do botão para o botão novidades
         var btn_novidade = document.getElementById("div_nov");
         btn_novidade.addEventListener('click', function(){
             window.location.href = "novidades.html";
         });

         //clique do botão para o botão localização
        //  var btn_location = document.getElementById("div_loc");
        //  btn_location.addEventListener('click', function(){
        //      window.location.href = "location.html";
        //  });

        //clique do botão para cuidados
        var btn_cuidados = document.getElementById('div_cuidados');
        btn_cuidados.addEventListener('click', function(){
            window.location.href = "cuidados.html"
        });

        // var btn_site = document.getElementById('div_site');
        // btn_site.addEventListener('click', function(){
        //     openInNewTab("https://www.studiomsbeauty.com/");
        // });

        
        //código de mascara do input tel
        const handlePhone = (event) => {
            let input = event.target
            input.value = phoneMask(input.value)
        }
        
        const phoneMask = (value) => {
            if (!value) return ""
            value = value.replace(/\D/g,'')
            value = value.replace(/(\d{2})(\d)/,"($1) $2")
            value = value.replace(/(\d)(\d{4})$/,"$1-$2")
            return value
        }

    

    

        

