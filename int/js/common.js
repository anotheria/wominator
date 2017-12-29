$(function () {

    $(".swipe-area").on("swipeleft", swipeleftHandler);

    function swipeleftHandler() {
        $('.swipe-area').removeClass("open-swipe")
        $(this).addClass("open-swipe");
    }

    $(".swipe-area").on("swiperight", swiperightHandler);

    function swiperightHandler() {
        $(this).removeClass("open-swipe");
    }
});

$(document).ready(function () {

    $('.icons-swipe').on('click', function(){
        $(this).parent('.row-food').remove();
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        touchDrag: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        smartSpeed: 450
    });

    var owl = $('.owl-carousel').owlCarousel();

    $(".owl-prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".owl-next").click(function () {
        owl.trigger('next.owl.carousel');
    });

    var $checkbox = $('.custom-checkbox');

    $checkbox.click(function () {
        $(this).parents('.row-food').toggleClass('active');
    });

    //==================================
    //ADD NEW FOOD
    //==================================

    $('.breakfast .add-tr').click(function () {
        $('.owl-item.active .breakfast .row-food:last-child').after('<div class="row-food swipe-area"><div class="box"><input class="form-control form-data" type="time" value="00:00:00"></div><div class="box"><input type="text" class="form-control form-data"></div><div class="box"><input class="form-control form-data" type="tel"></div><div class="box"><input type="checkbox" class="custom-checkbox"></div></div>');
    });

    $('.lunch .add-tr').on('click', function () {
        $('.owl-item.active .lunch .row-food:last-child').after('<div class="row-food"><div class="box"><input class="form-control form-data" type="time" value="00:00:00"></div><div class="box"><input type="text" class="form-control form-data"></div><div class="box"><input class="form-control form-data" type="tel"></div><div class="box"><span class="custom-checkbox"></span></div></div>');
    });

    $('.dinner .add-tr').on('click', function () {
        $('.owl-item.active .dinner .row-food:last-child').after('<div class="row-food"><div class="box"><input class="form-control form-data" type="time" value="00:00:00"></div><div class="box"><input type="text" class="form-control form-data"></div><div class="box"><input class="form-control form-data" type="tel"></div><div class="box"><span class="custom-checkbox"></span></div></div>');
    });

    //$('.custom-checkbox').click(function () {
    //    $(this).parents('.row-food').toggleClass('active');
    //});

});