   $(window).scroll(function () {
       if ($(".menu-scroll").offset().top > 20) {
           $(".menu-scroll").addClass("inverse-color");
       } else {
           $(".menu-scroll").removeClass("inverse-color");
       }
   });
    $(window).scroll(function () {
        if ($(".lines").offset().top > 54) {
            $(".lines").addClass("color-scroll");
        } else {
            $(".lines").removeClass("color-scroll");
        }
    });

    $(window).scroll(function () {
        if ($(".image-bits").offset().top > 50) {
            $(".image-bits").attr("src", "assets/images/Logocolor.png");
        } else {
            $(".image-bits").attr("src", "assets/images/Logowhite.png");
        }
    });

    $(document).ready(function () {
        $(".Botton").on("click", function () {
            $(".menu-scroll").toggleClass("tigger-menu");
        });
    });

    
    $(function() {
        $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var footer = $(".w").offset();
        footer = footer.top;
        if (scroll >= footer) {
            $(".social-networks").hide(0);
        } else {
            $(".social-networks").show();
        }
        });
    });
    
   
    $(function() {
        $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var footer = $(".w").offset();
        footer = footer.top;
        if (scroll >= footer) {
            $(".envolope").hide(0);
        } else {
            $(".envolope").show();
        }
        });
    });

    var mediaquery = window.matchMedia("(max-width: 500px)");
    if (mediaquery.matches) {
        $(function() {
            $('.envolope').hide(0);
            $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $(".envolope").show();
            } else {
                $(".envolope").hide(0);
            }
            });
        });
    }

    window.onload=function() {
        var E = document.getElementsByClassName("random");
        var m = E.length;
        var n = parseInt(Math.random()*m);
        for (var i=m-1;i>=0;i--) {
        var e = E[i];
        e.style.display='none';
        }
        E[n].style.display='';
    }

      
    
