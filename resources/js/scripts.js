$(document).ready(function() {
    
    /*Sticky navigation*/
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');   
        }
        else {
            $('nav').removeClass('sticky');
        }
        },{
            offset: '60px;'
    });
    
});

