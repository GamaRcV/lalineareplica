let redirect = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if(!redirect){
        redirect = true;
        window.location.href="./movil.html"
    }
}
const botones = document.querySelectorAll("#btn1, #btn2, #btn3, #btn4");
const mapa = document.querySelector("#mapa");
let imagendefault = "./img/mapas/blank.png"
const map = document.querySelector("#map")
let botonSeleccionadoAnteriormente;
let areasCreadasDinamicamente = [];
// areas de los botones a mapear
const areasBtnVehicular = [
    { id: "camv1", title: "Vehicular 1", alt: "vehicular 1", coords: "194,128,9" },
    { id: "camv2", title: "Vehicular 2", alt: "vehicular 2", coords: "293,145,9" },
    { id: "camv3", title: "Vehicular 3", alt: "vehicular 3", coords: "278,206,9" },
    { id: "camv4", title: "Vehicular 4", alt: "vehicular 4", coords: "273,230,9" },
    { id: "camv5", title: "Vehicular 5", alt: "vehicular 5", coords: "238,270,10" },
    { id: "camv6", title: "Vehicular 6", alt: "vehicular 6", coords: "278,285,9" },
]
const areasBtnSentri = [
    { id: "cams1", title: "Sentri 1", alt: "Sentri 1", coords: "301,157,315,174" },
    { id: "cams2", title: "Sentri 2", alt: "Sentri 2", coords: "304,213,320,233" },
    { id: "cams3", title: "Sentri 3", alt: "Sentri 3", coords: "334,210,346,231" },
    { id: "cams4", title: "Sentri 4", alt: "Sentri 4", coords: "343,257,362,239" },
]
const areasBtnReadyLane = [
    { id: "camr1", title: "Ready Lane 1", alt: "Ready Lane 1", coords: "60,58,8" },
    { id: "camr2", title: "Ready Lane 2", alt: "Ready Lane 2", coords: "48,76,8" },
    { id: "camr3", title: "Ready Lane 3", alt: "Ready Lane 3", coords: "53,96,8" },
    { id: "camr4", title: "Ready Lane 4", alt: "Ready Lane 4", coords: "83,91,9" },
    { id: "camr5", title: "Ready Lane 5", alt: "Ready Lane 5", coords: "109,111,9" },
    { id: "camr6", title: "Ready Lane 6", alt: "Ready Lane 6", coords: "154,230,9" },
    { id: "camr7", title: "Ready Lane 7", alt: "Ready Lane 7", coords: "183,251,8" },
    { id: "camr8", title: "Ready Lane 8", alt: "Ready Lane 8", coords: "232,291,9" },
    { id: "camr9", title: "Ready Lane 9", alt: "Ready Lane 9", coords: "252,278,9" },
    { id: "camr10", title: "Ready Lane 10", alt: "Ready Lane 10", coords: "273,304,11" },
    { id: "camr11", title: "Ready Lane 11", alt: "Ready Lane 11", coords: "343,333,9" },
]
const areasBtnPeatonal = [
    { id: "camp1", title: "Peatonal 1", alt: "Peatonal 1", coords: "272,79,287,88" },
    { id: "camp2", title: "Peatonal 1", alt: "Peatonal 1", coords: "279,121,294,130" },
    { id: "camp3", title: "Peatonal 1", alt: "Peatonal 1", coords: "120,140,135,152" },
    { id: "camp4", title: "Peatonal 1", alt: "Peatonal 1", coords: "108,169,124,180" },
]
const textoDinamico = [
    "camara 1",
    "camara 2",
    "camara 3",
    "camara 4",
    "camara 5",
    "camara 6"
]
//Cambio automatico de camaras para mostrar texto a lado
let textoCamara = "";
const ubicacion = document.querySelector("#ubicacion")
// Variables modal video
const ModalContainer = document.querySelector(".modal-container")
const Modal = document.querySelector(".modal")
const CerrarModal = document.querySelector(".close")
//Variables modal Premium
const ModalContainerPremium = document.querySelector(".modal-premium")
const btnCerrarPremium = document.querySelector(".btnCerrarPremium")
const btnCancelarPremium = document.querySelector("#cancel")
const confirmPremium = document.querySelector("#confirm")

