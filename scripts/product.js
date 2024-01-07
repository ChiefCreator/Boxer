function colors() {
    let itemColor;
    let fotosSwiper = document.querySelectorAll(".color"); 

    fotosSwiper.forEach(foto => {
        let fotoSrc = foto.getAttribute("src");
        let index = fotoSrc.indexOf('.');
        let newSrc = fotoSrc.slice(0,index)
        let link = `${newSrc}`;

        window.addEventListener("click", function(event) {
        if(event.target.closest(".color_item")) {

            itemColor = event.target.closest(".color_item");
            if (itemColor.getAttribute("id") == "black") {
                foto.src = `${link}black.png`;
            }
            if (itemColor.getAttribute("id") == "orange") {
                foto.src = `${link}orange.png`;
            }
            if (itemColor.getAttribute("id") == "yellow") {
                foto.src = `${link}yellow.png`;
            }
            if (itemColor.getAttribute("id") == "white") {
                foto.src = `${link}white.png`;
            }
            if (itemColor.getAttribute("id") == "red") {
                foto.src = `${link}.png`;
            }

            document.querySelectorAll(".ne_red_slide").forEach(neRed => {
                if (itemColor.getAttribute("id") != "red") {
                    neRed.classList.add("img_none")
                } else {
                    neRed.classList.remove("img_none")
                }
            })
        }
    })
})
}
colors()

