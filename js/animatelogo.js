//sg
//A part of the function below was shamelessly copied by Aman Madaan from a stackoverflow answer-->

function rotate_elem(angle, id, animation_duration) {
    var $elem = $(id);

    $({deg: 0}).animate({deg: angle}, {
        duration: animation_duration,
        step: function(now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}

function shuffle(start_index, total_frames) {
    var imgs = new 
        Array("assets/img/gnulinuxfree.jpg",
            "assets/img/junta.jpg",
            "assets/img/github_logo.jpg", 
            "assets/img/final.jpg",  
            "assets/img/mozzila.jpg",
            "assets/img/ubuntu.jpg", 
            "assets/img/kde.jpg", 
            "assets/img/penguin.jpg", 
            "assets/img/fedora.jpg", 
            "assets/img/session2.jpg", 
            "assets/img/final2.jpg" );
    total_imgs =11;
    //total_frames != total_imgs
       
    for(var i = 1; i <= total_frames; i++) { 
        //alert(i);
        var frameid = "frame";
        var index = i.toString();
        frameid = frameid.concat(index);
        //alert(frameid);
        document.getElementById(frameid).src = imgs[start_index % total_imgs];
        start_index = start_index + 1;
    }
}
