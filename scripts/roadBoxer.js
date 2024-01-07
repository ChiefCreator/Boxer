let doc = window.innerHeight

let circle = document.querySelector(".line_circle");
let fromTop = circle.getBoundingClientRect().top

let limitFrom = +fromTop - +doc

let redLine = document.querySelector(".road_boxer_line_div_red");

let count = 0

let arr = [];
let circs = document.querySelectorAll(".line_circle");
circs.forEach(circ => {
    let top = circ.offsetTop
    arr.push(+top);
})

let i = 0
let data;
window.addEventListener("scroll", function() {

    let px = window.scrollY - limitFrom;

    redLine.style.height = px / 1.7  + "px";

    if ((px / 1.7) >= 0) {
        if ((px / 1.7) >= arr[i] && i < 4) {
            circs[i].classList.add("line_circle_act")
            isClass()
            i++
        } else {
            isClassRemove()
            circs[i].classList.remove("line_circle_act")
            i--;
        }
    }

    if ((px / 1.7) >= arr[4]) {
        isClass()
        circs[4].classList.add("line_circle_act")
    }
})

function isClass() {
    let circs = document.querySelectorAll(".line_circle");
    circs.forEach(circ => {
        if (circ.classList.contains("line_circle_act")) {
            data = circs[i].dataset.circ
            let name = document.querySelector(`#${data}`)
            name.classList.add("road_boxer_item_title_p_act")
        } 
    })
}

function isClassRemove() {
    let circs = document.querySelectorAll(".line_circle");
    circs.forEach(circ => {
        if (!circ.classList.contains("line_circle_act")) {
            data = circs[i].dataset.circ
            let name = document.querySelector(`#${data}`)
            name.classList.remove("road_boxer_item_title_p_act")
        } 
    })
}

let topPos;
let arrIcons = []
let arrPos = []
let titles = document.querySelectorAll(".anim_icon_road");

titles.forEach(title => {
    arrIcons.push(title)
    topPos = +title.offsetTop
    arrPos.push(topPos)
})

window.addEventListener("scroll", function() {
    let px = window.scrollY - limitFrom;
    
    titles.forEach(title => {
        if (title.classList.contains("icon_rooad1")) title.style.top = arrPos[0] + +px / 5 + "px";
        if (title.classList.contains("icon_rooad2")) title.style.top = arrPos[1] - +px / 10 + "px";
        if (title.classList.contains("icon_rooad3")) title.style.top = arrPos[2] + +px / 5 + "px";
        if (title.classList.contains("icon_rooad4")) title.style.top = arrPos[3] - +px / 10 + "px";
        if (title.classList.contains("icon_rooad5")) title.style.top = arrPos[4] - +px / 10 + "px";
    })
})