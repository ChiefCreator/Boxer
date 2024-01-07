// let src = "classic1";
window.addEventListener("click" , function(event) {
    
    if (event.target.closest(".classic")) {
        let currentDiv = event.target.closest(".classic")
        let current = currentDiv.querySelector(".card_img_current")

            if (event.target.closest(".card_img")) {
                let item = event.target.closest(".card_img")

                let currentSrc = current.getAttribute('src')
                console.log(currentSrc)

                let data =item.src
                item.src = currentSrc

                current.src = data
                console.log(data)  
            }
    }
    if (event.target.closest(".standart")) {
        let currentDiv = event.target.closest(".standart")
        let current = currentDiv.querySelector(".card_img_current")

            if (event.target.closest(".card_img")) {
                let item = event.target.closest(".card_img")

                let currentSrc = current.getAttribute('src')
                console.log(currentSrc)

                let data =item.src
                item.src = currentSrc

                current.src = data
                console.log(data)  
            }
    }
    if (event.target.closest(".premium")) {
        let currentDiv = event.target.closest(".premium")
        let current = currentDiv.querySelector(".card_img_current")

            if (event.target.closest(".card_img")) {
                let item = event.target.closest(".card_img")

                let currentSrc = current.getAttribute('src')
                console.log(currentSrc)

                let data =item.src
                item.src = currentSrc

                current.src = data
                console.log(data)  
            }
    }
    if (event.target.closest(".junior")) {
        let currentDiv = event.target.closest(".junior")
        let current = currentDiv.querySelector(".card_img_current")

            if (event.target.closest(".card_img")) {
                let item = event.target.closest(".card_img")

                let currentSrc = current.getAttribute('src')
                console.log(currentSrc)

                let data =item.src
                item.src = currentSrc

                current.src = data
                console.log(data)  
            }
    }

    if (event.target.closest(".spare_parts")) {
      let currentDiv = event.target.closest(".spare_parts")
      let current = currentDiv.querySelector(".card_img_current")

          if (event.target.closest(".card_img")) {
              let item = event.target.closest(".card_img")

              let currentSrc = current.getAttribute('src')
              console.log(currentSrc)

              let data =item.src
              item.src = currentSrc

              current.src = data
              console.log(data)  
          }
  }
})

// let items = document.querySelectorAll(".card_img");
// console.log(items)
// let current = document.querySelectorAll(".card_img_current");
// items.forEach(item => {
//     item.addEventListener("click", function() {

//         let currentSrc = current.getAttribute('src')
//         console.log(currentSrc)

//         let data =item.src
//         item.src = currentSrc

//         current.src = data
//         console.log(data)
       

        
//     })
// })

window.addEventListener("click", function(event) {
  let swip = document.querySelector(".over_swiper");
  let swip2 = document.querySelector(".over_swiper2");
  let swip3 = document.querySelector(".over_swiper3");

  if (event.target.closest(".card_box_item_icon")) {
    // preventScroll()
    let btn = event.target.closest(".card_box_item_icon");
    let card = btn.closest(".card_box")
    
    let obj = {
      imgRed : card.querySelector("#red_img").src,
      imgBlack : card.querySelector("#black_img").src,
      imgOrange : card.querySelector("#orange_img").src,
      imgYellow : card.querySelector("#yellow_img").src,
      imgWhite : card.querySelector("#white_img").src,
    }
    console.log(obj)

    swip.classList.add("act_over_swiper");

    let allImgs = swip.querySelectorAll(".img_over")
    allImgs.forEach(img => {
      img.style.backgroundColor = "transparent"
    })

    let imgRed = swip.querySelector(".colorRed");
    imgRed.src = obj.imgRed

    let imgBlack = swip.querySelector(".colorBlack");
    imgBlack.src = obj.imgBlack

    let imgOrange = swip.querySelector(".colorOrange");
    imgOrange.src = obj.imgOrange

    let imgYellow = swip.querySelector(".colorYellow");
    imgYellow.src = obj.imgYellow

    let imgWhite = swip.querySelector(".colorWhite");
    imgWhite.src = obj.imgWhite
  }

  if (event.target.closest(".close-btn_over")) {
    // onScroll()
    swip.classList.remove("act_over_swiper");
    swip2.classList.remove("act_over_swiper");
    swip3.classList.remove("act_over_swiper");
  }

  if (event.target.closest(".card_box_item_icon_spare_parts1")) {
    // preventScroll()
    let btn = event.target.closest(".card_box_item_icon_spare_parts1");
    let card = btn.closest(".card_box")

      let obj = {
        currentImg : card.querySelector(".card_img_current").src,
        secondImg : card.querySelector(".sec").src,
      }

    swip2.classList.add("act_over_swiper");

    let allImgs = swip2.querySelectorAll(".img_over")
    allImgs.forEach(img => {
      img.style.backgroundColor = "transparent"
      img.style.position = "absolute"
      img.style.left = "50%"
      img.style.transform = "translateX(-50%)"
    })

    let imgRed = swip2.querySelector(".colorRed");
    imgRed.src = obj.currentImg

    let imgBlack = swip2.querySelector(".colorBlack");
    imgBlack.src = obj.secondImg
  }

  if (event.target.closest(".card_box_item_icon_spare_parts2")) {
    // preventScroll()
    let btn = event.target.closest(".card_box_item_icon_spare_parts2");
    let card = btn.closest(".card_box")

      let obj = {
        currentImg : card.querySelector(".card_img_current").src,
      }

    swip3.classList.add("act_over_swiper");

    let allImgs = swip3.querySelectorAll(".img_over")
    allImgs.forEach(img => {
      img.style.backgroundColor = "transparent"
      img.style.position = "absolute"
      img.style.left = "50%"
      img.style.transform = "translateX(-50%)"
    })

    let imgRed = swip3.querySelector(".colorRed");
    imgRed.src = obj.currentImg
  }
})

// function preventScroll() {
//   let lockPaddingValue = window.innerWidth - document.querySelector("header").offsetWidth + "px"
//   console.log(lockPaddingValue)
//   document.querySelector("body").style.paddingRight = lockPaddingValue

//   let doc = document.querySelector("body")
//   doc.style.overflowY = "hidden"
// }

// function onScroll() {
//   document.querySelector("body").style.paddingRight = '0'

//   let doc = document.querySelector("body")
//   doc.style.overflowY = "scroll"
// }
