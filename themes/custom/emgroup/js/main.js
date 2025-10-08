// Fetch Jobs
function fetchjob() {
    if (!window.location.pathname.includes('careers')) {
        return false;
    }
    var settings = {
        "url": "https://api.zwayam.com/core/v1/jobs/?page_number=4&careersite_enabled=true",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "accept": "application/json",
            "api_key": "yyt1hw_3ab00146b671dc460664620b1c9d54505aec1716bd59909b18e836ef0a9d779d52bf0fdd94bf87427c26838af5f170ee6adc616a74ad9d6146afef7f3a0fec94",
            "Cookie": "ak_bmsc=1BF7205BC058A446F553A422F94832F0~000000000000000000000000000000~YAAQlnUsMc2+n3mJAQAAbXdwkBTn1+RDMLaN0LbGkqY8XlzabC1Y4lg7P5dA+x7yLA1fdUHADq32lrfid417Nuod8OFduoMOOyTEHld5xSwLX//u+yuP508D3xqAJtFSPCtbzvqJGFi3SAC6EvKF/6Iuwb8nAvSRpk/FUrSMxjqRo6ksrnBw9ojvrfT5Uujus9nX3KmsXF70TYV2OTlB9/xWXEQsUW8/ovO9WjJzc6hf/jPdNr+5WlWDomWtwut4OzjAAKbxW6j3TL1cCY7/F6EStWhK2yzpDqWXFer/WnBamu1sxAmRGC8+vDxqApzY441dA7rEGuiyUOv46n0zMY/d7vG0BZuowZqNSLKqHgA6ZGoFdYe6sLa7ew4="
        },
    };

    $.ajax(settings).done(function(response) {
        //console.log(response);

        $.each(response.data, function(index, item) {
            console.log("Job", item);
            $("#jobs_listing").append("<div class='accordion-body'><div class='row align-items-center mb-3'><div class='col-md-10' data-aos='fade-right' data-aos-delay='100'><div class='job-tittle'><h6>" + item.jobTitle + "</h6><p>" + item.location + "</p></div></div><div class='col-md-2' data-aos='fade-right' data-aos-delay='200'><div class='job-applynow'><a href='https://careers.eaplworld.com/#!/job-view/" + item.jobUrl + "' class='btn btn-custom btn-black' target='_blank'>Apply Now<img src='/emgroup/themes/custom/emgroup/images/arrow-right-blk.png' class='img-fluid' alt=''></a></div></div></div><div class='job-description-para' data-aos='fade-up' data-aos-delay='300'>" + item.role + "</div></div>");
        });

    });
}

$('.equipment-slider').slick({
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$(".blogHead").each(function() {
    var el = $(this),
        className = el.attr("id");
    $('header').addClass('header-static');
});

// Main home page slider code
$('.slider-for').slick({
    slidesToShow: 1,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    centerMode: true,
    focusOnSelect: true
});
// $('.life-slider').slick({
//   infinite: true,
//   dots: false,
//   arrows: false,
//   slidesToShow: 1,
//   slidesToScroll: 1
// });


$('.empowering-items').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    slidesToScroll: 1
});

$('.top-slider').slick({
    infinite: true,
    pauseOnHover: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    slidesToScroll: 1
});

// Search Bar
$(".search-wrap").click(function() {
    $(".search-bar").toggleClass("active");
    $(this).toggleClass("open");
});


