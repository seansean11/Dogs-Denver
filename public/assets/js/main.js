// --------------------------------------------------
// JS custom scripts
// --------------------------------------------------

var DENVERDOGS = (function() {

    function closest(el, fn) {
        while (el) {
            if (fn(el)) return el;
            el = el.parentNode;
        }
    }

    function noMasLinks(el) {
        el.addEventListener('click', function(e) {
            el.removeAttribute('href');
            el.classList.add('no-mas');
            setTimeout(function() {
                el.classList.remove('no-mas');
            }, 700);
        });
    }

    function XHRById(url, id, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = function() {
            if(xhr.status < 400 && xhr.status >= 200) {
                var doc = document.implementation.createHTMLDocument("xhr");
                doc.documentElement.innerHTML = xhr.responseText;
                var fragment = doc.getElementById(id);
                fn(fragment);
            } else {
                var error = JSON.parse(xhr.status);
                console.log(error);
            }

            xhr.onerror = function() {
                console.log(xhr.statusText);
            }
        };

    }

    this.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;

            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    this.stickyNav = function() {
        var hero = document.querySelector('.hero');
        var nav = document.getElementById('js-nav-main');

        var heroHeight = this.debounce(function() {
            var threshold = hero.offsetHeight - window.scrollY;
            if(threshold < 0 && !nav.classList.contains('is-shown')) {
                nav.classList.add('is-shown');
            } else if (threshold > 0 && nav.classList.contains('is-shown')) {
                nav.classList.remove('is-shown');
            }
        }, 250);

        window.addEventListener('scroll', heroHeight);
        window.addEventListener('resize', heroHeight);
    }

    this.carousel = function() {
        // Carousel selectors
        var parkGallery = document.getElementById('js-park-gallery');
        var childCount = parkGallery.children;

        // Initialize Flickity carousel if it has more than one image
        if (childCount > 1) {
            var flickity = new Flickity(parkGallery, {
                cellAlign: 'left',
                contain: true
            });
        }
    };

    this.fakeAjax = function() {
        var ajaxLinks = document.querySelectorAll('.js-ajax');

        if(ajaxLinks.length) {
            for(var i = 0;  ajaxLinks.length > i; i++) {

                ajaxLinks[i].addEventListener('click', function(e) {
                    var linkTarget = this.getAttribute('href');

                    if((linkTarget.indexOf("http") > -1)) {
                        document.body.classList.add('is-loading');
                        e.preventDefault();
                        setTimeout(function() {
                            window.location.href = linkTarget;
                        }, 500);
                    }

                });
            }

        }

    };

    this.infiniteLoad = function() {
        var newsGrid = document.getElementById('js-news__grid');
        var infiniteButton = document.getElementById('js-ajax-infinite');

        infiniteButton.addEventListener('click', function infiniteLoad(e) {
            infiniteButton.classList.add('is-busy');
            var ajaxUrl = infiniteButton.getAttribute('href');
            e.preventDefault();

            XHRById(ajaxUrl, 'news', function(data) {
                var articles = data.querySelectorAll('.news__item');
                var nextButton = data.querySelector('#js-ajax-infinite');

                if(nextButton) {
                    infiniteButton.setAttribute('href', nextButton.getAttribute('href'));
                } else {
                    infiniteButton.setAttribute('href', '');
                    infiniteButton.removeEventListener('click', infiniteLoad);
                    noMasLinks(infiniteButton);
                }

                for (var i = 0; i < articles.length; i++) {
                    newsGrid.appendChild(articles[i]);
                };

                setTimeout(function(){
                    infiniteButton.classList.remove('is-busy');
                }, 300);

            });

        });
    };

    this.fastClick = function() {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }

    this.autoScroll = function() {
        smoothScroll.init();
    };

    this.mapToggle = function() {
        var mapToggle = document.getElementById('js-map-toggle');
        var container = closest(mapToggle, function (el) {
            return el.className === 'park__images';
        });

        mapToggle.addEventListener('click', function(e) {
            container.classList.toggle('is-map');
            e.preventDefault();
        });
    };

    this.dogBark = function() {
            var barkAudio = document.getElementById('js-bark-audio');
            var barkHover = document.getElementById('js-bark-hover');

            barkHover.addEventListener('mouseover', function() {
                barkAudio.play();
            });
    };

    this.mobileNav = function() {
        var nav = document.getElementById('js-nav-main');
        var navBtn = document.getElementById('js-mobile-nav');
        var navLinks = nav.querySelectorAll('a');

        navBtn.addEventListener('click', function(e) {
            nav.classList.toggle('mobile-active');
            this.classList.toggle('is-open');
            e.preventDefault();
        });

        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function() {
                nav.classList.remove('mobile-active');
                navBtn.classList.remove('is-open');
            });
        };
    };

    this.init = function() {
        this.debounce();
        this.stickyNav();
        this.carousel();
        this.fakeAjax();
        this.infiniteLoad();
        this.fastClick();
        this.autoScroll();
        this.mapToggle();
        this.dogBark();
        this.mobileNav();
    };

    return this;

})();

// Init the scripts
DENVERDOGS.init();



// --------------------------------------------------
// Google Maps - must be outside of IIFE to access window object
// --------------------------------------------------

function initialize() {
    var parkLatlng = new google.maps.LatLng(39.741049,-104.958437);
    var mapOptions = {
        zoom: 15,
        center: parkLatlng,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('js-park-map'),mapOptions);

    // Add the map marker
    var marker = new google.maps.Marker({
            position: parkLatlng,
            map: map,
            title: 'Josephine Gardens Dog Park'
    });

    var responsiveMap = DENVERDOGS.debounce(function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    }, 250);

    google.maps.event.addDomListener(window, "resize", responsiveMap);
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript;