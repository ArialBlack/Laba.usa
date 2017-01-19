$(document).ready(function() {

    //var audio = new Audio('slide.m4a');
    //audio.play();

    $('#main-slides').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
        menu: '#menu',
        slidesNavigation: true,

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
                $this.find('.modal-body').load('/parts/' + preloadSRC, function( response, status, xhr ) {
                    if ( status == "error" ) {
                        var msg = "Sorry but there was an error: ";
                        $("#error").html(msg + xhr.status + " " + xhr.statusText);
                    }

                    if ( status == "success" ) {
                        $this.find('.modal-body .field-body').addClass('show');
                        $this.find('.modal-body .preloader').addClass('hide');
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



});
