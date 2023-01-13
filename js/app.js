const botones = document.querySelectorAll("#btn1, #btn2, #btn3, #btn4");
const mapa = document.querySelector("#mapa");
let imagendefault= "/img/mapas/blank.png"
const map = document.querySelector("#map")
let btn1clicked = false
const rutasHover = [
    "/img/mapas/hover1.png",
    "/img/mapas/hover2.png",
    "/img/mapas/hover3.png",
    "/img/mapas/hover4.png"
];

mapa.src=imagendefault
document.addEventListener("DOMContentLoaded", () => {
    botones.forEach((boton, index) => {
        boton.addEventListener("mouseover", () => {
                mapa.src = rutasHover[index];       
        });
        boton.addEventListener("mouseout", () => {
                mapa.src = imagendefault
        });
        boton.addEventListener("click", () => {
            imagendefault= rutasHover[index]
            if(boton.id === "btn1") {
                document.querySelector("#map").innerHTML += 
                    "<area target='' alt='Vehicular 1' title='Vehicular 1' href='#' coords='195,115,186,121,195,135,204,129' shape='poly'>"+
                    "<area target='' alt='Vehicular 2' title='Vehicular 2' href='#' coords='291,133,282,143,297,152,302,145' shape='poly'>"+
                    "<area target='' alt='Vehicular 3' title='Vehicular 3' href='#' coords='279,196,270,201,278,214,286,210' shape='poly'>"+
                    "<area target='' alt='Vehicular 4' title='Vehicular 4' href='#' coords='269,225,268,232,282,233,282,224' shape='poly'>"+
                    "<area target='' alt='Vehicular 5' title='Vehicular 5' href='#' coords='231,267,233,275,251,273,246,264' shape='poly'>"+
                    "<area target='' alt='Vehicular 6' title='Vehicular 6' href='#' coords='283,276,268,283,276,292,286,288' shape='poly'>";
            }
        });
    }); 
    
});






