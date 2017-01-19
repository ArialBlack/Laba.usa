$(document).ready(function() {

    //var audio = new Audio('slide.m4a');
    //audio.play();

    $('#main-slides').fullpage({
        //anchors: ['Hello', 'About us', 'Works', 'Partners', 'Contact us'],
        menu: '#menu ul',
        slidesNavigation: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Hello', 'About us', 'Works', 'Partners', 'Contact us'],

        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log("slideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);

        },

        onSlideLeave: function(anchorLink, index, slideIndex, direction){
            console.log("----------------");
            console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
        },

        afterRender: function () {

            //playing the video
            //$('#about video').get(0).play();
        }
    });

    $('.modal')
        .on('show.bs.modal', function (e) {
            var $this = $(this),
                $btn = $(e.relatedTarget),
                preloadSRC = $btn.data('preload');

            $.fn.fullpage.setAllowScrolling(false);

            if (preloadSRC) {
                $.ajax({
                    cache: false,
                    url: '/parts/' + preloadSRC,
                    success: function(data) {
                        $this.find('.modal-body .container').html(data).waitForImages(function() {
                            console.log('loaded');
                            $this.find('.modal-body .field-body').addClass('show');
                            $this.find('.modal-body .preloader').addClass('hide');
                        });
                    }
                });
            }
        })
        .on('hide.bs.modal', function (e) {
            var $this = $(this),
                $btn = $(e.relatedTarget);

            $.fn.fullpage.setAllowScrolling(true);
            $this.find('.modal-body .field-body').removeClass('show');
            $this.find('.modal-body .preloader').removeClass('hide');
    });

    $('.nav-toogle').click( function () {
        $(this).toggleClass('opened');
        $('#menu').toggleClass('opened');
    });

    $('.ion-close').click( function () {
        $('.nav-toogle, #menu').toggleClass('opened');
    });

});
