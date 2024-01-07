let toggles = document.querySelectorAll(".switch_label_inp");

if (localStorage.getItem("switch") == "light") {
    document.querySelector('[title="theme"]').setAttribute("href",`boxerLight.css`)

    toggles.forEach(item => {
        item.checked = JSON.parse(localStorage.getItem("switchDiv"));
        
    })
}
if (localStorage.getItem("switch") == "dark"){
    document.querySelector('[title="theme"]').setAttribute("href",`css/boxerDark.css`)

    toggles.forEach(item => {
        item.checked = JSON.parse(localStorage.getItem("switchDiv"));
        
    })
}
if (localStorage.getItem("switch") == null) {
    document.querySelector('[title="theme"]').setAttribute("href",`css/boxerLight.css`)

    toggles.forEach(item => {
        item.checked = false;
        
    })
}

for (let toggleDiv of toggles) {

    toggleDiv.addEventListener("click", function() {


        if (!toggleDiv.checked) {

            toggleDiv.dataset.switch = "light"

            document.querySelector('[title="theme"]').setAttribute("href",`css/boxerLight.css`)

            localStorage.setItem("switch",toggleDiv.dataset.switch)
            localStorage.setItem("switchDiv", false)
        }else {

            toggleDiv.dataset.switch = "dark"

            document.querySelector('[title="theme"]').setAttribute("href",`css/boxerDark.css`)

            localStorage.setItem("switch",toggleDiv.dataset.switch)
            localStorage.setItem("switchDiv", true)
        }   
    })
}