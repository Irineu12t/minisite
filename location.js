var latitude1, longitude1, url_location, btn_location;

    function getPostition(){

        //pegando coordenas de latitude e longitude

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

        function onSuccess(position) {

            latitude1 = position.coords.latitude;
            longitude1 = position.coords.longitude;
                
            url_location= `https://www.google.com.br/maps/dir/${latitude1},${longitude1}/Av.+Ordem+e+Progresso,+157+-+V%C3%A1rzea+da+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01141-030+Av.+Ordem+e+Progresso,+157+-+V%C3%A1rzea+da+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01141-030/@-23.5133413,-46.6717683,16z/data=!3m1!4b1!4m11!4m10!1m3!2m2!1d-46.6685135!2d-23.5073222!1m5!1m1!1s0x94cef7fefb67f003:0xeb4cdb9758ea9dfe!2m2!1d-46.6677049!2d-23.518678?hl=pt-BR&authuser=`;

            console.log(`Your location: (${latitude1},${longitude1},${position.coords.accuracy})`);

            
        }

        // handle error case
        function onError() {
            if(onError.message.startsWith("Only secure origins are allowed")){
                console.log(`Failed to get your location!`);
                alert("Não Funciona");
            }
        }
    }

    
//   //clique do botão para obter localização
    btn_location = document.getElementById('div_loc');
    btn_location.addEventListener('click', function(){
        getPostition();
       
    });


           



