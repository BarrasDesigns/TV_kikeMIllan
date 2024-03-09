// REPRODUCE VIDEO 2
function getFullscreenElement() {
    return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullscreenElement
    || document.msFullscreenElement
}

function iniciarVideo2() { 
    let boton=document.getElementById('btnTestimonio'); 
    boton.addEventListener('click', iniciarTestimonio, false); 
 } 
 function iniciarTestimonio() { 
    let video2=document.getElementById('testimonio'); 
    video2.play(); 
 } 
 window.addEventListener('load', iniciarVideo2, false); 

function toggleFullscreen() {
    if (getFullscreenElement()) {
        document.exitFullscreen();
    } else {
        document.getElementById("testimonio").requestFullscreen().catch(console.log);
        document.getElementById("testimonio").requestFullscreen().catch((e) => {
            document.getElementById("testimonio").style.display = "block";
            HTMLMediaElement.play();
        });
    }
}

function addEvent(element, evnt, funct){
    if (element.attachEvent)
     return element.attachEvent('on'+evnt, funct);
    else
     return element.addEventListener(evnt, funct, false);
  }
  
  addEvent(
      document.getElementById('btnTestimonio'),
      'click',
      function () { toggleFullscreen();  }
  );

  document.getElementById("testimonio").style.display = "none";

//   ABRE MODALES

  const toggleModal1 = ((e) => {
    const modal = document.getElementById("modal__KikeMillan");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    }
  })
  const toggleModal2 = ((e) => {
    const modal = document.getElementById("modal__hipnosis");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    }
  })
  const toggleModal3 = ((e) => {
    const modal = document.getElementById("modal__hipnoTerapeutica");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    }
  })
  const toggleModal4 = ((e) => {
    const modal = document.getElementById("modalContainer--longevidad");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    }
  })