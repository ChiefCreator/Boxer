let cartWrapper = document.querySelector(".bascket_wrap_data_wrapper")
let pCostOptions = document.querySelector(".options");
let costOptions = 0;
let i = 4;
let optCost = 0
let prices = 0
let curPrice = 0
let itogPrice = 0
let itogP = document.querySelector(".itogo");

let childCost = 0
let childOptions = 0
let total = 0

let count = 0



window.addEventListener("click", function(event) {

    let counter;
    let value;
    let inpWrapper = document.querySelector(".content_grid_inf_inputs");
    let inpt;
    let price = 0;
    
    if (event.target.dataset.id == "check") {
        inpt = event.target.closest(".checkbox_inp input")
        price = inpt.dataset.cost;
        
        if (inpt.checked == true) {
          
            changeTotal()
            itog()
        } else {
            changeTotalMinus()
            itog()
        }
    }
    
    if (event.target.dataset.action == "plus" || event.target.dataset.action == "minus") {
        let counterWrapper = event.target.closest(".counter");
        counter = counterWrapper.querySelector(".res");
        value = counter.value;
    }

    if(event.target.dataset.action == "plus") {

        counter.value = ++value;
    //     i = i + 4;
    //     const cardItemHTML = `<div class="content_grid_inf_inputs content_grid_inf_inputs2">
    //     <div class="input_div">
    //         <label class="checkbox_inp">
    //             <input type="checkbox" data-id="check" id="check${i}" data-cost="350">
    //             <label for="check${i}" class="checkbox_inp_div"></label>
    //         </label>
    //         <div class="title_for_inp">
    //             <p class="title_for_inp_p">Монетоприемник (350 рублей)</p>
    //         </div>
    //     </div>
    //     <div class="input_div">
    //         <label class="checkbox_inp">
    //             <input type="checkbox" data-id="check" id="check${i + 1}"  data-cost="700">
    //             <label for="check${i + 1}" class="checkbox_inp_div"></label>
    //         </label>
    //         <div class="title_for_inp">
    //             <p class="title_for_inp_p">Купюроприемник (700 рублей)</p>
    //         </div>
    //     </div>
    //     <div class="input_div">
    //         <label class="checkbox_inp">
    //             <input type="checkbox" data-id="check" id="check${i + 2}" data-cost="1000">
    //             <label for="check${i + 2}" class="checkbox_inp_div"></label>
    //         </label>
    //         <div class="title_for_inp">
    //             <p class="title_for_inp_p">Оплата картой (1000 рублей)</p>
    //         </div>
    //     </div>
    //     <div class="input_div">
    //         <label class="checkbox_inp">
    //             <input type="checkbox" data-id="check" id="check${i + 3}" data-cost="350">
    //             <label for="check${i + 3}" class="checkbox_inp_div"></label>
    //         </label>
    //         <div class="title_for_inp">
    //             <p class="title_for_inp_p">4-значный дисплей (350 рублей)</p>
    //         </div>
    //     </div>
    // </div>`;
    //     function parser(cardItemHTML) {
    //        var parser = new DOMParser();
    //        let teg = parser.parseFromString(cardItemHTML, 'text/html');
    //        let div = teg.querySelector(".content_grid_inf_inputs");
    //        inpWrapper.insertAdjacentElement('beforebegin', div)
    //     }
    //     parser(cardItemHTML);
        itog()
        
    }
    let inpsDivs = document.querySelector(".content_grid_inf_inputs2")
    if(event.target.dataset.action == "minus") {

        

        if (parseInt(counter.value) > 1) {
            
            counter.value = --value;
            // deleteCost()
            // inpsDivs.remove()
            itog()
        } else if(event.target.closest(".bascket_wrap_data_wrapper") && (parseInt(counter.value) === 1)) {
            console.log(optCost)
            event.target.closest(".bascket_wrap_data").remove();
            toggleCartStatus();
        total -= (childCost + opt()) * +count;

        let totalPriceEl = document.querySelector(".itog_num_p");
        totalPriceEl.textContent = `${total} RUB`
        }
    }

    if (event.target.closest(".bascket_wrap_data_wrapper") && event.target.closest(".counter")) {
    }


    function opt() {
        let inputAll = document.querySelectorAll(".checkbox_inp input")
               inputAll.forEach(item => {
                   if (item.checked == true) {
                        optCost += parseInt(item.dataset.cost);
                        console.log(optCost)
                   }
               })
               return optCost
    }

    function changeTotal() {
        costOptions += +price;
        pCostOptions.textContent = costOptions
    }

    function changeTotalMinus() {
        costOptions -= +price;
        pCostOptions.textContent = costOptions
    }

    function deleteCost() {
        let inps = inpsDivs.querySelectorAll("input");
        inps.forEach(inp => {
            if (inp.checked == true) {
                dataCost = parseInt(inp.dataset.cost);
                
                inp.checked == false;
                costOptions = costOptions - +dataCost
                pCostOptions.textContent = costOptions
            }
        })
    }
    function itog() {
        let counterVal = document.querySelector(".res").value
        let costProductP = 8000
        itogPrice = (+costOptions + costProductP) * +counterVal;
        itogP.textContent = `${itogPrice}`
    }
    function itog2() {
        let wrapps = document.querySelectorAll(".bascket_wrap_data")
        wrapps.forEach(wrap => {
            let counterVal = wrap.querySelector(".res").value
            let costProductP = 8000
            itogPrice = (+costOptions + costProductP) * +counterVal;
            let totalPriceEl = document.querySelector(".itog_num_p");
            totalPriceEl.textContent = `${itogPrice * +counterVal} RUB`
        })
        
    }
  

})
// function itog() {
//     let itog = costOptions + 8000;
//     let itogP = document.querySelector(".itogo");
//     let productP = document.querySelector(".product")
//     let costProductP = 8000
    
