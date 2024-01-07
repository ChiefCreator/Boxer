// обвертка для вставки в корзину элементов
let cartWrapper = document.querySelector(".bascket_wrap_data_wrapper");

window.addEventListener("click", function(event) {

    let counter;
    let value;

    if (event.target.dataset.action == "plus" || event.target.dataset.action == "minus") {
        let counterWrapper = event.target.closest(".counter");
        counter = counterWrapper.querySelector(".res");
        value = counter.value;
    }

    if(event.target.dataset.action == "plus") {

        counter.value = ++value;
    }

    if(event.target.dataset.action == "minus") {

        if (parseInt(counter.value) > 1) {
            
            counter.value = --value;
        } else if(event.target.closest(".bascket_wrap_data_wrapper") && (parseInt(counter.value) === 1)) {
         
            event.target.closest(".bascket_wrap_data").remove();
            toggleCartStatus();
            totalPrice();
            
        }
    }

    if (event.target.closest(".bascket_wrap_data_wrapper") && event.target.closest(".counter")) {
        totalPrice();
    }
})

window.addEventListener("click", function(event) {
    
    if (event.target.closest(".to_bascket")) {
        
        let card = event.target.closest(".catalog_item");

        let productInfo = {
            id:card.dataset.id,
            imgSrc:card.querySelector(".foto").getAttribute("src"),
            title:card.querySelector(".catal_name_p").textContent,
            price:card.querySelector(".cost_p").textContent,
            counter:card.querySelector(".res").value,
        }

        let itemInCart = cartWrapper.querySelector(`#${productInfo.id}`);
        // если товар в корзине
        if (itemInCart) {
            let counterElement = itemInCart.querySelector(".res");
            counterElement.value = +counterElement.value + +productInfo.counter;
        } 
        // если товара нет в корзине
        else {
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
                         </div>`;
        function parser(cardItemHTML) {
           var parser = new DOMParser();
           let teg = parser.parseFromString(cardItemHTML, 'text/html');
           let div = teg.querySelector(".bascket_wrap_data");
           cartWrapper.append(div);

        }
        parser(cardItemHTML);
        }

        // сбрасываем счетчик при добавлении товара в корзину
        card.querySelector(".res").value = 1

        
        toggleCartStatus();
        totalPrice();
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

function totalPrice() {
    let cartWrapper = document.querySelector(".bascket_wrap_data_wrapper");
    let cartItems = cartWrapper.querySelectorAll(".bascket_wrap_data");
    let total = 0;
    let totalPriceEl = document.querySelector(".itog_num_p");

    cartItems.forEach(item => {
        let count = item.querySelector(".res").value;
        let price = parseInt(item.querySelector(".bascket_names_cost_p").textContent);
        let curPrice = +price * +count;
        total += curPrice;
    })

    totalPriceEl.textContent = `${total} RUB`
}


