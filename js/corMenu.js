var el = document.getElementsByClassName('bar'); // elemento alvo
var numPx = '250'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > numPx) {
    	el.classList.add('mudaCor'); // adiciona classe "mudaCor"
    } else {
      el.classList.remove('mudaCor'); // remove classe "mudaCor"
    }
});