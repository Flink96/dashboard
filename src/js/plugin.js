;(function ($) {

    //dropdown
    var dropdownWrap = $('.dropdown-wrap');
    dropdownWrap.on('click', function(e){
       e.preventDefault();
       var target = $(this).find('.dropdown-menu');
       target.slideToggle();
       $(this).toggleClass('open');
    });

    // toggle sidebar menu
    var menuBtn = $('.menu-btn');
    var body = $('body');
    var mobileClass =('_mobileSidebar');
    var openInMobile = ('_openInMobile');
    var mobileBreakPoin= 1280;

    menuBtn.on('click', function(e){
        var width= $(window).width();//получаем шиниру окна
        body.toggleClass(mobileClass);//вешаем класс для открытия меню

        if( width<mobileBreakPoin){
            body.toggleClass(openInMobile)
        }
    });

    $(window).on('resize load', function (e) {
        var width=$(this).width();
        if( width < mobileBreakPoin && !body.hasClass(openInMobile) ){
            body.addClass(mobileClass);
        }
        else if( width >= mobileBreakPoin) {
            body.removeClass(mobileClass);
            body.removeClass(openInMobile);
        }

    });

    //loader hide
    var loader =$('#loading');
    $(window).on('load', function (e) {
        loader.addClass('hide');
    });
})(jQuery);