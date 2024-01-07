
// window.addEventListener("scroll", function() {
//     let px = window.outerHeight;
//     let widthPage = window.outerWidth
//     let heightParallax = document.querySelector(".wrap_our").clientHeight

//     let percentParallaxt = px/heightParallax*100
//     let scrollPx = window.scrollY
//     let change = scrollPx / percentParallaxt * 40

//     document.querySelector(".wrap_our_mouse_inimate").style.top = change + "px"
// })


let animItems = document.querySelectorAll('.anim-onscroll')
window.addEventListener('scroll',animOnScroll);
function animOnScroll(){
    animItems.forEach(function(item){
    let itemHeight = item.offsetHeight;
    let itemOffset = offset(item).top;
    let animStart = 4;

    let animItemPoint = window.innerHeight - (itemHeight / animStart);
    if (itemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - (window.innerHeight / animStart)
    }
    if ((pageYOffset > itemOffset - animItemPoint) && pageYOffset < (itemOffset + itemHeight)){
        item.classList.add('act-anim-onscroll')
        
    }
    else{
        if (!item.classList.contains('lock-anim-onscroll')){
            item.classList.remove('act-anim-onscroll')
        }
        
    }
})
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
animOnScroll();