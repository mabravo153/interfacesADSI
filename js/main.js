(function(){

    document.addEventListener('DOMContentLoaded', function() {
       
    let contenedorVotos = document.querySelector('.contenedor-votos');
        
    contenedorVotos.addEventListener('click', function (e) {
        e.preventDefault();

        let campo = document.querySelectorAll('.campo-voto');

        campo.forEach(element => {
            element.classList.remove('escalado')
        });

        let contenedor = e.target;

        let contenidoVoto = contenedor.parentElement.parentElement; 

        contenidoVoto.getAttribute('data-value');

        contenidoVoto.classList.add('escalado')



    })    


    });

})();