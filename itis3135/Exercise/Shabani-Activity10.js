$(document).ready(function () {

        // set up the event handlers for each link
        $("#image_list a").click(function (evt){



                // get the image URL and caption for each image and animate the caption
                var imageLink = $(this).attr("href");
                var imageCaption = $(this).attr("title");

                $("#caption").fadeOut(1000, function (){
                        $("#caption").text(imageCaption).fadeIn(1000);
                });

                $("#image").fadeOut(1000, function (){
                        $("#image").attr("src", imageLink).fadeIn(1000);
                });

                // cancel the default action of each link
                evt.preventDefault();

        });

        // move the focus to the first link
        $("li:first-child a").focus();
        $("#image").hide().fadeIn(1000);
        $("#caption").hide().fadeIn(1000);

}); // end ready
