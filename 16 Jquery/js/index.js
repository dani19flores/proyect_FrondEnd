//console.log("hello world!");

//---------Seleccionar elementos
//Jquery
//$(selector).action();
$(document).ready(function(){

    //$(".logo").before("<p>Hello!</p>"); 
    $(".promo").append("<span class='tag'></span>");
    //$(".promo").prepend("<hr>");
    //$("section").after("<em>after</em>");
    const rxtj = $("#txt").text();
    console.log("text jquery: " + rxtj);
    $("#txt").text("Jersey selección Mexicana");
    const htmlj = $("h2").html();
    console.log("html jquery: "  + htmlj);

    //$("h2").html("<i>JQuery</i>");
    //$(".promo h2:nth-child(2)").html("<i>Modificado!!!</i>")
    $(".products section:nth-child(2)").children().eq(1).html("<i>Modificado!!!</i>");
    $(".remove").css("width","35px");

    //const imagen = $("img").attr("src");
    //$("img").attr("src","url imagen");

    //$(".products section:first-child").addClass("promo");
    //$(".products section:first-child").removeClass("promo");
    //evento de click para el menu del carrito
    $("header i:last-child").click(function(){
        $(".cart").toggleClass("show");
    });

    let valj = $(".ipn").val();
    console.log("val jquery", valj);
    $(".ipn").val("Andrea");
    valj = $(".ipn").val();
    console.log("val jquery", valj);

    $("header i:first-child").click(function(){
        //con this trabaja con el elemento seleccionado
        $(this).css("background-color", "green");
    });

    $(".mouse").mouseenter(function(){
        $(this).css("opacity", ".2");
    });


    $(".mouse").mouseleave(function(){
        $(this).css("opacity", "1");
    });

    $(document).scroll(function(){
        console.log("scroll")
    });

    $("input[type='text']").focus(function(){
        $(this).addClass("new-outline");
    })

    $("input[type='text']").blur(function(){
        $(this).remove("new-outline");
    })

    $(document).keyup(function(e){
        const cart = $(".cart");
        const carHasShowClass = cart.hasClass("show");
        const keyPressed = e.keyCode;
        console.log(e.key)
        if(carHasShowClass && keyPressed === 27){
            cart.removeClass("show");
        }
    })

    //animations de Jquery
    $(".title-sc").click(function() {
        $("form").show();
    })

    //$("input[type='text']").hide();

    $("input[type='button']").click(function() {
        $("form").hide();
    })

    $(".logo-header").click(function() {
        $(".modal").fadeIn(3000,function(){
            console.log("Aparecio el modal!")
        });
    })

    $("span").hide();
    $("p").click(function(){
        $("span").show(5000);
      });

    $(".modal i").click(function() {
        //$(".modal").fadeOut();
        $(this).parent().fideOut(800, function(){

        });
    })

    $(".show-form").click(function(){
        $("form").slideDown();
    })

    $(".hide-form").click(function(){
        $("form").slideUp();
    })

    $(".toggle-form").click(function(){
        $("form").slideToggle();
    })

    $(".menu").click(function(){
        $(".modal").fadeToggle();
    })

    $(".tag").click(function(){
        $(".logo-header").animate({
            width:'555px',
            backgroundColor:'red',
            opacity:'0.5',
            rigth: "500px",
        })
    })
});













