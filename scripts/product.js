const swiper = new Swiper('.mySwiper', {
    loop: true,
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});



const swiper2 = new Swiper('.mySwiper2', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: swiper,
    }
});

function colors() {

    let src = document.querySelector(".swiper-slide img").src
    console.log(src)
    let index = src.lastIndexOf('.png');
    let newSrc = src.slice(0,index)
    let link = `${newSrc}`;
    console.log(link)


    let itemColor;
    let allSlidesMain = document.querySelectorAll(".swiper-slide")
    window.addEventListener("click", function(event) {
        if(event.target.closest(".color_item")) {
            itemColor = event.target.closest(".color_item");

            allSlidesMain.forEach(function(slide) {
                slide.classList.add("slide_none")

                if (itemColor.id == "black") {
                    if (slide.classList.contains("not_none")) {
                        slide.classList.remove("slide_none")
                            slide.children[0].src = `${link}black.png`
                    } 
                }

                if (itemColor.id == "orange") {
                    if (slide.classList.contains("not_none")) {
                        slide.classList.remove("slide_none")
                            slide.children[0].src = `${link}orange.png`
                    } 
                }

                if (itemColor.id == "yellow") {
                    if (slide.classList.contains("not_none")) {
                        slide.classList.remove("slide_none")
                            slide.children[0].src = `${link}yellow.png`
                    } 
                }

                if (itemColor.id == "white") {
                    if (slide.classList.contains("not_none")) {
                        slide.classList.remove("slide_none")
                            slide.children[0].src = `${link}white.png`
                    } 
                }

                if (itemColor.id == "red") {
                    slide.classList.remove("slide_none")
                    
                    if (slide.classList.contains("not_none")) {
                        console.log(slide)
                        slide.children[0].src = `${link}.png`
                    }
                }
            })
            swiper2.update()
            swiper.update()
        }
    })
}
colors()




// function colors() {
//     let itemColor;
//     let fotosSwiper = document.querySelectorAll(".color"); 

//     fotosSwiper.forEach(foto => {
//         let fotoSrc = foto.getAttribute("src");
//         let index = fotoSrc.indexOf('.');
//         let newSrc = fotoSrc.slice(0,index)
//         let link = `${newSrc}`;

//         window.addEventListener("click", function(event) {
//         if(event.target.closest(".color_item")) {

//             itemColor = event.target.closest(".color_item");
//             if (itemColor.getAttribute("id") == "black") {
//                 foto.src = `${link}black.png`;
//             }
//             if (itemColor.getAttribute("id") == "orange") {
//                 foto.src = `${link}orange.png`;
//             }
//             if (itemColor.getAttribute("id") == "yellow") {
//                 foto.src = `${link}yellow.png`;
//             }
//             if (itemColor.getAttribute("id") == "white") {
//                 foto.src = `${link}white.png`;
//             }
//             if (itemColor.getAttribute("id") == "red") {
//                 foto.src = `${link}.png`;
//             }

//             document.querySelectorAll(".ne_red_slide").forEach(neRed => {
//                 if (itemColor.getAttribute("id") != "red") {
//                     neRed.classList.add("img_none")
//                 } else {
//                     neRed.classList.remove("img_none")
//                 }
//             })
//         }
//     })
// })
// }
// colors()

