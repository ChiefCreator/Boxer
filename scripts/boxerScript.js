
//  function typed() {
//     let typed = new Typed('#typed', { 
//         stringsElement: '#typed-strings', 
//         typeSpeed: 100, 
//         startDelay: 1000,
//         backSpeed: 50, 
//         loop: true,
//     })
//  }
//  typed() 
function clickApply() {
    let btn = document.querySelector(".wrap-cont-btn-click");
    btn.addEventListener("click", function() {
        btn.classList.add("act-wrap-cont-btn-click");
        setTimeout(function() {
            btn.classList.remove("act-wrap-cont-btn-click");
        },2000);
    })
}
 clickApply()
 function tabs() {
    let tabBtns = document.querySelectorAll(".tab-btn-wrapper");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            animTabContentRemove();
            indicator(btn) 
            let btns = document.querySelectorAll(".tab-btn-wrapper");
            btns.forEach(b => {
                b.classList.remove("act-tab-btn-wrapper");
            })
            btn.classList.add("act-tab-btn-wrapper");

            let tabs = document.querySelectorAll(".tab-wrapper");
            tabs.forEach(item => {
                item.classList.remove("act-tab-wrapper");
            })
            let data = btn.dataset.tab;
            let currentTab = document.querySelector(data);
            currentTab.classList.add("act-tab-wrapper");
            animTabContent(currentTab)
            
        })
    })
 }
 tabs()
 function indicator(btn) {
    let bTop = btn.offsetTop;
    let indicator = document.querySelector(".indicator");
    indicator.style.top = bTop + "px";
 }
function animTabContent(currentTab) {
   
    currentTab.classList.add("act-tab");
}
function animTabContentRemove() {

    let currentTabs = document.querySelectorAll(".tab-wrapper");
    currentTabs.forEach(currentTab => {
        currentTab.classList.remove("act-tab");
    })

}


function accordion() {
    let accordionElement = document.querySelectorAll('.accordion_item');
            accordionElement.forEach(function(element){
                element.addEventListener('click', function(){
                    let drop = element.lastElementChild

                    element.classList.toggle('accordion_item_act');
                    drop.classList.toggle('dropdown_act');
                })
            })
 }
 accordion()

//  function submit() {

//     let subs = document.querySelectorAll(".sub")

//     subs.forEach(sub => {

//         sub.addEventListener("click", function() {

//             let content = document.querySelector(".perspective-block-left");
//             content.classList.toggle("perspective-block-left-act")
    
//             let formAppear = document.querySelector(".perspective-block-right");
//             formAppear.classList.toggle("perspective-block-right-act")

//             // только для свайпера
//             let swiper = document.querySelector(".swiper")
//             swiper.style.maxHeight = "675px"

//             preventScroll()

//             addOverBlock()

//             close(content,formAppear)
    
//             scrollTo({
//                 top:0,
//                 left:0,
//                 behavior:"smooth"
//             })  
//         })
//     })     
//  }

//  function close(content,formAppear) {
    
//     window.addEventListener("click", function(event) {
        
//         if (event.target.closest(".close-btn")) {

//                 onScroll()
//                 removeOverBlock()
    
//                 formAppear.classList.remove("perspective-block-right-act")
//                 content.classList.remove("perspective-block-left-act")

//                 // только для свайпера
//                 let swiper = document.querySelector(".swiper")
//                 setTimeout(function() {
//                     swiper.style.maxHeight = "8000px"
//                 },500)
//         }

//         if (event.target.closest(".overblock")) {
    
//                 onScroll()
//                 removeOverBlock()
    
//                 formAppear.classList.remove("perspective-block-right-act")
//                 content.classList.remove("perspective-block-left-act")

//                 // только для свайпера
//                 let swiper = document.querySelector(".swiper")
//                 setTimeout(function() {
//                     swiper.style.maxHeight = "8000px"
//                 },500)
//         }
//     })  
// }

//  function preventScroll() {
//     let lockPaddingValue = window.innerWidth - document.querySelector("header").offsetWidth + "px"
//     console.log(lockPaddingValue)
//     document.querySelector("body").style.paddingRight = lockPaddingValue

//     let doc = document.querySelector("body")
//     doc.style.overflowY = "hidden"
//  }

//  function onScroll() {
//     document.querySelector("body").style.paddingRight = '0'

//     let doc = document.querySelector("body")
//     doc.style.overflowY = "scroll"
//  }

// function addOverBlock() {
//     let overBlock = document.querySelector(".overblock");

//     overBlock.classList.add("act-overblock");
// }

// function removeOverBlock() {
//     let overBlock = document.querySelector(".overblock");

//     overBlock.classList.remove("act-overblock");
// }


//  submit()
//  function subBtn() {
//     document.querySelector(".form").addEventListener("submit", function(event) {
//     event.preventDefault()
//     let subBtn = document.querySelector("#button-sub")
//     subBtn.classList.add("onclic")
//     setTimeout(function() {
//         subBtn.classList.remove("onclic")
//         subBtn.classList.add("validate")
//         setTimeout(function() {
//             subBtn.classList.remove("validate")
//     },1000)
//     },2000)
// })
// }
// subBtn()
//  function textarrea() {
//     let arrea = document.querySelector(".textarrea");
//     h = parseInt(getComputedStyle(arrea).height)
//     console.log(h)
//     limit = 66;
//     arrea.addEventListener("input", function() {
//         let text = +arrea.value.length;
//         if (text > limit) {
//             limit +=66;
//             console.log(limit)
//             arrea.style.height = h + limit / 5 + "px"
           
//         }
//         if (text == 0) {
//             arrea.style.height = 30 + "px"
//             limit = 66;
//         }
            
        
        
//     })
//  }
//  textarrea()
