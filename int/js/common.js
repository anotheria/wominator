$(function () {
    $('#datetimepicker12').datetimepicker({
        inline: true,
        sideBySide: true
    });
    /**
     * Show / hide additional options for items in table.
     */
    $('.swipe-area').on({
        'swipeleft': function (e) {
            $('.swipe-area').removeClass("open-swipe")
            $(this).addClass("open-swipe");
        },

        'swiperight': function (e) {
            $(this).removeClass("open-swipe");
        }
    });

    /**
     * Remove current item on click.
     */
    $('.icons-swipe').click(function (e) {
        $(this).parent('.row-food').remove();
    });

    var owl = $('.owl-carousel').owlCarousel({
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

    $(".owl-prev").click(function () {
        owl.trigger('prev.owl.carousel');
        $('.swipe-area').removeClass("open-swipe");
    });

    $(".owl-next").click(function () {
        owl.trigger('next.owl.carousel');
        $('.swipe-area').removeClass("open-swipe");
    });

    /**
     * Toggle active class for current item on checkbox click.
     */
    $('.custom-checkbox').click(function () {
        $(this).parents('.row-data').toggleClass('active');
    });

    /**
     * Add new empty food item on click.
     */
    $('.add-tr').click(function (e) {
        var $template = $('#foodRow').children();
        $(this).closest('.food-section').append( $template.clone(true, true) );
    });
});