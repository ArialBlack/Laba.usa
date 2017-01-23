(function ($) {
    $(function() {

        function _resize(x1, x2) {
            var fbp1 = 830,
                fbp2 = 1900,
                calc = Math.min(100 * x1 / fbp1, 100 * x2 / fbp2),
                res = calc.toFixed(2),
                $body = $('body');
            fbp1 > x1 || fbp2 > x2 && x2 > 768 ? ($body.css("font-size", res + "%")) : 768 >= x2 ? (res = +res + 18, $body.css("font-size", res + "%")) : $body.css("font-size", "100%")
        }

        function resizeBaseFont() {
            var x1 = $(window).width(),
                x2 = $(window).height();
            _resize(x1, x2);
        }

        $(document).ready(function() {

            //var audio = new Audio('slide.m4a');
            //audio.play();
            resizeBaseFont();

            $('#main-slides').fullpage({
                anchors: ['hello', 'about', 'works', 'clients', 'contacts'],
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

        $('#showMenu').click( function () {
            $(this).toggleClass('opened');
        });


        $(window).resize(function() {
            resizeBaseFont();
        });


    });
}(jQuery));
