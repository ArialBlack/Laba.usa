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
});
