//==== fixed menu start ====//

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".menu").addClass("fixed")
  } else {
    $(".menu").removeClass("fixed")
  }

})

//==== fixed menu end ====//




//==== banner slider start ====//

$('.banner_side').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-left prev"></i>',
  nextArrow: '<i class="fas fa-chevron-right next"></i>',
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//==== banner slider end ====//

//==== arctext part start ====//

$(".round").arctext({
  radius: 500,

})

//==== arctext part end ====//

//==== venobox part start ====//

$(document).ready(function () {
  $('.venobox').venobox();
});

//==== venobox part end ====//

//==== counter part start ====//

// Set the date we're counting down to
var countDownDate = new Date("Nov 10, 2021").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days
  document.getElementById("hour").innerHTML = hours
  document.getElementById("min").innerHTML = minutes
  document.getElementById("sec").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//==== counter part end ====//

//==== team part start ====//

$('.team-slider').slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//==== team part end ====//

//==== gallery part start ====//

$('.gallery-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//==== gallery part end ====//

//==== testimonial part start ====//

$('.test-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-left prev"></i>',
  nextArrow: '<i class="fas fa-chevron-right next"></i>',
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//==== testimonial part end ====//

//==== counter up part start ====//

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

//==== counter up part end ====//

//==== pulse hover part start ====//

$(function () {
  $(".pulse").hover(function () {
    $(this).removeClass("pulse");
  }, function () {
    $(this).addClass("pulse");
  });
});
$(function () {
  $(".pulse").hover(function () {
    $(this).removeClass("pulse");
  }, function () {
    $(this).addClass("pulse");
  });
});

//==== pulse hover part end ====//