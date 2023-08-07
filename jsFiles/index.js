



$(document).ready(function () {
    function getResponsiveItems() {
        if ($(window).width() > 1000) {
            return 3;
        } else if ($(window).width() > 768) {
            return 2;
        } else {
            return 1;
        }
    }

    $("#team-slider").owlCarousel({
        items: getResponsiveItems(),
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,
        dotsEach: true,
        pagination: false
    });

    $(window).resize(function () {
        var owl = $("#team-slider").data('owlCarousel');
        owl.options.items = getResponsiveItems();
        // owl.items = getResponsiveItems();
        // owl.getResponsiveItems();
        owl.update();
    });
});



jQuery(function ($) {
    //play video btn
    $(".position-relative video").removeAttr("controls"); //hide controls by default
    //on clicking play button
    $(".video-section").each(function () {
        $(".play-btn").click(function () {
            var video = $(this)
                .closest(".position-relative")
                .find("video")
                .get(0);
            video.play();
            video.controls = true;
            $(this).css("visibility", "hidden");
            return false;
        });

        //when video is paused
        $(this)
            .find("video")
            .click(function () {
                var video = $(this).get(0);
                video.pause();
                video.controls = false;
                $(this)
                    .siblings(".play-btn")
                    .css("visibility", "visible");
                return false;
            });

        //when video has ended
        $(this)
            .find("video")
            .on("ended", function () {
                $(this).get(0).controls = false;
                $(this)
                    .siblings(".play-btn")
                    .css("visibility", "visible");
                $(this)
                    .get(0)
                    .load();
            });
    });
});

var counted = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        var countNum = this.countNum;
                        if (countNum < 10) {
                            countNum = '0' + countNum;
                        }
                        $this.text(countNum);
                        //alert('finished');
                    }


                });
        });
        counted = 1;
    }

});
