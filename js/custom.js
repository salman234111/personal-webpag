$(function (){
    
//=============nav bar js============//
    $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('navbg');
    }
        else{
            $('.navbar').removeClass('navbg');
        }
});
    
    
    
    
    
/*====================================== Mixit-up ========================================*/

    var mixer = mixitup('.portfolio-item',{
	animation:{
		effectsOut:'fade translateX(-100%)',
	}
});


    
    
    
//================countact=========//
    
    
jQuery(".player").YTPlayer();

//============video===========//
     $('.venobox').venobox(); 
    
// ==========back to top==========//
    $('.back-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2500);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.back-top').fadeIn(500);

        } else {
            $('.back-top').fadeOut(500);
        }
    });
    
//================== typed part==============// 
    $(".typed").typed({
        strings: ["Graphic Design.", "Web Design.", "Web development.", "Complete diploma,","national polytechnic."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
   
//====================feedback===========//
    $('.Testimonial-slid').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    /*arrows: true,
    prevArrow:'.left',
    nextArrow:'.right',*/
    autoplaySpeed: 2500,
});

    
    

// ===========exprence==============//
    $('.skill_par').each(function(){
        var $this = $(this);
        var par = $this.attr('par');
        $this.css("width",par+'%');
        $({animatedValue: 0}).animate({animatedValue: par},{
          duration: 1000,
          step: function(){
            $this.attr('par', Math.floor(this.animatedValue) + '%');
          },
          complete: function(){
            $this.attr('par', Math.floor(this.animatedValue) + '%');
          }
        });
      });

    


//==========================prelodre==========================//
$(window).on('load',function(){
    $('.se-pre-con').delay(1500).fadeOut(1000);
});
    
    




//============animation scroll js================//
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });

    
// ===================Closes responsive menu when a scroll link is clicked=========//
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
//============== wow js===========// 
    new WOW().init();

/*====================================== COLOR SCHEMES ========================================*/


$(".option").on("click", function () {
    $(".styles").toggleClass("open");
});

$("body").on("click", function (o) {
    $(o.target).closest(".styles").length || $(".styles").removeClass("open");
});

$(".style1").on("click", function () {
    $("#color").attr("href", "css/color1/style1.css");
});

$(".style2").on("click", function () {
    $("#color").attr("href", "css/color1/style2.css");
});

$(".style3").on("click", function () {
    $("#color").attr("href", "css/color1/style3.css");
});

$(".style4").on("click", function () {
    $("#color").attr("href", "css/color1/style4.css");
});

$(".default").on("click", function () {
    $("#color").attr("href", "css/color1/default.css");
});
$(".style5").on("click", function () {
    $("#color").attr("href", "css/color1/style5.css");
});

//============efact================//
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
    
    
    
    
   particlesJS('particles-js',
  
{
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 0,
          "height": 0
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
//=============end===========//
});
