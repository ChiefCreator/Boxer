function mapImg() {
    let slide = true;

    window.addEventListener("click", function(event) {
        if (event.target.closest(".switch-btn")) {

        let btn = event.target.closest(".switch-btn")
        let div = btn.closest(".map").querySelector(".map-div")

            if (btn.classList.contains("pos1")) {
                div.classList.remove("act-map-div2")
                div.classList.add("act-map-div1")
                setTimeout(function() {
                    btn.classList.remove("pos1")
                },0);
            }else{
                div.classList.add("act-map-div2")
                div.classList.remove("act-map-div1")
                setTimeout(function() {
                    btn.classList.add("pos1")
                },0);
            }  
        }
    })
 }
 mapImg()


//  function submit() {

// let subs = document.querySelectorAll(".sub")

// subs.forEach(sub => {

//     sub.addEventListener("click", function() {

//         let content = document.querySelector(".perspective-block-left");
//         content.classList.toggle("perspective-block-left-act")

//         let formAppear = document.querySelector(".perspective-block-right");
//         formAppear.classList.toggle("perspective-block-right-act")

//         // только для свайпера
//         let swiper = document.querySelector(".wrapper_product")
//         swiper.style.maxHeight = "750px"

//         preventScroll()

//         addOverBlock()

//         close(content,formAppear)

//         scrollTo({
//             top:0,
//             left:0,
//             behavior:"smooth"
//         })  
//     })
// })     
// }

// function close(content,formAppear) {

// window.addEventListener("click", function(event) {
    
//     if (event.target.closest(".close-btn")) {

//             onScroll()
//             removeOverBlock()

//             formAppear.classList.remove("perspective-block-right-act")
//             content.classList.remove("perspective-block-left-act")

//             // только для свайпера
//             let swiper = document.querySelector(".wrapper_product")
//             setTimeout(function() {
//                 swiper.style.maxHeight = "8000px"
//             },500)
//     }

//     if (event.target.closest(".overblock")) {

//             onScroll()
//             removeOverBlock()

//             formAppear.classList.remove("perspective-block-right-act")
//             content.classList.remove("perspective-block-left-act")

//             // только для свайпера
//             let swiper = document.querySelector(".wrapper_product")
//             setTimeout(function() {
//                 swiper.style.maxHeight = "8000px"
//             },500)
//     }
// })  
// }

// function preventScroll() {
// let doc = document.querySelector("body")
// doc.style.overflowY = "hidden"
// }

// function onScroll() {
// let doc = document.querySelector("body")
// doc.style.overflowY = "scroll"
// }

// function addOverBlock() {
// let overBlock = document.querySelector(".overblock");

// overBlock.classList.add("act-overblock");
// }

// function removeOverBlock() {
// let overBlock = document.querySelector(".overblock");

// overBlock.classList.remove("act-overblock");
// }


// submit()
// function subBtn() {
// document.querySelector(".form").addEventListener("submit", function(event) {
// event.preventDefault()
// let subBtn = document.querySelector("#button-sub")
// subBtn.classList.add("onclic")
// setTimeout(function() {
//     subBtn.classList.remove("onclic")
//     subBtn.classList.add("validate")
//     setTimeout(function() {
//         subBtn.classList.remove("validate")
// },1000)
// },2000)
// })
// }
// subBtn()
// function textarrea() {
// let arrea = document.querySelector(".textarrea");
// h = parseInt(getComputedStyle(arrea).height)
// console.log(h)
// limit = 66;
// arrea.addEventListener("input", function() {
//     let text = +arrea.value.length;
//     if (text > limit) {
//         limit +=66;
//         console.log(limit)
//         arrea.style.height = h + limit / 5 + "px"
       
//     }
//     if (text == 0) {
//         arrea.style.height = 30 + "px"
//         limit = 66;
//     }
        
    
    
// })
// }
// textarrea()

// function moreBoxers() {

//     let our = document.querySelector(".start1");
//     let next1 = document.querySelector(".next");
//     let our2 =  document.querySelector(".start2");
//     next1.addEventListener("click", function() {
//         our2.scrollIntoView({
//             behavior:"smooth",
//         })
//     })

//     let prev1 = document.querySelector(".prev");
//     prev1.addEventListener("click", function() {
//         our2.scrollIntoView({
//             behavior:"smooth",
//         })
//     })

//     let next2 = document.querySelector(".next2");
//     next2.addEventListener("click", function() {
//         our.scrollIntoView({
//             behavior:"smooth",
//         })
//     })

//     let prev2 = document.querySelector(".prev2");
//     prev2.addEventListener("click", function() {
//         our.scrollIntoView({
//             behavior:"smooth",
//         })
//     })
//  }
//  moreBoxers() 