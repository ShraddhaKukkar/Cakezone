$('[data-toggle="counter"]').counterUp({
    delay: 10,
    time: 2000
});

$(".counter").counterUp({ delay: 10, time:3000});

$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 45,
    dots: true,
    loop: true,
    center: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});
