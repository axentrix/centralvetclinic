$(document).ready(function () {



   
    $('.slider-partners').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });

    


    function homePageSearch(field) {
     
        if ($(field).length > 0) {
            $(field).focus(function () {
                console.log("I am focused");
                if ($(this).val().length === 0) {
                    $(this)
                        .prev(".placeholder")
                        .addClass("disappear");

                    $(".searchWrapper").addClass("open");
                    
                    setTimeout(function () { }, 500);
                    $(".searchWrapper .close").addClass("open");
                    $(".searchWrapper").addClass("animate");
                    $("#howCanWeHelpYou.content").removeClass("hide");
                    $("#howCanWeHelpYou").addClass("sticky");

                    $("body").addClass("noscroll");
                }
            });

            if ($(field).val().length > 0) {
                $(field)
                    .prev(".placeholder")
                    .addClass("disappear");
            }

            $(field)
                .prev(".placeholder")
                .click(function () {
                    $(this).addClass("disappear");
                    $("#search").focus();
                });

            $(field).blur(function () {
                if ($(this).val().length === 0) {
                    $(this)
                        .prev(".placeholder")
                        .removeClass("disappear");
                }
            });

            $(".close").on('click', function () {
                
                closeSearch();
            });

            $(".searchWrapper").click(function () {
                $("#searchArea").removeClass("open");
            });
        }
        return this;
    }

    $(".close").on('click', function () {

        closeSearch();
    });

    $(".searchWrapper").click(function () {
        $("#searchArea").removeClass("open");
    });


    function closeSearch() {
        $("body").removeClass("noscroll");
        $(".searchWrapper .close").removeClass("open");
        $("#howCanWeHelpYou .placeholder").removeClass("disappear");
    
        $("#howCanWeHelpYou.content").addClass("hide");
        $("#howCanWeHelpYou").removeClass("sticky");
        $(".searchWrapper").removeClass("open");
        $(".searchWrapper").removeClass("animate");
        $("#searchArea").removeClass("open");
        $("#search").val("");
    }
    homePageSearch("form#howCanWeHelpYou .hasPlaceHolder");
  
    $('#search-mobile').on('click', function (e) {

        e.preventDefault();
        $("this").addClass("disappear");
        $(".searchWrapper").addClass("open");
        $("body").addClass("noscroll");

        $(".searchWrapper .close").addClass("open");
        $(".searchWrapper").addClass("animate");
        $("#howCanWeHelpYou.content").removeClass("hide");
        $("#howCanWeHelpYou").addClass("sticky");




    });
    $('#search-top').on('click', function (e) {

        e.preventDefault();
      
        $(".searchWrapper").addClass("open");
        $("body").addClass("noscroll");

        $(".searchWrapper .close").addClass("open");
        $(".searchWrapper").addClass("animate");
        $("#howCanWeHelpYou.content").removeClass("hide");
        $("#howCanWeHelpYou").addClass("sticky");




    });

    if ($("#sidebar").length) {
       
        $("#side-menu a").click(function (e) {
        
            $("#side-menu .collapsible-body").slideUp();

                if (!$(this).next().is(":visible")) {
                    $(this).next().slideDown();
                  
            }
            $(this).toggleClass("open");
                e.stopPropagation();
           
        });
    }
    
})

