var owl = $('.owl-carousel');
owl.owlCarousel({

    responsive: {
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:9
        }
    },
    
    nav: false,
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    
    
    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
    
})

var owl = $('.owl-carousel');
owl.owlCarousel({

    responsive: {
        0:{
            item2:1
        },
        600:{
            item2:3
        },
        1000:{
            item2:9
        }
    },
    
    nav: false,
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    
    
    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
    
})



