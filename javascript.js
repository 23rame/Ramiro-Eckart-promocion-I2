function relojPie(){
    var d = new Date();
    let hora = d.getHours();           
    let minutos= d.getMinutes();
    let segundos = d.getSeconds();
    if (hora < 10) {hora = "0" + hora};
    if (minutos < 10) {minutos = "0" + minutos};
    if (segundos < 10) {segundos = "0" + segundos};
    document.Reloj.Clock.value= hora + ":" + minutos + ":" + segundos;
}

var diapositiva = 0;
function mostrarSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    diapositiva++;
    if(diapositiva > slides.length) {diapositiva = 1}
    slides[diapositiva-1].style.display = "block";
    setTimeout(mostrarSlides,5000);
}

function abrir(id,bg){
    document.getElementById(bg).style.visibility = "visible";
    document.getElementById(id).style.visibility = "visible";
    document.getElementById(id).style.pointerEvents = "all";

}
function cerrar(id,bg){
    document.getElementById(bg).style.visibility = "hidden";
    document.getElementById(id).style.visibility = "hidden";
    document.getElementById(id).style.pointerEvents = "none";
}
function over(id){
    document.getElementById(id).style.backgroundColor = "gray";
}
function out(id){
    document.getElementById(id).style.backgroundColor = "";
}

function desplegar(){
    document.getElementById('desplegable-bg').style.height = "170px"
}
function cerra(){
    document.getElementById('desplegable-bg').style.height = "0px"
}
setInterval("relojPie()", 1000);
relojPie();
mostrarSlides();

