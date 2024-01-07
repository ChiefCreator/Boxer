function burgerAction() {
    let burger = document.querySelector(".boxer_header_content_burger_block");
    let navigation = document.querySelector(".boxer_header_content-el");
    burger.addEventListener("click", function() {
        navigation.classList.toggle("active")

        if (!navigation.classList.contains("active")) {
                addNum()
                onScroll()
        } else {
            removeNum() 
            setTimeout(function() {
                preventScroll()
            },500)
        }
    })
}
burgerAction()

function addNum() {
    if (document.querySelector(".phone")) {
        document.querySelector(".phone").classList.remove("phone_act")
        // document.querySelector(".phone").style.display = "block"
    }
} function removeNum() {
    if (document.querySelector(".phone")) {
        document.querySelector(".phone").classList.add("phone_act")
            // document.querySelector(".phone").style.display = "none"
    }
}

function preventScroll() {
    let lockPaddingValue = window.innerWidth - document.querySelector("header").offsetWidth + "px"
    console.log(lockPaddingValue)
    document.querySelector("body").style.paddingRight = lockPaddingValue
  
    let doc = document.querySelector("body")
    doc.style.overflowY = "hidden"
  }
  
  function onScroll() {
    document.querySelector("body").style.paddingRight = '0'
  
    let doc = document.querySelector("body")
    doc.style.overflowY = "scroll"
  }

function accordionQuestions() {
    let accordionElement = document.querySelectorAll('.questions__up');
            accordionElement.forEach(function(element){
                element.addEventListener('click', function(){
                    let drop = element.nextElementSibling

                    element.classList.toggle('questions__accordion-act');
                    drop.classList.toggle('questions__bottom-act');
                })
            })
 }
 accordionQuestions()

 function burger() {

    document.querySelector(".boxer_header_content_burger_block").addEventListener("click", function() {

        let lines = document.querySelectorAll(".burg_line")
        lines.forEach(line => {
            line.classList.toggle("line_act")
        })
    })
 }
 burger()

function copyText() {
document.querySelectorAll(".span_copy").forEach(item => {

    item.addEventListener("click", function() {

        navigator.clipboard.writeText(item.textContent)
            
        item.classList.add("span_copy_act")

        setTimeout(function() {
            item.classList.remove("span_copy_act")
        },1000)
    })
})

}
copyText() 
