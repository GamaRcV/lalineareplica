const botones = document.querySelectorAll("#btn1, #btn2, #btn3, #btn4");
const mapa = document.querySelector("#mapa");
let imagendefault= "/img/mapas/blank.png"
const map = document.querySelector("#map")

let btn1clicked = false;

const rutasHover = [
    "/img/mapas/hover1.png",
    "/img/mapas/hover2.png",
    "/img/mapas/hover3.png",
    "/img/mapas/hover4.png"
];

const mapeos = {
    mapeo1: `<area target='' alt='Vehicular 1' title='Vehicular 1' href='#' coords='195,115,186,121,195,135,204,129' shape='poly'>
    <area target='' alt='Vehicular 2' title='Vehicular 2' href='#' coords='291,133,282,143,297,152,302,145' shape='poly'>
    <area target='' alt='Vehicular 3' title='Vehicular 3' href='#' coords='279,196,270,201,278,214,286,210' shape='poly'>
    <area target='' alt='Vehicular 4' title='Vehicular 4' href='#' coords='269,225,268,232,282,233,282,224' shape='poly'>
    <area target='' alt='Vehicular 5' title='Vehicular 5' href='#' coords='231,267,233,275,251,273,246,264' shape='poly'>
    <area target='' alt='Vehicular 6' title='Vehicular 6' href='#' coords='283,276,268,283,276,292,286,288' shape='poly'>`,
    mapeo2: `<area target="" alt="vehiculo1" title="vehiculo1" href="#" coords="307,164,15" shape="circle">
    <area target="" alt="vehiculo2" title="vehiculo2" href="#" coords="309,218,13" shape="circle">
    <area target="" alt="vehiculo3" title="vehiculo3" href="#" coords="341,216,13" shape="circle">
    <area target="" alt="vehiculo4" title="vehiculo4" href="#" coords="352,249,13" shape="circle">`,
    mapeo3: `<area target="" alt="zona1" title="zona1" href="#" coords="60,58,7" shape="circle">
    <area target="" alt="zona2" title="zona2" href="#" coords="44,75,7" shape="circle">
    <area target="" alt="zona3" title="zona3" href="#" coords="53,97,9" shape="circle">
    <area target="" alt="zona4" title="zona4" href="#" coords="82,91,10" shape="circle">
    <area target="" alt="zona5" title="zona5" href="#" coords="108,111,11" shape="circle">
    <area target="" alt="zona6" title="zona6" href="#" coords="154,230,9" shape="circle">
    <area target="" alt="zona7" title="zona7" href="#" coords="183,251,9" shape="circle">
    <area target="" alt="zona8" title="zona8" href="#" coords="230,292,10" shape="circle">
    <area target="" alt="zona9" title="zona9" href="#" coords="253,276,11" shape="circle">
    <area target="" alt="zona10" title="zona10" href="#" coords="274,305,12" shape="circle">
    <area target="" alt="zona11" title="zona11" href="#" coords="NaN" shape="circle">`,
    mapeo4: `<area target="" alt="camara1" title="camara1" href="#" coords="277,83,14" shape="circle">
    <area target="" alt="camara2" title="camara2" href="#" coords="285,124,14" shape="circle">
    <area target="" alt="camara3" title="camara3" href="#" coords="124,142,13" shape="circle">
    <area target="" alt="camara4" title="camara4" href="#" coords="113,174,14" shape="circle">`,

}

const mapeoBotones = `<area id="btn1" target="" alt="Da click aquí para ver cámaras de vehículos"
title="Da click aquí para ver cámaras de vehículos" href="#" coords="17,134,88,165"
shape="rect">
<area id="btn2" target="" alt="Da click aquí para ver cámaras de Sentri"
title="Da click aquí para ver cámaras de Sentri" href="#" coords="16,176,88,212" shape="rect">
<area id="btn3" target="" alt="Da click aquí para ver cámaras de Ready Lane"
title="Da click aquí para ver cámaras de Ready Lane" href="#" coords="16,226,88,259"
shape="rect">
<area id="btn4" target="" alt="Da click aquí para ver cámaras de peatones"
title="Da click aquí para ver cámaras de peatones" href="#" coords="16,272,88,304" shape="rect">`




mapa.src = imagendefault;

document.addEventListener("DOMContentLoaded", () => {
    botones.forEach((boton, index) => {
        
        boton.addEventListener("mouseover", () => {
                mapa.src = rutasHover[index];       
        });
        
        boton.addEventListener("mouseout", () => {
                mapa.src = imagendefault
        });
        
        boton.addEventListener("click", () => {
            imagendefault = rutasHover[index];
            switch (boton.id){
                case "btn1":
                    map.innerHTML = mapeoBotones + mapeos.mapeo1;
                    
                    break
                case "btn2":
                    map.innerHTML = mapeoBotones + mapeos.mapeo2;
                    
                    break
                case "btn3":
                    map.innerHTML = mapeoBotones + mapeos.mapeo3;
                    
                    break
                case "btn4":
                    map.innerHTML = mapeoBotones + mapeos.mapeo4;
                    
                    break 
                default :
                    map.innerHTML = mapeoBotones;
                    
            }

            


        });

    }); 
    
});