initialState()
isEmpty() 

let cartWrapper = document.querySelector(".bascket_wrap_data_wrapper")
let bascketItogP = document.querySelector(".itog_num_p")
let cost = parseInt(document.querySelector(".rent-wrapp__total").textContent)

let total = document.querySelector(".itogo").textContent;
let price = 0;

let totalP = document.querySelector(".itogo");
let priceP = document.querySelector(".options")

let counter;
let value = 1;

let arr = [];
let index;

let k = 0

let sumOptP  = 0

let Bascketotal = 0

let storageArr = []

// 
let indicates = document.querySelectorAll(".rent-wrapp__indicate")

window.addEventListener("click", function(event) {

        let priceSlide = 60;
        let priceSlideP = document.querySelector(".product")

    if (event.target.closest(".rent-wrapp__slide")) {
        document.querySelector(".res_rent").value = 1
        let inputs = document.querySelectorAll(".checkbox_inp input");
        inputs.forEach(input => {
            input.checked = false;
        })
        value = 1;
        total = cost;
        price = 0;
        totalP.textContent = document.querySelector(".data1").dataset.price + " Br";
        priceP.textContent = 0;
        arr = []

        let wrap = event.target.closest(".rent-wrapp__slide")
        let item = event.target.closest(".rent-wrapp__data")
        
        let leftPos = item.offsetLeft
        console.log(leftPos)

        indicates.forEach(indicate => {
            indicate.style.left = leftPos + "px";
        })

        priceSlide = item.dataset.price

        let num = wrap.nextElementSibling.nextElementSibling
        num.textContent = priceSlide + " Br"

        totalP.textContent = priceSlide
        priceSlideP.textContent = priceSlide

        if (event.target.closest(".data5")) {
            document.querySelector(".rent-wrapp__inputs").classList.add("act_inputs")
        } else {
            document.querySelector(".rent-wrapp__inputs").classList.remove("act_inputs")
        }
    }


    if (event.target.dataset.action == "plus" || event.target.dataset.action == "minus") {
        let counterWrapper = event.target.closest(".counter");
        counter = counterWrapper.querySelector(".res");
        value = counter.value;
    }

    if(event.target.dataset.action == "plus") {

        counter.value = ++value; 
    }

    if(event.target.dataset.action == "minus" && counter.value > 1) {

        counter.value = --value;
    }

    inpt = event.target.closest(".checkbox_inp input");
    if (event.target.dataset.id == "check") {
        value = 1

        if (inpt.checked == true) {

            price += parseInt(inpt.dataset.cost);
            arr.push(inpt.dataset.p)
        } else {

            price -= parseInt(inpt.dataset.cost);
            index = arr.indexOf(inpt.dataset.p)
            arr.splice(index,1)
        }
    }
    total = (+parseInt(priceSlideP.textContent) + +price) * +value;

    totalP.textContent = total
    priceP.textContent = price

    if (event.target.closest(".bascket_wrap_data") && event.target.closest(".counter")) {

        value = 1
        total = cost
        totalP.textContent = total

        sumOptP = 0
        calctotal()

        let lists = document.querySelectorAll(".bascket_wrap_data")
        lists.forEach(list => {
            
            list.querySelector(".res").dataset.val =  list.querySelector(".res").value
        })

        updateStorage()
    }

    if (event.target.closest(".to_bascket")) {
     
       
        k++
        let card = event.target.closest(".rent-wrapp__mounth");

        productInfo = {
            id:`card${k}`,
            imgSrc:card.querySelector(".rent-wrapp__image").getAttribute("src"),
            title:card.querySelector(".rent-wrapp__name").textContent,
            price:card.querySelector(".rent-wrapp__total").textContent,
            counter:value,
            options:+price,
            moneta:arr.includes("moneta_p"),
            kupura:arr.includes("kupura_p"),
            carta:arr.includes("carta_p"),
            disp:arr.includes("display_p")
        }   

        const cardItemHTML = `<div class="bascket_wrap_data bascket_wrap_data_rent" id="${productInfo.id}">
                             <div class="bascket_wrap_data_content">
                                 <div class="bascket_imgdiv">
                                     <img class="bascket_img" src="${productInfo.imgSrc}">
                                 </div>
                                 <div class="bascket_names_wrapper">
                                     <div class="bascket_names">
                                         <div class="bascket_names_name">
                                             <p class="bascket_names_name_p"><span data-lang="rent-bascket">Аренда</span> ${productInfo.title}</p>
                                         </div>
                                         <div class="bascket_names_cost">
                                             <p class="bascket_names_cost_p">${productInfo.price}</p>
                                         </div>
                                     </div>
                                     <div class="counter">
                                         <div class="counter_minus" data-action="minus">
                                         </div>
                                         <div class="counter_res">
                                             <input class="res" type="text" value="${productInfo.counter}" data-val="${productInfo.counter}">
                                         </div>
                                         <div class="counter_plus" data-action="plus">
                                         </div>
                                     </div>
                                 </div>
                                 <div class="bascket_del">
                                    <div class="bascket_del_icon"></div>
                                </div>
                             </div>
                             <div class="gen_cost">
                        <ul class="gen_cost_ul">
                        <li class="opt_p" data-act="${productInfo.moneta}">20 <span data-lang="rub">рублей</span> | <span data-lang="moneta">Монетоприемник</span></li>
                        <li class="opt_p" data-act="${productInfo.kupura}">30 <span data-lang="rub">рублей</span> | <span data-lang="kupura">Купюроприемник</span></li>
                        <li class="opt_p" data-act="${productInfo.carta}">40 <span data-lang="rub">рублей</span> | <span data-lang="carta">Бесконтактная оплата</span></li>
                        <li class="opt_p" data-act="${productInfo.disp}">20 <span data-lang="rub">рублей</span> | <span data-lang="disp">4-значный дисплей</span></li>
                        </ul>
                    </div>
                         </div>`;
        const cardItemHTMLEn = `<div class="bascket_wrap_data bascket_wrap_data_rent" id="${productInfo.id}">
         <div class="bascket_wrap_data_content">
             <div class="bascket_imgdiv">
                 <img class="bascket_img" src="${productInfo.imgSrc}">
             </div>
             <div class="bascket_names_wrapper">
                 <div class="bascket_names">
                     <div class="bascket_names_name">
                         <p class="bascket_names_name_p"><span data-lang="rent-bascket">Rent</span> ${productInfo.title}</p>
                     </div>
                     <div class="bascket_names_cost">
                         <p class="bascket_names_cost_p">${productInfo.price}</p>
                     </div>
                 </div>
                 <div class="counter">
                     <div class="counter_minus" data-action="minus">
                     </div>
                     <div class="counter_res">
                         <input class="res" type="text" value="${productInfo.counter}" data-val="${productInfo.counter}">
                     </div>
                     <div class="counter_plus" data-action="plus">
                     </div>
                 </div>
             </div>
             <div class="bascket_del">
                <div class="bascket_del_icon"></div>
            </div>
         </div>
         <div class="gen_cost">
    <ul class="gen_cost_ul">
    <li class="opt_p" data-act="${productInfo.moneta}">20 <span data-lang="rub">rubles</span> | <span data-lang="moneta">Coin acceptor</span></li>
    <li class="opt_p" data-act="${productInfo.kupura}">30 <span data-lang="rub">rubles</span> | <span data-lang="kupura">Bill acceptor</span></li>
    <li class="opt_p" data-act="${productInfo.carta}">40 <span data-lang="rub">rubles</span> | <span data-lang="carta">Payment by card</span></li>
    <li class="opt_p" data-act="${productInfo.disp}">20 <span data-lang="rub">rubles</span> | <span data-lang="disp">4-digit display</span></li>
    </ul>
</div>
     </div>`;
        function parser(cardItemHTML) {
           var parser = new DOMParser();
           let teg = parser.parseFromString(cardItemHTML, 'text/html');
           let div = teg.querySelector(".bascket_wrap_data");
           cartWrapper.append(div);

        }
        if (localStorage.getItem("select") != null) {
            if (localStorage.getItem("select") == "ru") {
                parser(cardItemHTML) 
            } else {
                parser(cardItemHTMLEn) 
            }
        } else {
            parser(cardItemHTML) 
        }  
        
        
        calctotal()

      
        setTimeout(function() {
            total -= cost;
            updateStorage()
        },0)

        isEmpty()

        // обнуление 
        card.querySelector(".res").value = 1
        let inputs = document.querySelectorAll(".checkbox_inp input");
        inputs.forEach(input => {
            input.checked = false;
        })
        value = 1;
        total = cost;
        price = 0;
        totalP.textContent = priceSlideP.textContent;
        priceP.textContent = 0;
        arr = []

        Bascketotal = 0
    }
        

    if (event.target.closest(".bascket_del_icon")) {
        let cardCurrent = event.target.closest(".bascket_wrap_data")
        cardCurrent.querySelector(".res").value = 0
        
        calctotal()
        
        cardCurrent.style.display = "none"
        cardCurrent.remove()

        updateStorage()

        isEmpty()
       
    }
})

