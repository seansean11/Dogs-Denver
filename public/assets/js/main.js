// --------------------------------------------------
// UTILITY SCRIPTS
// --------------------------------------------------
var U = (function() {

    function closest(el, fn) {
        while (el) {
            if (fn(el)) return el;
            el = el.parentNode;
        }
    }

    function mobileCheck() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
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

    function debounce(func, wait, immediate) {
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

    return {
        closest: closest,
        mobileCheck: mobileCheck,
        noMasLinks: noMasLinks,
        XHRById: XHRById,
        debounce: debounce
    };
})();

// --------------------------------------------------
// FUNCTIONALITY SCRIPTS
// --------------------------------------------------
var DENVERDOGS = (function() {

    function stickyNav() {
        var hero = document.querySelector('.hero');
        var nav = document.getElementById('js-nav-main');

        var heroHeight = U.debounce(function() {
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

    function carousel() {
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
    }

    function fakeAjax() {
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

    }

    function infiniteLoad() {
        var newsGrid = document.getElementById('js-news__grid');
        var infiniteButton = document.getElementById('js-ajax-infinite');

        if(infiniteButton) {
            infiniteButton.addEventListener('click', function infiniteLoad(e) {
                infiniteButton.classList.add('is-busy');
                var ajaxUrl = infiniteButton.getAttribute('href');
                e.preventDefault();

                U.XHRById(ajaxUrl, 'news', function(data) {
                    var articles = data.querySelectorAll('.news__item');
                    var nextButton = data.querySelector('#js-ajax-infinite');

                    if(nextButton) {
                        infiniteButton.setAttribute('href', nextButton.getAttribute('href'));
                    } else {
                        infiniteButton.setAttribute('href', '');
                        infiniteButton.removeEventListener('click', infiniteLoad);
                        U.noMasLinks(infiniteButton);
                    }

                    for (var i = 0; i < articles.length; i++) {
                        newsGrid.appendChild(articles[i]);
                    };

                    setTimeout(function(){
                        infiniteButton.classList.remove('is-busy');
                    }, 300);

                });

            });
        }
    }

    function fastClick() {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }

    function autoScroll() {
        smoothScroll.init();
    }

    function mapToggle() {
        var mapToggle = document.getElementById('js-map-toggle');
        var container = U.closest(mapToggle, function (el) {
            return el.className === 'park__images';
        });

        mapToggle.addEventListener('click', function(e) {
            container.classList.toggle('is-map');
            e.preventDefault();
        });
    }

    function dogBark() {
        var barkAudio = document.getElementById('js-bark-audio');
        var barkHover = document.getElementById('js-bark-hover');

        barkHover.addEventListener('mouseover', function() {
            barkAudio.play();
        });
    }

    function mobileNav() {
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

    function init() {
        stickyNav();
        carousel();
        fakeAjax();
        infiniteLoad();
        fastClick();
        autoScroll();
        mapToggle();
        dogBark();
        mobileNav();
    };

    init();
})();

// --------------------------------------------------
// GOOGLE MAPS - must be outside of IIFE to access window object
// --------------------------------------------------

var MAP = {
    el: document.getElementById('js-park-map'),
    lat: 39.741049,
    long: -104.958437,
    zoom: 15,
    width: 719,
    height: 463
};

if(!U.mobileCheck()) {

    // clear image
    MAP.el.innerHTML = '';

    function initialize() {
        var parkLatlng = new google.maps.LatLng(MAP.lat, MAP.long);
        var mapOptions = {
            zoom: MAP.zoom,
            center: parkLatlng,
            scrollwheel: false
        };

        var map = new google.maps.Map(MAP.el,mapOptions);

        // Add the map marker
        var marker = new google.maps.Marker({
                position: parkLatlng,
                map: map,
                title: 'Josephine Gardens Dog Park'
        });

        var responsiveMap = U.debounce(function() {
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
}