$(function() {
    $("#carousel1").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        //nav:true, //Отключение навигации
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:3000, //Время смены слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});
$(function() {
    $("#carousel2").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        //nav:true, //Отключение навигации
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:3000, //Время смены слайда
        items:3,
        center:true

    });
});

$(function() {
    $("#carousel3").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        nav:true, //Отключение навигации
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:3000, //Время смены слайда
        items:4,
        // center:true

    });
});

// window.ready = function() {
//     // alert('Work');
//                 setInterval(function() {
//                     window.scrollTo(0, 100);
//                     $('header').addClass('header-fixed-scroll');
//                 }, 100);
//                 setInterval(function() {
//                     window.scrollTo(0, 100);
//                     $('header').removeClass('header-fixed-scroll');
//                 }, 100);
//         }


$("body").scroll(function() {/* logo hideShow */
    var navHeight = $('header').height();
     if($(window).scrollTop() > navHeight) {
    // $("header").fadeOut("fast");
    $("header").addClass("header-fixed-scroll");
}


$(window).scroll(function() {/* logo hideShow */
    var navHeight = $('header').height();
     if($(window).scrollTop() > navHeight) {
    // $("header").fadeOut("fast");
    $("header").addClass("header-fixed-scroll");
    }

 // else if($(window).scrollTop() < navHeight ) {
 //    $("#logo").fadeIn("Infast");
 //    $("#navigation").css({
 //      "box-shadow":"none",
 //      "opacity":"0.851",
 //      "border":"none"
 //      })
// 
    // }
  });