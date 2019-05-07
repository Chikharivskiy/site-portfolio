// preloader
// setTimeout(function(){
//     document.getElementsByClassName('wrap-preloader')[0].classList.add('off-preloader');
// }, 2000);
// hamburger menu
document.querySelector('.header__menu').addEventListener('click', () => {
    document.querySelector('.header__nav').classList.toggle('header__nav-active');
    document.querySelector('.header__menu').classList.toggle('header__menu-active');
})

// document.querySelector('.header__item').addEventListener('click', function(){
//     document.querySelector('.header__menu').classList.remove('header__menu-active');
// })
// jquery anchor menu
document.getElementsByTagName('a')[0].addEventListener('click', (e) => {
    e.preventDefault();
})
jQuery(document).ready(function() {
    setup_slight_scroll_to_anchors();
   
    function setup_slight_scroll_to_anchors() {
        jQuery('a[href^="#"]').click(function() {
            var link = jQuery(this);
            if (link.attr('href') == '#') return;
            var target = link.attr('href');
            var target_top = jQuery(target).offset().top;
            jQuery('html, body').animate({
               scrollTop: target_top
            }, 1000);
            return false;
        });
    }
});
// scroll
const nav = document.querySelector('.header__nav');
window.addEventListener('scroll', function(){
    nav.classList.add('bg');
})
// form
jQuery(document).ready(function($) {

    // Отправляет данные из формы на сервер и получает ответ
    $('#contactForm').on('submit', function(event) {
        
        event.preventDefault();

        var form = $('#contactForm'),
            button = $('#button'),
            answer = $('#answer'),
            loader = $('#loader');

        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: form.serialize(),
            beforeSend: function() {
                answer.empty();
                button.attr('disabled', true).css('margin-bottom', '20px');
                loader.fadeIn();
            },
            success: function(result) {
                loader.fadeOut(300, function() {
                    answer.text(result);
                });
                form.find('.field').val('');
                button.attr('disabled', false);
            },
            error: function() {
                loader.fadeOut(300, function() {
                    answer.text('Произошла ошибка! Попробуйте позже.');
                });
                button.attr('disabled', false);
            }
        });
    
    });

});