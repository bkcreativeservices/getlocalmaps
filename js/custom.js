$(document).ready(function() {
	$('.navbar-toggler').click(function(){
		$('body').toggleClass("overflow-hidden");
	});
});

$('.portfolio_carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1500,
    arrows: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                variableWidth: false
            }
        }
    ]
});

$('.review_list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1500,
    draggable: false
});

$('.feature_slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1500,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                variableWidth: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.blog_project_list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1500,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$(document).ready(function(){
    AOS.init({
        easing: 'ease',
        duration: 400,
        delay: 400,
    });
});

$(document).ready(function(){
    $(document).ready(function(){
        $("a[rel^='prettyPhoto']").prettyPhoto({
            show_title: false,
            social_tools:false,
            deeplinking:false,
        });
    });
});