// Video Popup
$(document).ready(function() {
    $(".popup-link").magnificPopup({
        type: 'image',
    });

    $(".popup-gallery").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.magnific-mix-gallery').each(function() {
        var $container = $(this);
        var $imageLinks = $container.find('.item');

        var items = [];
        $imageLinks.each(function() {
            var $item = $(this);
            var type = 'image';
            if ($item.hasClass('magnific-iframe')) {
                type = 'iframe';
            }
            var magItem = {
                src: $item.attr('href'),
                type: type
            };
            magItem.title = $item.data('title');
            items.push(magItem);
        });

        $imageLinks.magnificPopup({
            mainClass: 'mfp-fade',
            items: items,
            gallery: {
                enabled: true,
                tPrev: $(this).data('prev-text'),
                tNext: $(this).data('next-text')
            },
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                    var index = $imageLinks.index(this.st.el);
                    if (-1 !== index) {
                        this.goTo(index);
                    }
                }
            }
        });
    });
    // Video Popup


    $(document).ready(function() {

        // Corporate Governance page
        $('ul.investor li').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('ul.investor li').removeClass('current');
            $('.investor-content .investor-tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });


        $('ul.store li a').click(function() {

            var tab_id = $(this).attr('href');
            $('ul.store li').removeClass('current');
            $('.store-content .tab-content').removeClass('current');
            $(this).parent().parent().addClass('current');
            $(tab_id + '.tab-content').addClass('current');
        });
        // Manufacture page
        if (location.hash) {
            $(location.hash + '.tab-content').addClass('current');
            $(location.hash + '.tab-link').addClass('current');
        } else {
            $('.store li:first-child').addClass('current');
            $('.store-content .tab-content:first-child').addClass('current');
        }

        // Our Business page
        $('.soltion-wrap .col-cs-3').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('.soltion-wrap .col-cs-3').removeClass('current');
            $('.manage-wrap .manage-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });

        // solution page slider
        $('.product-slider').slick({
            arrows: false,
            slidesToShow: 4,
            aotoplay: true,
            infinite: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.center').slick({
            centerMode: true,
            centerPadding: '240px',
            slidesToShow: 1,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '140px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

    })

    // if ($(window).width() <= 991) {
    //   // Footer accodian
    //   $('.footer-link h4').click(function () {
    //     $(this).parent().parent().siblings().find('ul').slideUp(250);
    //     $(this).next('ul').slideToggle(250);
    //     $(this).parent().parent().siblings().find('h4').removeClass('child-open');
    //     $(this).toggleClass('child-open');
    //   });
    // }

    // Animation all Pages
    AOS.init({
        duration: 1200,
        once: true,
        offset: -80
    });

    // header fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 60) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    // Number Counter
    $('.counter').countUp();
    timeline(document.querySelectorAll('.timeline'), {
        forceVerticalMode: 700,
        mode: 'horizontal',
        verticalStartPosition: 'left',
        visibleItems: 3
    });

});


$('.slider-for-use').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-navigation'
});
$('.slider-navigation').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for-use',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});


// For history page
$(window).on('load', function() {
    AOS.init({
        duration: 600,
        once: true
    });
    $('.slider-for-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        asNavFor: '.slider-nav-year'
    });

    $('.slider-nav-year').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for-content',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });

    const slider2 = $(".slider-for-content");
    slider2.on('wheel', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));
    AOS.refresh();

});
// End history page

$(document).ready(function() {
    $('.soltion-box div').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('.soltion-box div').removeClass('active');
        $('.block-business-box .business-row').removeClass('active');
        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });

    //Partner Resources Hub//
    $('.dl-store>li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('.dl-store>li').removeClass('current');
        $('.dl-store-content .dl-tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    $('ul.partner-store>li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('ul.partner-store>li').removeClass('current');
        $('.partner-store-content .partner-tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    $(".ps-1>li").click(function() {
        $("html, body").animate({
            scrollTop: $("#partner-store-content").offset().top - 100
        }, 1000); // Adjust time in ms for scroll speed
    });

    $(".ps-2>li").click(function() {
        $("html, body").animate({
            scrollTop: $("#partner-store-content2").offset().top - 100
        }, 1000); // Adjust time in ms for scroll speed
    });


    // Video for CSR Page
    $('.csr-video').slick({
        centerMode: true,
        arrows: false,
        dots: false,
        centerPadding: '90px',
        slidesToShow: 1
    });

    // Csr Activity For CSR Page
    $('.csr-activity').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1
    });

    $('.csr-img').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        pauseOnHover: false,
        slidesToShow: 1
    });


    // Bottom Slider For CSR Page
    $('.csr-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '90px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

});

$(window).on('load', function() {
    AOS.refresh();
});

