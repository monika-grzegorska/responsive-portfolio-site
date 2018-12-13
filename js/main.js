
$(document).ready(function () {
    var addHideNavbarHandlerToTogglerMenu = function () {
        $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });
    }
    //stars

    particlesJS("particles-JS", {
        "particles": {
            "number": {
                "value": 700,
                "density": {
                    "enable": false,
                    "value_area": 789.1476416322727
                }
            },
            "color": {
                "value": "#5bc0de"
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
                    "width": 150,
                    "height": 150
                }
            },
            "opacity": {
                "value": 0.48927153781200905,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 0.7,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 3,
                    "size_min": 0,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "div",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
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
                    "distance": 83.91608391608392,
                    "size": 1,
                    "duration": 3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
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
        "interactive": true
    });

    // balls

    TweenMax.staggerFrom('.ball', 6, {
        x: 200,
        scale: 0.8,
        opacity: 0,
        ease: Elastic.easeOut,
        repeat: 30,

    }, 0.1);

    //projects- changing kursor

    Array.prototype.forEach.call(document.querySelectorAll('.project'), function (media) {

        const circle = document.querySelector("." + media.getAttribute('data-circle'));
        TweenMax.set(circle, { scale: 0, xPercent: -50, yPercent: -50 });

        media.addEventListener("pointerenter", function (e) {
            TweenMax.to(circle, 0.3, { scale: 1, opacity: 1 });
            positionCircle(e, media, circle);
        });

        media.addEventListener("pointerleave", function (e) {
            TweenMax.to(circle, 0.3, { scale: 0, opacity: 0 });
            positionCircle(e, media, circle);
        });

        media.addEventListener("pointermove", function (e) {
            positionCircle(e, media, circle);
        });

    });

    function positionCircle(e, media, circle) {
        var rect = media.getBoundingClientRect();
        var relX = e.pageX - rect.left;
        var relY = e.pageY - rect.top - window.scrollY;
        TweenMax.to(circle, 0.15, { x: relX, y: relY });
    }

    // navigation apearing

    var timeline = new TimelineMax();
    timeline.from(".logo", 1, { x: -100, opacity: 0 }, 0)
        .from(".logo-title", 1, { x: -100, opacity: 0 }, 0)
        .from(".site-name", 1, { y: -100, opacity: 0 }, 0)
        .from(".lead", 1, { y: 100, opacity: 0 }, 0)
        .from(".site-navigation", 2, { x: 100, opacity: 0 });

    // loading page


        addHideNavbarHandlerToTogglerMenu();
});