//     let inputAll = document.querySelectorAll(".checkbox_inp input")
//     console.log(inputAll)
//     if (inputAll.length == 4) {
//         itogP.textContent = `${itog}`
//         productP.textContent = `${costProductP}`
//     }
//     if (inputAll.length == 8) {
//         itogP.textContent = `${itog + 8000}`
//         productP.textContent = `${costProductP * 2}`
//     }
//     if (inputAll.length == 12) {
//         itogP.textContent = `${itog + 16000}`
//         productP.textContent = `${costProductP * 3}`
//     }
// }




window.addEventListener("click", function(event) {
    optCost = 0
    
    if (event.target.closest(".to_bascket")) {
        
        let card = event.target.closest(".wrapper_grid_inf");

        let productInfo = {
            id:card.dataset.id,
            imgSrc:card.querySelector(".color").getAttribute("src"),
            title:card.querySelector(".content_grid_inf_title_p").textContent,
            price:card.querySelector(".content_grid_inf_cost_p").textContent,
            counter:card.querySelector(".res").value,
        }
        
        // let itemInCart = cartWrapper.querySelector(`#${productInfo.id}`);

        // если товар в корзине
        // if (itemInCart) {
        //     let counterElement = itemInCart.querySelector(".res");
        //     counterElement.value = +counterElement.value + +productInfo.counter;
        // } 
        // если товара нет в корзине
        // else {
            const cardItemHTML = `<div class="bascket_wrap_data" id="${productInfo.id}">
                             <div class="bascket_wrap_data_content">
                                 <div class="bascket_imgdiv">
                                     <img class="bascket_img" src="${productInfo.imgSrc}">
                                 </div>
                                 <div class="bascket_names_wrapper">
                                     <div class="bascket_names">
                                         <div class="bascket_names_name">
                                             <p class="bascket_names_name_p">${productInfo.title}</p>
                                         </div>
                                         <div class="bascket_names_cost">
                                             <p class="bascket_names_cost_p">${productInfo.price}</p>
                                         </div>
                                     </div>
                                     <div class="counter">
                                         <div class="counter_minus" data-action="minus">
                                         </div>
                                         <div class="counter_res">
                                             <input class="res" type="text" value="${productInfo.counter}">
                                         </div>
                                         <div class="counter_plus" data-action="plus">
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div class="gen_cost">
                        <ul class="gen_cost_ul">
                            <li class="plus_p moneta_p">+ Монетоприемник (350 руб)</li>
                            <li class="plus_p kupura_p">+ Купюроприемник (700руб)</li>
                            <li class="plus_p carta_p">+ Бесконтактная оплата (1000 руб)</li>
                            <li class="plus_p display_p">+ 4-значный дисплей (350руб)</li>
                        </ul>
                    </div>
                         </div>`;
        function parser(cardItemHTML) {
           var parser = new DOMParser();
           let teg = parser.parseFromString(cardItemHTML, 'text/html');
           let div = teg.querySelector(".bascket_wrap_data");
           cartWrapper.append(div);


           let inputAll = document.querySelectorAll(".checkbox_inp input")
           inputAll.forEach(item => {
               if (item.checked == true) {
                    let data = item.dataset.p
                    let ps = div.querySelectorAll(`.${data}`);
                    ps.forEach(p => {
                        p.classList.add("act_p")
                        optCost += parseInt(item.dataset.cost);
                    })
               }
           })
        }
        parser(cardItemHTML)


        
        // сбрасываем счетчик при добавлении товара в корзину
        card.querySelector(".res").value = 1

            let inputs = document.querySelectorAll(".checkbox_inp input");
            inputs.forEach(input => {
                input.checked = false;
            })

        costOptions = 0
        pCostOptions.textContent = 0
        prices = 0
        // itog()

        toggleCartStatus();
        // totalPrice();
        totalBascket()
        itogPrice = 0
        itogP.textContent = `8000`
        // optCost = 0
        // }
    }
})

function toggleCartStatus() {
    let cartWrapper = document.querySelector(".bascket_wrap_data_wrapper");
    let cartEmpty = document.querySelector(".empty")

    if (cartWrapper.children.length > 1) {
        cartEmpty.classList.add("empty_none");
    }else {
        cartEmpty.classList.remove("empty_none");
    }
}

function totalBascket() {
    let wrapper = document.querySelector(".bascket_wrap_data_wrapper");
    let lastChild = wrapper.lastChild
    console.log(lastChild)
        childCost = parseInt(lastChild.querySelector(".bascket_names_cost_p").textContent)
        count = lastChild.querySelector(".res").value

        total += (childCost + +optCost) * +count;
        let totalPriceEl = document.querySelector(".itog_num_p");
        totalPriceEl.textContent = `${total} RUB`
}
