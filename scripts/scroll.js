let body = document.querySelector("body");
let btnsPopup = document.querySelectorAll(".popup-btn");
let lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
let timeout = 500;


if (btnsPopup.length > 0) {
    btnsPopup.forEach(btnPopup => {
        btnPopup.addEventListener("click", function() {
            let data = btnPopup.dataset.popup
            let currentPopup = document.querySelector(data)
            openPopup(currentPopup)

            currentPopup.classList.add("act_popup")
        })
    })
}

let btnsClose = document.querySelectorAll(".popup-close")
if (btnsClose.length > 0) {
    for (let i = 0;i < btnsClose.length;i++){
        let btnClose = btnsClose[i]
        btnClose.addEventListener("click", () => {

            btnClose.closest(".popup").classList.remove("act_popup")
            popupClose(btnClose.closest(".popup"))
        })
    }
}

function openPopup(currentPopup){
    if (currentPopup && unlock){
        const popapActive = document.querySelector(".popup.open")
        if (popapActive){
            popupClose(popapActive,false)
        }else{
            bodyLock()
        }
        currentPopup.classList.add("open")
        currentPopup.addEventListener("click", (e) => {
            if (!e.target.closest(".popup-content")){
                popupClose(e.target.closest(".popup"))

                currentPopup.classList.remove("act_popup")
            }
        })
    }
   }

   function bodyLock(){
    let lockPaddingValue = window.innerWidth - document.querySelector("header").offsetWidth + "px"
    console.log(lockPaddingValue)
    for(let i = 0;i < lockPadding.length;i++){
        let el = lockPadding[i]
        if (el.classList.contains("phone")) {
            el.style.right = "55px"
            console.log(el)
        } else {
            el.style.paddingRight = lockPaddingValue
        }
    }
    body.style.paddingRight = lockPaddingValue
    body.classList.add("body-lock")
    unlock = false 
    setTimeout(function (){
        unlock = true
    },timeout)
    console.log(body)
    console.log(lockPadding)
   }

   function bodyUnlock(){
    setTimeout(function(){
        for(let i = 0;i < lockPadding.length;i++){
        let el = lockPadding[i]
        if (el.classList.contains("phone")) {
            el.style.right = "50px"
            console.log(el)
        } else {
            el.style.paddingRight = "0px"
        }
    }
    body.style.paddingRight = "0px"
    body.classList.remove("body-lock")
    },400)
    unlock = true
    setTimeout(function (){
        unlock = true
    },timeout)
   }

   function popupClose(popupActive, doUnlock = true){
    if (unlock){
        popupActive.classList.remove("open")
        if(doUnlock){
            bodyUnlock()
        }
    }      
   }