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

   $(document).ready(function () {
        $(".Botton").on("click", function () {
            $(".blur-logo").toggleClass(function () {
                 $(".blur-logo").attr("src", "assets/images/Logocolor.png");
            }

            )
        });
    });

    setInterval(function(){
        var E=document.getElementsByClassName("random");
        var m=E.length;
        var n=parseInt(Math.random()*m);for(var i=m-1;i>=0;i--){
        var e=E[i];e.style.display='none';
        }
        E[n].style.display='';
        },1000);