// Images Load more on About Page
$(document).ready(function() {
    const maxLoad = 2

    function showEl(el) {
        return el.removeClass('hidden')
    }

    function showE(e) {
        return e.addClass('hidden')
    }

    $('.profile-row>div').each(function(index) {
        index < maxLoad ?
            showEl($(this)) : null
    })

    $(document).on('click', '#loadAllImages', function() {
        $("#loadAllImages").html("Less" + '<img src="/themes/custom/emgroup/images/arrow-bottom.png" class="img-fluid" alt="">');
        $("#loadAllImages").attr('id', 'closeimage');

        $('.profile-row>div').each(function() {
            showEl($(this))
        })
    });

    $(document).on('click', '#closeimage', function() {

        $("#closeimage").html("Load more" + '<img src="/themes/custom/emgroup/images/arrow-bottom.png" class="img-fluid" alt="">');
        $("#closeimage").attr('id', 'loadAllImages');

        $('.profile-row .showClass').each(function() {
            showE($(this))
        })
    });

    // Map Tabs Clicks 
    $('.country-box ul li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('.country-box ul li').not('[data-tab=' + tab_id + ']').removeClass('current');
        $('.country-list:not(#' + tab_id + ')').removeClass('current');
        $(this).toggleClass('current');
        $("#" + tab_id).toggleClass('current');
    });

    // Global Business Cards Click Function
    $(document).scroll(function() {
        $('.soltion-box>div').click(function() {
            $("#bottom-content").animate({
                scrollTop: $(window).position().top += 100
            });
        });
    });
    $('.soltion-box>div').click(function() {
        if ($('#bottom-content').position().top - $('.soltion-box>div').position().top > 0) {
            var shift = $(window).height() - $('#bottom-content').height();
        } else {
            var shift = 0;
        }
        $(window).scrollTop($('#bottom-content').offset().top - shift);
    });

    // History Page Content Show For Mobile
    $(".history-box .btn-more").on('click', function() {
        $(this).parent().parent().toggleClass("active");
        var replaceText = $(this).parent().parent().hasClass("active") ? '<span><img src="/themes/custom/emgroup/images/arrow-right-blk.png" class="img-fluid d-inline" alt=""></span>' + "Back" : "More" + '<span><img src="/themes/custom/emgroup/images/arrow-right-blk.png" class="img-fluid d-inline" alt=""></span>';
        $(this).html(replaceText);
    });

    // Manufacturing page Click Function
    $(document).ready(function() {
        $(".block-product-item .store>li").click(function() {
            $('html, body').scrollTop($("#store-content").offset().top - 120);
        });
    });

    // R&D page INNOVATIVE TECHNOLOGIES Click Function  
    $('.imageAccoordian ul li').addClass('unSelect');
    $('.imageAccoordian ul li').click(function() {
        $('.imageAccoordian ul li').removeClass('current');
        $(this).closest('li').removeClass('unSelect');
        $(this).closest('li').addClass('current');
        $('.imageAccoordian ul li').closest('li').addClass('unSelect');
    })


    // if (window.location.hash) {
    //       var jQuerytarget = jQuery('body').find(window.location.hash);
    //       if (jQuerytarget.hasClass('tab-content')) {
    //           var jQuerytargetAccordion = jQuerytarget.find('.tab-content');
    //           jQuerytarget.collapse('show');
    //       }
    // }

    // R&D page INNOVATIVE TECHNOLOGIES Hover Function  
    $('ul.RandD li').hover(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.RandD li').removeClass('current');
        $('.RandD-content .RandDTab-content').removeClass('current');
        $('.image-holder .img-box').removeClass('current');

        $(this).addClass('current');
        $("." + tab_id).addClass('current');
    });

    // Slider for Overview Page
    $('.innerPageSlider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 2000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

// Menu click not scroll page
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $("html").toggleClass('notscroll');
    });
});

var loader = $('#preloader');
$(window).on('load', function() {
    loader.delay(200).fadeOut('slow');
    $('body').delay(200).css({
        'overflow': 'visible'
    });
});

var contactPreloader = $('#contactPreloader');
$(window).on('load', function() {
    contactPreloader.delay(200).fadeOut('slow');
    $('body').delay(200).css({
        'overflow': 'visible'
    });
});

//partner-with-us JS
$(document).ready(function() {

    $('.successOwl').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.homeSlider').slick({
        autoplay: true,
        speed: 0,
        autoplaySpeed: 4000,
        arrows: false,
        fade: true,
        dots: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100
    }).slickAnimation();
});

// Media Page JS
$('ul.media-store li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('ul.media-store li').removeClass('current');
    $('.media-content .media-tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
});

function activateTab(tab_id) {
    $('ul.media-store li').removeClass('current');
    $('.media-content .media-tab-content').removeClass('current');

    $('ul.media-store li[data-tab="' + tab_id + '"]').addClass('current');
    $("#" + tab_id).addClass('current');
}

// Handle tab clicks
$('ul.media-store li').click(function() {
    var tab_id = $(this).attr('data-tab');
    activateTab(tab_id);
});

// Activate tab from URL hash if present
var hash = window.location.hash.substring(1); // remove #
if (hash) {
    activateTab(hash);
}

// Media page video
$(document).on('click', '.thumb_video_sect', function() {
    $('.sample_videos').find('.modal-title').text(($(this).parents('.video-content').find('.media-text h3').text()));
    $('.modal_video').attr('src', $(this).attr('data-src'));
});
$('#myModal').on('hide.bs.modal', function(e) {
    $('#myModal').find('.modal_video').attr('src', '');
});

// Resources page Js
$('.lead-stories').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
$('.press-release').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
});
$('.news-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
});
$('.whitepaper-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.video-hm').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// Resources page Js End