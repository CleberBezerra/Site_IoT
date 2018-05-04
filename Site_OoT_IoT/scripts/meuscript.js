$(document) .ready(
    function(){
        $("section") .mouseleave(
            function(){
                $(this) .fadeTo(1000, 0.1);
            }
        );

        $("section") .mouseenter(
            function(){
                $(this) .fadeTo(1000, 0.9);
            }
        );

        $(".foto") .click(
            function(){
                var troca = $(this) .width() < 110 ? "300px" : "100px";

                $(this) .animate({width : troca});
            }
        );
    }
);