function validation() {

    let inp = document.querySelector(".phone-wrapper__inp")
    inp.addEventListener("input", function() {

        inp.value = inp.value.slice(0,13)
    })

    inp.addEventListener("focus", function() {

        inp.value = '+375'
    })
}
validation()