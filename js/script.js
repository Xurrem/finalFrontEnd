$(document).ready(function () {


    $('.owl-carousel').owlCarousel({

        autoplay: true,

        autoplayTimeout: 4000,

        loop: true,

        margin: 5,

        nav: true,

        responsive: {

            0: {

                items: 1

            }


        },

        navText: ["<i class='fa fa-chevron-left '></i>", "<i class='fa fa-chevron-right sag'></i>"]

    });



    // $(".kartlar").hover(function(){

    // $(this).find(".vip").css("transform","rotateY(-180deg)");

    //});


    $(".snake").snakeify({
        
          speed: 200
        
        });
        






});
