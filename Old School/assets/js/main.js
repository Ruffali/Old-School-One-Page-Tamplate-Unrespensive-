    
$(document).ready(function () {
    // Coursels Starts

    var owl = document.querySelectorAll("#overWelcome .owl-dots .owl-dot span");
    for (var i = 0; i < owl.length; i++) {
        owl[i].addEventListener("click", function () {
            alert()
        })
    }
    $('#overWelcome .owl-carousel').owlCarousel({
        // animateIn: "fadeIn",
        // animateOut: "fadeOut",
        loop: true,
        // margin: 10,
        // nav:true,
        // center:true,
        autoplayTimeout: 3000,
        autoplay: true,
        // autoplaySpeed:true,
        smartSpeed: 1500,
        dotsEach:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



    $('#overWelcome .owl-carousel').on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;    
        $('.content').removeClass('animation');
        $('.owl-item').not('.cloned').eq(item).find('.content').addClass('animation');
    });

    var owl = $('#overWelcome .owl-carousel');

    $("#overWelcome .owl-carousel .item .content .click a i").click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Coursels End


// isotope Start
$('#yellowPart .container .row .col-md-12 .isoTop .container .horizontalNavbar li:nth-child(1) a').addClass("actives");
$('#yellowPart .container .row .col-md-12 .isoTop .container .horizontalNavbar li a').click(function(){
    $('#yellowPart .container .row .col-md-12 .isoTop .container .horizontalNavbar li a').removeClass('actives');
    $(this).addClass('actives');
})
$('.all').click(function(){
    var allDivs = $('.mainDivs');
    allDivs.each(function(){
        if($(this).attr('data-isoTop').indexOf(1) != -1){
            $(this).show()
        }else if(($(this).attr('data-isoTop').indexOf(1) == -1)){
            $(this).hide()
        }   
    })
})
$('.cities').click(function(){
    var allDivs = $('.mainDivs');
    allDivs.each(function(){
        if($(this).attr('data-isoTop').indexOf(2) != -1){
            $(this).show()
        }else if(($(this).attr('data-isoTop').indexOf(2) == -1)){
            $(this).hide()
        }   
    })
})
$('.nature').click(function(){
    var allDivs = $('.mainDivs');
    allDivs.each(function(){
        if($(this).attr('data-isoTop').indexOf(3) != -1){
            $(this).show()
        }else if(($(this).attr('data-isoTop').indexOf(3) == -1)){
            $(this).hide()
        }   
    })
})
$('.industrial').click(function(){
    var allDivs = $('.mainDivs');
    allDivs.each(function(){
        if($(this).attr('data-isoTop').indexOf(4) != -1){
            $(this).show()
        }else if(($(this).attr('data-isoTop').indexOf(4) == -1)){
            $(this).hide()
        }   
    })
})
$('.daylight').click(function(){
    var allDivs = $('.mainDivs');
    allDivs.each(function(){
        if($(this).attr('data-isoTop').indexOf(5) != -1){
            $(this).show()
        }else if(($(this).attr('data-isoTop').indexOf(5) == -1)){
            $(this).hide()
        }   
    })
})
$('.nightspace').click(function(){
    var allDivs = $('.mainDivs');
    allDivs.each(function(){
        if($(this).attr('data-isoTop').indexOf(6) != -1){
            $(this).show()
        }else if(($(this).attr('data-isoTop').indexOf(6) == -1)){
            $(this).hide()
        }   
    })
})

var clickA = $("#yellowPart .container .row .col-md-12 .isoTop .container .horizontalNavbar li .top");
clickA.click(function(e){
    e.preventDefault();
})
// isotope End

    // Icon Coursels Starts

    var owl = document.querySelectorAll("#service .owl-dots .owl-dot span");
    for (var i = 0; i < owl.length; i++) {
        owl[i].addEventListener("click", function () {
            alert()
        })
    }
    $('#service .owl-carousel').owlCarousel({
        // animateIn: "fadeIn",
        // animateOut: "fadeOut",
        loop: true,
        // margin: 10,
        // nav:true,
        // center:true,
        autoplayTimeout: 3000,
        autoplay: true,
        // autoplaySpeed:true,
        smartSpeed: 1500,
        dotsEach:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 5
            }
        }
    })



    $('#service .owl-carousel').on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;    
        $('.content').removeClass('animation');
        $('.owl-item').not('.cloned').eq(item).find('.content').addClass('animation');
    });

    var owl = $('#service .owl-carousel');

    $("#service  #overWelcome .owl-carousel .item .content .click a i").click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Icon Coursels End

  // scroll
  if($(window).scrollTop()<400){
    $("#up").hide()
}

$(window).scroll(function(){
    if($(this).scrollTop()>300){
        $("#up").fadeIn(1000);
    }else{
        $("#up").fadeOut(1000);
    }
});

$("#up").click(function(){
    $("html, body").animate({scrollTop : 0},2000);
    return false;
})
// scroll-end


// NAVBAR-SCROLL
$('#navbar .container .row .col-md-4:nth-child(1) .navbarContent ul li:nth-child(1)').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
    return false;
});
$('#navbar .container .row .col-md-4:nth-child(1) .navbarContent ul li:nth-child(2)').click(function(){
    $("html, body").animate({scrollTop: 1154 }, 1000)
})
$('#navbar .container .row .col-md-4:nth-child(1) .navbarContent ul li:nth-child(3)').click(function(){
    $("html, body").animate({scrollTop: 2648 }, 1000)
})
$('#navbar .container .row .col-md-4:nth-child(3) .navbarContent ul li:nth-child(1)').click(function(){
    $("html, body").animate({scrollTop: 4049 }, 1000)
})

$('#navbar .container .row .col-md-4:nth-child(3) .navbarContent ul li:nth-child(2)').click(function(){
    $("html, body").animate({scrollTop: 5572 }, 1000)
})

$('#navbar .container .row .col-md-4:nth-child(3) .navbarContent ul li:nth-child(3)').click(function(){
    $("html, body").animate({scrollTop: 7690 }, 1000)
})

// 

// NAVBAR SCROLL-END

$(window).scroll(function(){
    var scrollsize = window.scrollY;
    console.log(scrollsize)
})
});