confirmPremium.addEventListener("click",()=>{
    alert("Estamos trabajando en la versión Premium✨")
})
// Modificar tamaño de video ya sea zoom o disminuir zoom
const zoom = document.querySelector("#zoom")
const minum = document.querySelector("#minum")
function ZoomVideo(tipo) {
    let elementStyle = window.getComputedStyle(Modal);
    let elementWidth = elementStyle.getPropertyValue('width');
    let ancho = Number(elementWidth.slice(0, elementWidth.length - 2))
    let nuevoAncho = 0;
    if (tipo == "acercar") {
        if (ancho == 900) {
            nuevoAncho = ancho
        } else {
            zoom.disabled = false
            nuevoAncho = ancho + 150
        }
    } else if (tipo == "alejar") {
        console.log("alejando")
        if (ancho == 450) {
            nuevoAncho = ancho
        } else {
            nuevoAncho = ancho - 150
        }
    }
    Modal.style.width = `${nuevoAncho}px`
}
zoom.addEventListener("click", () => {
    ZoomVideo("acercar")
})
minum.addEventListener("click", () => {
    ZoomVideo("alejar")
})
const rutasHover = [
    "./img/mapas/hover1.png",
    "./img/mapas/hover2.png",
    "./img/mapas/hover3.png",
    "./img/mapas/hover4.png"
];
mapa.src = imagendefault
document.addEventListener("DOMContentLoaded", () => {
    
    botones.forEach((boton, index) => {
        boton.addEventListener("mouseover", () => {
            mapa.src = rutasHover[index];
        });

        boton.addEventListener("mouseout", () => {
            mapa.src = imagendefault
        });
        boton.addEventListener("click", (e) => {
            imagendefault = rutasHover[index]
            e.preventDefault();
            if (botonSeleccionadoAnteriormente !== boton) {
                // Eliminar áreas creadas dinámicamente previamente
                areasCreadasDinamicamente.forEach(area => {
                    map.removeChild(area);
                });
                areasCreadasDinamicamente = []
                //Mapear áreas correspondientes al boton 
                if (boton.id === "btn1") {
                    //texto Dinamico 
                    textoCamara = "Vehicular"
                    ubicacion.textContent = textoCamara;
                    //Mapeando areas del arreglo con los objetos
                    areasBtnVehicular.forEach((area) => {
                        const area1 = document.createElement("area");
                        area1.setAttribute("id", area.id)
                        area1.setAttribute("target", "");
                        area1.setAttribute("title", area.title)
                        area1.setAttribute("alt", area.alt);
                        area1.setAttribute("class", "cursor");
                        area1.setAttribute("coords", area.coords);
                        area1.setAttribute("shape", "circle");
                        map.appendChild(area1);
                        areasCreadasDinamicamente.push(area1);
                    })
                    //Implementando el hover para que se muestren las luces sobre las camaras camara vehicular 1, estan en el html solo aqui se muestran y ocultan 
                    const cameras = document.querySelectorAll("[id^='camv']");
                    cameras.forEach((camera, index) => {
                        const light = document.querySelector(`#luzv${index + 1}`);
                        camera.addEventListener("mouseover", () => {
                            light.classList.replace("luzvoff", `luzv${index + 1}`);

                        });
                        camera.addEventListener("mouseout", () => {
                            light.classList.replace(`luzv${index + 1}`, "luzvoff");
                        });
                    });
                    //Modal para ver video camara
                    const abrirModal = document.querySelector("#camv2")
                    abrirModal.addEventListener("click", () => {
                        ModalContainer.style.opacity = "1"
                        ModalContainer.style.visibility = "visible"
                        setTimeout(() => {
                            Modal.style.transform = "translateY(0%)"
                        }, 300)
                    })
                    CerrarModal.addEventListener("click", () => {
                        Modal.style.transform = "translateY(-200%)"
                        setTimeout(() => {
                            ModalContainer.style.opacity = "0"
                            ModalContainer.style.visibility = "hidden"
                            Modal.style.width = "450px"
                        }, 600)

                    })


                }
                //Mapear áreas correspondientes al boton 
                else if (boton.id === "btn2") {
                    //texto dinamico a lado del texto San Ysidro
                    textoCamara = "Sentri"
                    ubicacion.textContent = textoCamara;
                    areasBtnSentri.forEach((area) => {
                        const area1 = document.createElement("area");
                        area1.setAttribute("id", area.id)
                        area1.setAttribute("title", area.title);
                        area1.setAttribute("alt", area.alt);
                        area1.setAttribute("target", "")
                        area1.setAttribute("shape", "rect")
                        area1.setAttribute("class", "cursor");
                        area1.setAttribute("coords", area.coords);
                        map.appendChild(area1);
                        areasCreadasDinamicamente.push(area1);
                    })

                }
                //Mapear áreas correspondientes al boton 
                else if (boton.id === "btn3") {
                    //texto dinamico a lado del texto San Ysidro
                    textoCamara = "Ready Lane"
                    ubicacion.textContent = textoCamara;
                    areasBtnReadyLane.forEach((area) => {
                        const area1 = document.createElement("area");
                        area1.setAttribute("id", area.id)
                        area1.setAttribute("target", "");
                        area1.setAttribute("title", area.title);
                        area1.setAttribute("alt", area.alt);
                        area1.setAttribute("class", "cursor");
                        area1.setAttribute("coords", area.coords);
                        area1.setAttribute("shape", "circle");
                        map.appendChild(area1);
                        areasCreadasDinamicamente.push(area1);
                    })
                }
                //Mapear áreas correspondientes al boton 
                else if (boton.id === "btn4") {
                    //texto dinamico a lado del texto San Ysidro
                    textoCamara = "Peatonal"
                    ubicacion.textContent = textoCamara;
                    areasBtnPeatonal.forEach((area) => {
                        const area1 = document.createElement("area");
                        area1.setAttribute("id", area.id)
                        area1.setAttribute("target", "");
                        area1.setAttribute("alt", area.alt);
                        area1.setAttribute("title", area.title);
                        area1.setAttribute("class", "cursor");
                        area1.setAttribute("coords", area.coords);
                        area1.setAttribute("shape", "rect");
                        map.appendChild(area1);
                        areasCreadasDinamicamente.push(area1);
                    })
                }
                botonSeleccionadoAnteriormente = boton;
                //Modal premium
                const BotonesPremium = document.querySelectorAll("#camv1,#camv3,#camv4,#camv5,#camv6,[id^='cams'],[id^='camr'],[id^='camp']")
                BotonesPremium.forEach((boton) => {
                    boton.addEventListener("click", () => {
                        ModalContainerPremium.style.opacity = "1"
                        ModalContainerPremium.style.visibility = "visible"
                    })
                })
                btnCerrarPremium.addEventListener("click", () => {
                    ModalContainerPremium.style.opacity = "0"
                    ModalContainerPremium.style.visibility = "hidden"
                })
                btnCancelarPremium.addEventListener("click", () => {
                    ModalContainerPremium.style.opacity = "0"
                    ModalContainerPremium.style.visibility = "hidden"
                })
                
            }

        });

    });
    //Hora de actualizacion del video
    fetch('live/hora.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("hora").innerHTML = data;
        });
    //codigo para que tome el video
    if (Hls.isSupported()) {
        var video = document.getElementById('video');
        var hls = new Hls();
        // bind them together
        hls.attachMedia(video);
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            hls.loadSource("http://lalineabaralabs.ddns.net/live/mystream.m3u8");
            hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            });
        });
    }
});

//Prueba de actualizacion de repositorio en el servidor