function calctotal() {
    Bascketotal = 0
    let items = document.querySelectorAll(".bascket_wrap_data")
        items.forEach(item => {
            if (item.style.display != "none") {
                sumOptP = 0

                item.querySelectorAll(`[data-act="true"]`).forEach(optP => {

                    sumOptP += +parseInt(optP.textContent)
                    console.log(sumOptP)
                })

                Bascketotal += (parseInt(item.querySelector(".bascket_names_cost_p").textContent) + +sumOptP) * +parseInt(item.querySelector(".res").value)

                bascketItogP.textContent = Bascketotal + ' Br'
            }
        })
}


function updateStorage() {
    let parent = document.querySelector(".bascket_wrap");
    let html = parent.outerHTML;
    
    html = html.trim();
    if (html.length) {
        localStorage.setItem("products",html);
    }
}

function initialState() {
    
    if (localStorage.getItem("products") != null) {
        document.querySelector(".bascket_wrap").outerHTML = localStorage.getItem("products")

        let lists = document.querySelectorAll(".bascket_wrap_data")
        lists.forEach(list => {
            list.querySelector(".res").value = list.querySelector(".res").dataset.val
        })
    }
}

function isEmpty() {
    let cards = document.querySelectorAll(".bascket_wrap_data")

    let empty = document.querySelector(".empty")
    let btnCatalog = document.querySelector(".order__katalog")
    let btnOrder = document.querySelector(".order_btn")
    if (cards.length > 0) {
        empty.classList.add("empty_none")
        btnOrder.classList.remove("order__katalog_none")
        btnCatalog.classList.add("order__katalog_none")
    } else {
        empty.classList.remove("empty_none")
        btnOrder.classList.add("order__katalog_none")
        btnCatalog.classList.remove("order__katalog_none")
    }
}


