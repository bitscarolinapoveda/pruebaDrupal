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
        });
    });

    $(document).ready(function () {
        $('#down-main').click(function (e) {
            e.preventDefault();
            volver = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(volver).offset().top
            }, 1600);
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


    var mediaquery = window.matchMedia("(max-width: 500px)");
    if (mediaquery.matches) {
        $(function() {
            $('.envolope').hide(0);
            $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var footer = $("#transition-image2").offset();
            footer = footer.top;
            if (scroll >= 100) {
                $(".envolope").show();
            } else {
                $(".envolope").hide(0);
            }
            if (scroll >= footer){
                $(".envolope").hide(0);
            }else{
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

    jQuery (function ($) {
        if ($('#transition-image').length) {
            var items = 4;
            var $elements = $('.img-item');
    
            var groups = createGroups($elements, items);
            var groups = completeGroup(groups, items);
            startSlide(groups, items);
        }

        if ($('#transition-image2').length) {
            var items = 4;
            var $elements = $('.img-item2');
    
            var groups = createGroups($elements, items);
            var groups = completeGroup(groups, items);
            startSlide(groups, items);
        } 
    
        function createGroups($elements, numberItems) {
            var elems = {};
            var group = 1;
            var item = 0;
            elems[group] = [];
    
            $.each($elements, function(key, value) {
                var elemId = $(this).prop('id');
                elems[group][item] = elemId;
                item++;
    
                if (((key + 1) % numberItems) == 0) {
                    item = 0;
                    group++;
                    elems[group] = [];
                }
            });
    
            return elems;
        }
    
        function completeGroup(elems, numberItems) {
            $.each(elems, function(key, currentElem) {
                var count = 0;
                $.each(currentElem, function(k, v) {
                    count++;
                });
    
                if ((count % numberItems) > 0) {
                    var iter = numberItems - count;
                    var pos = count;
                    var c = 0;
    
                    $.each(elems, function(a, b) {
                        $.each(b, function(item, v) {
                            if (c < iter) {
                                elems[key][pos] = v;
                                pos++;
                            }
                            c++;
                        });
                    });
                }
            });

            $.each(elems, function(key, array) {
                array.sort(function(a, b){
                    if(a== b) return 0;
                    return a> b? 1: -1;
                });
            });
    
            return elems;
        }
    
        function startSlide(elems, numberItems) {
            var slide = 1;
            var itemSlide = 0;
            var oper = 'show';
            var interval = setInterval(function() {
                if (itemSlide < numberItems && oper == 'show') {
                    var elemId = elems[slide][itemSlide];
                    var $elem = $('#' + elemId);
                    $elem.addClass('fadeInUp displayed').removeClass('fadeOutUp no-displayed').css('display', 'block');
                    itemSlide++;
                }
                else {
                    oper = 'remove';
                    if (((itemSlide) % numberItems) == 0) {
                        itemSlide = 0;
                    }
                    var elemId = elems[slide][itemSlide];
                    var $elem = $('#' + elemId);
                    $elem.addClass('fadeOutUp').removeClass('fadeInUp');
                    itemSlide++;
                    if (itemSlide == numberItems) {
                        oper = 'show';
                        itemSlide = 0;
                        slide++;
    
                        if (elems[slide] == undefined) {
                            slide = 1;
                        }
                        $('.displayed').css('display', 'none').removeClass('displayed').addClass('no-displayed');
                    }
                }
            }, 500);
        }
    
    });
    
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




