$(".dark-btn").click(
    function(){
        $("body").toggleClass("dark");
        $(".box").toggleClass("dark");
  }
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        $(".chair").addClass("reveal");
        // $(".reveal-btn").css("display", "none");
        $(".reveal-btn").hide();
    }
);


$( ".draggable" ).draggable({
    snap:true,
    axis: "x"

});


