$(document).ready(function(){

    let card = $(".wrapper_grid_inf")
    let imgToDrag = $(".color")
    $(".bascket_btn").click(function(){
        
        if(imgToDrag){
            let clone = imgToDrag
                .clone()
                .addClass("color_clone")
                .offset({
                    top: $(".bascket_btn").offset().top,
                    left: $(".bascket_btn").offset().left
                })
                .css({
                    opacity:"0.8",
                    position:"absolute",
                    height: "130px",
                    width: "100px",
                    zIndex: "100",
                })
                .appendTo($("body"))
                .animate({
                    top: $(".corzina_btn").offset().top + 20,
                    left: $(".corzina_btn").offset().left + 20,
                    width: "75px",
                    height: "75px",
                },1300
                );
                setTimeout(function(){
                    clone.animate({
                        width: "0",
                        height: "0",
                    },function(){
                        $(this).detach()
                    })
                })
        }
    })
})