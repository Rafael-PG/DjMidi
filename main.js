
function playSonidos(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let i = 0;

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.addEventListener('click', function () {
        playSonidos(idAudio);
    });

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('activa');
            console.log(evento.code === 'Space' || evento.code === 'Enter');
        }
        tecla.onkeyup = function () {
            tecla.classList.remove('activa');
        }
    }
};