// стилизация select
document.querySelectorAll(".dropdown_select2").forEach(function(dropdownWrapper) {

    const dropdownButtom = dropdownWrapper.querySelector(".dropdown_button2")
    const dropdownList = dropdownWrapper.querySelector(".dropdown_list2")
    const dropdownListItems =  dropdownWrapper.querySelectorAll(".dropdown_list_item2")
    const dropdownInput = dropdownWrapper.querySelector(".dropdown-input_hidden2")
    
    dropdownButtom.addEventListener("click", function() {
       
        dropdownList.classList.toggle("dropdown_list_visible2")
        this.classList.add("dropdown_button_active2");
    })
    
    dropdownListItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.stopPropagation()
            dropdownButtom.textContent = this.textContent;
            dropdownButtom.focus();
            dropdownInput.value = this.dataset.value
            dropdownList.classList.remove("dropdown_list_visible2")
            
        })
    })
    
    document.addEventListener("click", function(e) {
        if (e.target != dropdownButtom) {
            dropdownButtom.classList.remove("dropdown_button_active2")
            dropdownList.classList.remove("dropdown_list_visible2")
        }
    })
    })
    
    
    
    function boxerChange() {
        let options = document.querySelectorAll(".dropdown_list_item2");


        options.forEach(opt => {
            opt.addEventListener("click", function() {
                currentBoxer = opt.dataset.value

                document.querySelector(".res_rent").value = 1
        let inputs = document.querySelectorAll(".checkbox_inp input");
        inputs.forEach(input => {
            input.checked = false;
        })
        value = 1;
        total = cost;
        price = 0;
        totalP.textContent = document.querySelector(".data1").dataset.price + " Br";
        priceP.textContent = 0;
        arr = []
        indicates.forEach(indicate => {
            indicate.style.left = 0 + "px";
        })
        document.querySelector(".rent-wrapp__inputs").classList.remove("act_inputs")

                if (currentBoxer == "classic") {
                    document.querySelector(".rent-wrapp__image").src = "boxer images/standart1.png"
                    document.querySelector(".rent-wrapp__name").textContent = "Rocky Boxer Classic"
                    document.querySelector(".data1").dataset.price = 60
                    document.querySelector(".data2").dataset.price = 120
                    document.querySelector(".data3").dataset.price = 150
                    document.querySelector(".data4").dataset.price = 200
                    document.querySelector(".data5").dataset.price = 500
                    document.querySelector(".rent-wrapp__total").textContent = 60 + " Br"
                    document.querySelector(".product").textContent = 60
                    document.querySelector(".itogo").textContent = 60
                }
                if (currentBoxer == "standart") {
                    document.querySelector(".rent-wrapp__image").src = "boxer images/classic1.png"
                    document.querySelector(".rent-wrapp__name").textContent = "Rocky Boxer Standart"
                    document.querySelector(".data1").dataset.price = 70
                    document.querySelector(".data2").dataset.price = 140
                    document.querySelector(".data3").dataset.price = 180
                    document.querySelector(".data4").dataset.price = 230
                    document.querySelector(".data5").dataset.price = 560
                    document.querySelector(".rent-wrapp__total").textContent = 70 + " Br"
                    document.querySelector(".product").textContent = 70
                    document.querySelector(".itogo").textContent = 70
                }
                if (currentBoxer == "premium") {
                    document.querySelector(".rent-wrapp__image").src = "boxer images/premium1.png"
                    document.querySelector(".rent-wrapp__name").textContent = "Rocky Boxer Premium"
                    document.querySelector(".data1").dataset.price = 80
                    document.querySelector(".data2").dataset.price = 160
                    document.querySelector(".data3").dataset.price = 220
                    document.querySelector(".data4").dataset.price = 280
                    document.querySelector(".data5").dataset.price = 600
                    document.querySelector(".rent-wrapp__total").textContent = 80 + " Br"
                    document.querySelector(".product").textContent = 80
                    document.querySelector(".itogo").textContent = 80
                }
                if (currentBoxer == "junior") {
                    document.querySelector(".rent-wrapp__image").src = "boxer images/junior1.png"
                    document.querySelector(".rent-wrapp__name").textContent = "Rocky Boxer Junior"
                    document.querySelector(".data1").dataset.price = 50
                    document.querySelector(".data2").dataset.price = 100
                    document.querySelector(".data3").dataset.price = 120
                    document.querySelector(".data4").dataset.price = 200
                    document.querySelector(".data5").dataset.price = 450
                    document.querySelector(".rent-wrapp__total").textContent = 50 + " Br"
                    document.querySelector(".product").textContent = 50
                    document.querySelector(".itogo").textContent = 50
                }
            })
        })
        
    }
    boxerChange()


