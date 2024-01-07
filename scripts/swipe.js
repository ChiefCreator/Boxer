let slideBtn = document.querySelector(".btn_slide")
            let slide1 = document.querySelector(".sl1")
            let slide2 = document.querySelector(".sl2")
            let slide3 = document.querySelector(".sl3")
            let wrap = document.querySelector(".swiper-wrapper")

            let bul1 = document.querySelector(".bul1")
            let bul2 = document.querySelector(".bul2")
            let bul3 = document.querySelector(".bul3")

            window.addEventListener("click", function(event) {
            
                if (event.target.closest(".btn_slide")) {
                    wrap.classList.add("wrap_height")
                    wrap.style.transform = "translate3d(-100%,0,0)";
             
                    slide1.classList.add("swiper-slide-prev")
                    slide1.classList.remove("swiper-slide-active")
                    slide2.classList.add("swiper-slide-active")
                    slide3.classList.add("swiper-slide-next")

                    bul2.classList.add("swiper-pagination-bullet-active")
                    bul2.ariaCurrent = true
                    console.log(bul2)
                    bul1.classList.remove("swiper-pagination-bullet-active")
                    bul2.ariaCurrent = false
                    console.log(bul1)
                }

                
                
               
            })
            
            slide1.addEventListener("mouseenter", function() {

                wrap.classList.remove("wrap_height")
            })
            slide3.addEventListener("mouseenter", function() {
            

                wrap.classList.remove("wrap_height")
            })


            
           
           
            