! async function(a) {
    "use strict";
    var e = a(".header__content").attr("data-page-url"),
        t = document.title,
        o = window.History,
        n = a(".page__content").attr("data-image");
    function i() {
        a(".header-image").imagesLoaded({
            background: !0
        }, function() {
            a("body").removeClass("loading"), a("body").removeClass("menu--open")
        }), a(".active-link").removeClass("active-link"), a('a[href="' + e + '"]').addClass("active-link"), Waypoint.destroyAll();
        var t = 0;
        a(".gallery").each(function() {
            var e = a(this),
                o = "gallery-" + ++t;
            e.attr("id", o);
            var n = e.attr("data-columns");
            e.append('<div class="gallery__wrap"></div>'), e.children("img").each(function() {
                a(this).appendTo("#" + o + " .gallery__wrap")
            }), e.find(".gallery__wrap img").each(function() {
                var e = a(this).attr("src");
                a(this).wrapAll('<div class="gallery__item"><a href="' + e + '" class="gallery__item__link"></div></div>').appendTo()
            }), e.imagesLoaded(function() {
                if ("1" === n) {
                    e.addClass("gallery--carousel"), e.children(".gallery__wrap").addClass("owl-carousel"), e.children(".gallery__wrap").owlCarousel({
                        items: 1,
                        loop: !0,
                        mouseDrag: !1,
                        touchDrag: !0,
                        pullDrag: !1,
                        dots: !0,
                        autoplay: !1,
                        autoplayTimeout: 6e3,
                        autoHeight: !0,
                        animateOut: "fadeOut"
                    });
                    new Waypoint({
                        element: document.getElementById(o),
                        handler: function(a) {
                            "down" === a && e.children(".gallery__wrap").trigger("stop.owl.autoplay"), "up" === a && e.children(".gallery__wrap").trigger("play.owl.autoplay")
                        },
                        offset: "-100%"
                    }), new Waypoint({
                        element: document.getElementById(o),
                        handler: function(a) {
                            "down" === a && e.children(".gallery__wrap").trigger("play.owl.autoplay"), "up" === a && e.children(".gallery__wrap").trigger("stop.owl.autoplay")
                        },
                        offset: "100%"
                    })
                } else e.addClass("gallery--grid"), e.children(".gallery__wrap").masonry({
                    itemSelector: ".gallery__item",
                    transitionDuration: 0
                }), e.find(".gallery__item__link").fluidbox({
                    loader: !0
                });
                e.addClass("gallery--on")
            })
        }), a(".single p > img").each(function() {
            var e = a(this).parent("p");
            a(this).insertAfter(e), a(this).wrapAll('<div class="image-wrap"></div>'), e.remove()
        }), a(".single iframe").each(function() {
            if (a(this).attr("src").indexOf("youtube") >= 0 || a(this).attr("src").indexOf("vimeo") >= 0) {
                var e = a(this).attr("width"),
                    t = a(this).attr("height") / e * 100;
                a(this).wrapAll('<div class="video-wrap"><div class="video" style="padding-bottom:' + t + '%;"></div></div>')
            }
        }), a(".single table").each(function() {
            a(this).wrapAll('<div class="table-wrap"></div>')
        })
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await sleep(200)
    o.Adapter.bind(window, "statechange", function() {
        var l = o.getState();
        a("body").addClass("loading"), a(".page-loader").load(l.hash + " .page__content", function() {
            setTimeout(function() {
                a("body, html").animate({
                    scrollTop: 0
                }, 0), a(".page .page__content").remove(), a(".page-loader .page__content").appendTo(".page"), a(".header__content").attr("data-page-url", window.location.pathname), e = a(".header__content").attr("data-page-url"), t = a(".page__content").attr("data-page-title"), document.title = t;
                var o = a(".page__content").attr("data-image");
                i(), o !== n && (n = o, a(".header-image:not(.header-image--on)").css("background-image", "url(" + n + ")"), a(".header-image:not(.header-image--on)").addClass("header-image--switch"), a(".header-image--switch").imagesLoaded({
                    background: !0
                }, function() {
                    a(".header-image--on").removeClass("header-image--on"), a(".header-image--switch").addClass("header-image--on"), a(".header-image--switch").removeClass("header-image--switch")
                }))
            }, 400)
        })
    }), a("body").hasClass("ajax-loading") && a(document).on("click", "a", function(n) {
        n.preventDefault();
        var i = a(this).attr("href");
        a(this).hasClass("js-no-ajax") || i.indexOf("#") >= 0 || i.indexOf("mailto:") >= 0 || i.indexOf("tel:") >= 0 ? window.location = i : a(this).is(".gallery__item__link") || (i.indexOf("http") >= 0 ? window.open(i, "_blank") : (e = i, o.pushState(null, t, i)))
    }), i(), a(document).on("click", ".js-menu-toggle", function() {
        a("body").hasClass("menu--open") ? a("body").removeClass("menu--open") : a("body").addClass("menu--open")
    }), a(document).on("click", ".menu__list__item__link", function() {
        a(".menu").hasClass("menu--open") && a(".menu").removeClass("menu--open")
    }), a(document).on("submit", "#contact-form", function(e) {
        a(".contact-form__item--error").removeClass("contact-form__item--error");
        var t = a('.contact-form__input[name="email"]'),
            o = a('.contact-form__input[name="name"]'),
            n = a('.contact-form__textarea[name="message"]'),
            i = a(".contact-form__gotcha");
        "" === t.val() && t.closest(".contact-form__item").addClass("contact-form__item--error"), "" === o.val() && o.closest(".contact-form__item").addClass("contact-form__item--error"), "" === n.val() && n.closest(".contact-form__item").addClass("contact-form__item--error"), "" !== t.val() && "" !== o.val() && "" !== n.val() && 0 === i.val().length || e.preventDefault()
    })
}(jQuery);