// ===
function submitFormAndBascket() {
    let perspective = document.querySelector(".perspective-block")
    let swiper = document.querySelector(".swiper")
    let wrapperProduct = document.querySelector(".wrapper_product")

    function submit() {

        let subs = document.querySelectorAll(".sub")
    
        subs.forEach(sub => {
    
            sub.addEventListener("click", function () {

                perspective.classList.add("perspective-block_act")
    
                let content = document.querySelector(".perspective-block-left");
                content.classList.toggle("perspective-block-left-act")
    
                let formAppear = document.querySelector(".perspective-block-right");
                formAppear.classList.toggle("perspective-block-right-act")
    
                // только для свайпера
                if (swiper) {
                    swiper.style.maxHeight = "675px"
                }
                if (wrapperProduct) {
                    wrapperProduct.style.maxHeight = "750px";
                }
    
                preventScroll()
    
                addOverBlock()
    
                close()
    
                scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
            })
        })
    }
    
    function submitBascket() {
    
        let subsBasckets = document.querySelectorAll(".corzina_btn")
    
        subsBasckets.forEach(item => {
    
            item.addEventListener("click", function () {
                console.log("click")
    
                perspective.classList.add("perspective-block_act")
    
                let content = document.querySelector(".perspective-block-left");
                content.classList.add("perspective-block-left-act")
    
                let formAppear = document.querySelector(".perspective-block-right2");
                formAppear.classList.add("perspective-block-right-act2")
    
                // только для свайпера
                if (swiper) {
                    swiper.style.maxHeight = "675px"
                }
                if (wrapperProduct) {
                    wrapperProduct.style.maxHeight = "750px";
                }
    
                preventScroll()
    
                addOverBlock()
    
                close()
    
                scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
            })
        })
    }
    
    function close() {
    
        window.addEventListener("click", function (event) {
    
            if (event.target.closest(".close-btn")) {
    
                onScroll()
                removeOverBlock()

                setTimeout(function () {
                    perspective.classList.remove("perspective-block_act")
                }, 500)
    
                document.querySelector(".perspective-block-right").classList.remove("perspective-block-right-act")
                document.querySelector(".perspective-block-right2").classList.remove("perspective-block-right-act2")
                document.querySelector(".perspective-block-left").classList.remove("perspective-block-left-act")
    
                // только для свайпера
                if (swiper) {
                    setTimeout(function () {
                        swiper.style.maxHeight = "8000px"
                    }, 500)
                }  
                if (wrapperProduct) {
                    setTimeout(function () {
                        wrapperProduct.style.maxHeight = "20000px"
                    }, 500)
                }
            }
    
            if (event.target.closest(".overblock")) {
    
                onScroll()
                removeOverBlock()

                setTimeout(function () {
                    perspective.classList.remove("perspective-block_act")
                }, 500)
    
                document.querySelector(".perspective-block-right").classList.remove("perspective-block-right-act")
                document.querySelector(".perspective-block-right2").classList.remove("perspective-block-right-act2")
                document.querySelector(".perspective-block-left").classList.remove("perspective-block-left-act")
    
                // только для свайпера
                if (swiper) {
                    setTimeout(function () {
                        swiper.style.maxHeight = "8000px"
                    }, 500)
                }  
                if (wrapperProduct) {
                    setTimeout(function () {
                        wrapperProduct.style.maxHeight = "20000px"
                    }, 500)
                }
            }
        })
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
    
    function addOverBlock() {
        let overBlock = document.querySelector(".overblock");
    
        overBlock.classList.add("act-overblock");
    }
    
    function removeOverBlock() {
        let overBlock = document.querySelector(".overblock");
    
        overBlock.classList.remove("act-overblock");
    }
    
    
    submit()
    submitBascket()
    
    function subBtn() {
        document.querySelector(".form").addEventListener("submit", function (event) {
            event.preventDefault()
            let subBtn = document.querySelector("#button-sub")
            subBtn.classList.add("onclic")
            setTimeout(function () {
                subBtn.classList.remove("onclic")
                subBtn.classList.add("validate")
                setTimeout(function () {
                    subBtn.classList.remove("validate")
                }, 1000)
            }, 2000)
        })
    }
    
    subBtn()
    function textarrea() {
        let arrea = document.querySelector(".textarrea");
        h = parseInt(getComputedStyle(arrea).height)
        console.log(h)
        limit = 66;
        arrea.addEventListener("input", function () {
            let text = +arrea.value.length;
            if (text > limit) {
                limit += 66;
                console.log(limit)
                arrea.style.height = h + limit / 5 + "px"
    
            }
            if (text == 0) {
                arrea.style.height = 30 + "px"
                limit = 66;
            }
        })
    }
    textarrea()
    function sendBascket() {
        let btnBascket = document.querySelector(".order_btn");
        btnBascket.addEventListener("click", function () {
            console.log("wc")
            let form2 = document.querySelector(".perspective-block-right2");
            form2.classList.remove("perspective-block-right-act2");
    
            let form1 = document.querySelector(".perspective-block-right");
            form1.classList.add("perspective-block-right-act");
        })
    }
    sendBascket()
}
submitFormAndBascket()