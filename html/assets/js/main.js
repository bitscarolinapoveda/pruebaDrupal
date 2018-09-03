$(window).scroll(function() {
    if ($(".menu-scroll, .lines, .link").offset().top > 30) {
        $(".menu-scroll, .lines, .link").addClass("inverse-color color-scroll scroll-white");
    } else {
        $(".menu-scroll, .lines, .link").removeClass("inverse-color color-scroll scroll-white");
    }
});


$(window).scroll(function() {
    if ($(".image-bits").offset().top > 50) {
        $(".image-bits").attr("src", "assets/images/Logocolor.png");
    } else {
        $(".image-bits").attr("src", "assets/images/Logowhite.png");
    }
});

$(document).ready(function() {
    $(".Botton, .show-more").on("click", function() {
        $(".menu-scroll, .link, .show-more").toggleClass("tigger-menu scroll-white show-less");
    });
});


$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var footer = $("#limit-social-networks").offset();
        footer = footer.top;
        if (scroll >= footer) {
            $(".social-networks, .envolope").hide(0);
        } else {
            $(".social-networks, .envolope").show();
        }
    });
});

$(document).ready(function() {
    $(".Botton").on("click", function() {
        $(".blur-logo").toggleClass(function() {
                $(".blur-logo").attr("src", "assets/images/Logocolor.png");
            }

        )
    });
});




$(document).ready(function() {
    $('#down-main').click(function(e) {
        e.preventDefault();
        volver = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(volver).offset().top
        }, 1600);
    });
});


$(document).ready(function() {
    $(".carousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function() {
        $(this).carousel('next');
    })
});


var mediaquery = window.matchMedia("(max-width: 500px)");
if (mediaquery.matches) {
    $(function() {
        $('.envolope').hide(0);
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var footer = $("#limit-social-networks").offset();
            footer = footer.top;
            if (scroll >= 100) {
                $(".envolope").show();
            } else {
                $(".envolope").hide(0);
            }
            if (scroll >= footer) {
                $(".envolope").hide(0);
            } else {}
        });
    });
}

window.onload = function() {
    var E = document.getElementsByClassName("random");
    var m = E.length;
    var n = parseInt(Math.random() * m);
    for (var i = m - 1; i >= 0; i--) {
        var e = E[i];
        e.style.display = 'none';
    }
    E[n].style.display = '';
}

jQuery(function($) {
    if ($('#transition-image, #transition-image2').length) {
        var items = 4;
        var $elements = $('.img-item, .img-item2');

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
            array.sort(function(a, b) {
                if (a == b) return 0;
                return a > b ? 1 : -1;
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
            } else {
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

$(document).ready(function() {
    $('#recipeCarousel').carousel({
        interval: 4000
    })

    $('.carousel-run .carousel-item').each(function() {
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


$(document).ready(function() {
    $('.top-return').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 700);
    });
});

function alerta() {
    $('#alert-item1').modal('show');
};

function alerta2() {
    $('#alert-item2').modal('show');
};


$(window).scroll(function() {
    if ($(".top-return").offset().top > 750) {
        $(".top-return").addClass("movil-display");
    } else {
        $(".top-return").removeClass("movil-display");
    }
});

$(document).ready(function() {
    var mediaquery = window.matchMedia("(max-width: 500px)");
    if (mediaquery.matches) {
        $('.show-more').on('click', function(e) {
            $('.nav2').slideToggle('slow');
            e.preventDefault();
        });
    }
});

jQuery(function($) {
    $("body main #barra-url .list-bloque .content-botton .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {
                window.location.hash = hash;
            });
        }
    });
});

function valida(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros
    patron = /[A-Za-z0-9_ñÑáéíóúaÁÉÍÓÚ]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

jQuery(function($) {
    document.querySelector(".document #adjunto").onchange = function() {
        let ar = this.value.split('\\');
        if (ar.length > 0) {
            document.querySelector(".document #doc").innerHTML = ar[ar.length - 1];
        }
    };
});

// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}