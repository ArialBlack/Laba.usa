$(document).ready(function() {
    $('#myContainer').fullpage({
        sectionsColor: ['#ed545b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff', '#ccc'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
        menu: '#menu',
        //interlocked: [1, 3],
        //interlockedSlidesKey: 'YWx2YXJvdHJpZ28uY29tX0FVS2FXNTBaWEpzYjJOclpXUlRiR2xrWlhNPVFFNw==',
        slidesNavigation: true,
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log("slideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);

        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction){
            console.log("----------------");
            console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
        }
    });
});
