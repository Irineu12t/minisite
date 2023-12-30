//function animação do scroll
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight*9)/10);
    target.forEach(function(element){
        if((windowTop)>element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}

var url_instagram = "https://www.instagram.com/studiomsbeautyy/";

//clique do botão do whatsApp do cuidados
var btn_insta = document.getElementById('text-insta');
btn_insta.addEventListener('click', function() { 
    openInNewTab(url_instagram);
});

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

// https://www.instagram.com/studiomsbeautyy/