

// criando script para index
var numberVersion = Math.floor(Math.random() * 101);
// js location
var scriptLocation = "location.js?v="+numberVersion;
// js home
var scriptHome = "home.js?v="+numberVersion;
// js shareCode
var scriptShare = "shareCode.js?v="+numberVersion;


window.onload = function(){
   createScript(scriptLocation);
   createScript(scriptHome);
   createScript(scriptShare);
}

function createScript(file_js){
    var script = document.createElement('script');
    script.src = file_js;
    script.type = "text/javascript";
    document.body.appendChild(script);

}