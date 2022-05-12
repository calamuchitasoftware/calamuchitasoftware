/*document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});*/

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('ul').toggleClass('show');
    });
});





/*Scroll Reveal*/

/*Pagina principal*/
ScrollReveal().reveal('.showcase',);
ScrollReveal().reveal('.nav-main', { delay: 600});
//ScrollReveal().reveal('.showcase', { delay: 500 });
ScrollReveal().reveal('.cards', { delay: 300 });
ScrollReveal().reveal('.bannerDos', { delay: 300 });
ScrollReveal().reveal('.bannerUno', { delay: 300 });
ScrollReveal().reveal('.bannerDos', { delay: 300 });

/*Pagina sistemas adm ventas*/
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.nav-main', { delay: 600});
ScrollReveal().reveal('.txtUno', { delay: 300 });
ScrollReveal().reveal('.txtDos', { delay: 300 });
ScrollReveal().reveal('.productoUno', { delay: 300 });
ScrollReveal().reveal('.social', { delay: 300 });

/*Pagina Armado, mantenimiento y optimización*/
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.nav-main', { delay: 600});
ScrollReveal().reveal('.txtUno', { delay: 300 });
ScrollReveal().reveal('.slider', { delay: 300 });
ScrollReveal().reveal('.txtDos', { delay: 300 });
ScrollReveal().reveal('.social', { delay: 300 });

//Boton up

window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show')
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*Pantalla de carga */

/*window.onload = function(){
    var contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0'
}*/

//  Contact Boton

/*$(document).ready(function(e){
    $('.btncontact').on('mouseenter', function(e){
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
    $('.btncontact').on('mouseout', function(e){
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
})*/
/*  _________    __    ___    __  _____  __________  _______________       _____ ____  _____________       _____    ____  ______
  / ____/   |  / /   /   |  /  |/  / / / / ____/ / / /  _/_  __/   |     / ___// __ \/ ____/_  __/ |     / /   |  / __ \/ ____/
 / /   / /| | / /   / /| | / /|_/ / / / / /   / /_/ // /  / / / /| |     \__ \/ / / / /_    / /  | | /| / / /| | / /_/ / __/   
/ /___/ ___ |/ /___/ ___ |/ /  / / /_/ / /___/ __  // /  / / / ___ |    ___/ / /_/ / __/   / /   | |/ |/ / ___ |/ _, _/ /___   
\____/_/  |_/_____/_/  |_/_/  /_/\____/\____/_/ /_/___/ /_/ /_/  |_|   /____/\____/_/     /_/    |__/|__/_/  |_/_/ |_/_____/   
                                                                                                                               
 */
