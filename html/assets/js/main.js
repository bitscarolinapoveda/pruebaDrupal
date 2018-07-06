    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(".menu-scroll").offset().top > 20) {
                $(".menu-scroll").addClass("inverse-color");
            } else {
                $(".menu-scroll").removeClass("inverse-color");
            }
        });
    });   
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(".lines").offset().top > 54) {
                $(".lines").addClass("color-scroll");
            } else {
                $(".lines").removeClass("color-scroll");
            }
        });
    });    
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(".link").offset().top > 20) {
                $(".link").addClass("scroll-white");
            } else {
                $(".link").removeClass("scroll-white");
            }
        });
    });    
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(".image-bits").offset().top > 50) {
                $(".image-bits").attr("src", "assets/images/Logocolor.png");
            } else {
                $(".image-bits").attr("src", "assets/images/Logowhite.png");
            }
        });
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
    $(document).ready(function () {
        $(".Botton").on("click", function () {
            $(".link").toggleClass("scroll-white");
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
        E[n].style.display='';
        },1000);

    $(document).ready(function () {
        $('#down-main').click(function (e) {
            e.preventDefault();
            volver = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(volver).offset().top
            }, 2000);
        });
    });


    $(document).ready(function () {
        $(".carousel").swiperight(function () {
            $(this).carousel('prev');
        });
        $(".carousel").swipeleft(function () {
            $(this).carousel('next');
        })
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

$(document).ready(function () {
    $('#recipeCarousel').carousel({
        interval: 4000
    })

    $('.carousel-run .carousel-item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
});
 
