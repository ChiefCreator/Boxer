// стилизация select
document.querySelectorAll(".dropdown_select").forEach(function(dropdownWrapper) {

    const dropdownButtom = dropdownWrapper.querySelector(".dropdown_button")
    const dropdownList = dropdownWrapper.querySelector(".dropdown_list")
    const dropdownListItems =  dropdownWrapper.querySelectorAll(".dropdown_list_item")
    const dropdownInput = dropdownWrapper.querySelector(".dropdown-input_hidden")
    
    dropdownButtom.addEventListener("click", function() {
       
        dropdownList.classList.toggle("dropdown_list_visible")
        this.classList.add("dropdown_button_active");
    })
    
    dropdownListItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.stopPropagation()
            dropdownButtom.textContent = this.textContent;
            dropdownButtom.focus();
            dropdownInput.value = this.dataset.value
            dropdownList.classList.remove("dropdown_list_visible")
            
        })
    })
    
    document.addEventListener("click", function(e) {
        if (e.target != dropdownButtom) {
            dropdownButtom.classList.remove("dropdown_button_active")
            dropdownList.classList.remove("dropdown_list_visible")
        }
    })
})

// смена языка
const allLangs = ["ru","en"];
let currentLang = localStorage.getItem("language") || "ru";

const currentPathName = window.location.pathname;
console.log(currentPathName)
let currentTextObj = {};


let select = document.querySelector(".dropdown_button");
if (localStorage.getItem("select") != null) {
    select.value = localStorage.getItem("select");
} else {
    select.textContent = "RU"
}

const cards = {
    "header-sale" : {
        ru : "Продажа",
        en : "Sale"
    },
    "header-rent" : {
        ru : "Аренда",
        en : "Rent"
    },
    "header-delivery" : {
        ru : "Доставка",
        en : "Delivery"
    },
    "header-plan" : {
        ru : "Бизнес-план",
        en : "Business plan"
    },
    "header-aboutUs" : {
        ru : "О нас",
        en : "About us"
    },
    "header-order" : {
        ru : "Заказать",
        en : "Order"
    },
    "header-bascket" : {
        ru : "Корзина",
        en : "Bascket"
    },
    "header-boxers" : {
        ru : "Наши силомеры",
        en : "Our boxers"
    },
    "footer-phone" : {
        ru : "Номер телефона",
        en : "Phone number"
    },
    "footer-link" : {
        ru : "Ссылка на куфар",
        en : "Link to kufar"
    },
    "footer-email" : {
        ru : "Электронная почта",
        en : "Gmail"
    },
    "switch-lang" : {
        ru : "Выберите язык",
        en : "Choose language"
    },
    "questions" : {
        ru : "Часто задаваемые вопросы",
        en : "Frequently asked questions"
    },
    "question-title1" : {
        ru : "Как быстро окупится мой автомат? Сколько я могу заработать на силомере?",
        en : "How quickly will my machine pay off? How much can I earn on a power meter?"
    },
    "question-title2" : {
        ru : "В каких местах лучше ставить силомеры?",
        en : "In which places is it better to install force meters?"
    },
    "question-title3" : {
        ru : "Как договариваться об аренде места для аппарата?",
        en : "How do I negotiate the rental of a place for the device?"
    },
    "question-title4" : {
        ru : "Обслуживание автомата-силомера Rocky Boxer",
        en : "Maintenance of the Rocky Boxer automatic power meter"
    },
    "question-title5" : {
        ru : "Стоимость одной игры на автоматах Rocky Boxer",
        en : "The cost of one game on Rocky Boxer slot machines"
    },
    "question-title6" : {
        ru : "Какие характеристики удара измеряет автомат Rocky Boxer?",
        en : "What impact characteristics does the Rocky Boxer machine measure?"
    },
    "question-title7" : {
        ru : "Могут ли украсть или разбить автоматы, расположенные на улице и что тогда делать?",
        en : "Can the vending machines located on the street be stolen or smashed, and then what to do?"
    },
    "our-social-networks" : {
        ru : "Наши социальные сети:",
        en : "Our social networks:"
    },
    "contact-support" : {
        ru : "Связаться с техподдержкой по почте kipe122006@gmail.com",
        en : "Contact technical support by mail kipe122006@gmail.com"
    },
    "data" : {
        ru : "Отправка данных",
        en : "Sending data"
    },
    "data1" : {
        ru : "Введите имя",
        en : "Enter your name"
    },
    "data2" : {
        ru : "Введите бюджет",
        en : "Enter your budget"
    },
    "data3" : {
        ru : "Введите почту",
        en : "Enter your email"
    },
    "data4" : {
        ru : "Введите телефон",
        en : "Enter phone number"
    },
    "data5" : {
        ru : "Сообщение",
        en : "Message"
    },
    "data6" : {
        ru : "Нажимая на кнопку «Отправить» вы соглашаетесь на обработку персональных данных в соответствии с ",
        en : "By clicking on the “Submit” button you agree to the processing of personal data in accordance with "
    },
    "data7" : {
        ru : "политикой конфиденциальности.",
        en : "privacy policy."
    },
    "data8" : {
        ru : "Свернуть",
        en : "Collapse"
    },
    "cards-title" : {
        ru : "Силомеры Rocky Boxer",
        en : "Strength meters Rocky Boxer"
    },
    "cards-category" : {
        ru : "Силомеры",
        en : "strength meters"
    },
    "from" : {
        ru : "От",
        en : "From"
    },
    "cards-more" : {
        ru : "Подробнее",
        en : "More"
    },
    "spare-parts_title" : {
        ru : "Запчасти и комплектующие на силомеры Rocky Boxer",
        en : "Spare parts and accessories for Rocky Boxer power meters"
    },
    "cards-category-spare-parts" : {
        ru : "Запчасти",
        en : "spare parts"
    },
    "assembled-pear" : {
        ru : "Груша в сборе",
        en : "Assembled pear"
    },
    "leather-pear" : {
        ru : "Груша кожаная",
        en : "Leather pear"
    },
    "pear-chamber" : {
        ru : "Камера для груши",
        en : "Pear Chamber"
    },
    "glass-boxer" : {
        ru : "Стекло для Rocky Boxer Premium",
        en : "Glass for Rocky Boxer Premium"
    },
    "glass-premium" : {
        ru : "Стекло для Rocky Boxer Classic",
        en : "Glass for Rocky Boxer Classic"
    },
    "cone" : {
        ru : "Конус резиновый со шпилькой",
        en : "Rubber cone with stud"
    },
    "display-plata" : {
        ru : "Дисплейная плата",
        en : "Display board"
    },
    "power-plata" : {
        ru : "Силовая плата",
        en : "Power board"
    },
    "mat-plata" : {
        ru : "Материнская плата",
        en : "Motherboard"
    },
    "mat-plata-prem" : {
        ru : "Материнская плата Premium",
        en : "Premium Motherboard"
    },
    "start-button" : {
        ru : "Кнопка старт",
        en : "Start button"
    },
    "button" : {
        ru : "Кнопка Man/Woman",
        en : "Man/Woman button"
    },
    "transformer" : {
        ru : "Трансформатор 12 V",
        en : "Transformer 12 V"
    },
    "motor" : {
        ru : "Моторчик для опускания",
        en : "Motor for lowering"
    },
    "housing" : {
        ru : "Кожух на грушу",
        en : "Housing for a pear"
    },
    "sleeve" : {
        ru : "Рукав на грушу",
        en : "Sleeve for a pear"
    },
    "plumes" : {
        ru : "Шлейфы",
        en : "Plumes"
    },
    "sensor" : {
        ru : "Датчик",
        en : "Sensor"
    },
    "flex-button" : {
        ru : "Шлейф кнопка",
        en : "Flex button"
    },
    "power-train" : {
        ru : "Шлейф силовой",
        en : "Power train"
    },
    "bascket1" : {
        ru : "Ваша корзина",
        en : "Your cart"
    },
    "bascket2" : {
        ru : "Ваша корзина пуста. Добавьте товары в корзину",
        en : "Your basket is empty. Add items to cart"
    },
    "bascket3" : {
        ru : "Итого:",
        en : "Total:"
    },
    "bascket4" : {
        ru : "Cделать заказ",
        en : "Place an order"
    },
    "bascket5" : {
        ru : "Перейти в каталог",
        en : "Go to catalog"
    },
    "moneta" : {
        ru : "Монетоприемник",
        en : "Coin acceptor"
    },
    "kupura" : {
        ru : "Купюроприемник",
        en : "Bill acceptor"
    },
    "carta" : {
        ru : "Бесконтактная оплата",
        en : "Contactless payment"
    },
    "disp" : {
        ru : "4-значный дисплей",
        en : "4 digit display"
    },
    "rub" : {
        ru : "рублей",
        en : "rubles"
    },
    "connect" : {
        ru : "Связаться с нами",
        en : "Connect with us"
    },
    "navig" : {
        ru : "Навигация",
        en : "Navigation"
    },
}
const productClassic = {
    "header-sale" : {
        ru : "Продажа",
        en : "Sale"
    },
    "header-rent" : {
        ru : "Аренда",
        en : "Rent"
    },
    "header-delivery" : {
        ru : "Доставка",
        en : "Delivery"
    },
    "header-plan" : {
        ru : "Бизнес-план",
        en : "Business plan"
    },
    "header-aboutUs" : {
        ru : "О нас",
        en : "About us"
    },
    "header-call" : {
        ru : "Звонок",
        en : "Call"
    },
    "header-order" : {
        ru : "Заказать",
        en : "Order"
    },
    "header-boxers" : {
        ru : "Наши силомеры",
        en : "Our boxers"
    },
    "footer-phone" : {
        ru : "Номер телефона",
        en : "Phone number"
    },
    "footer-link" : {
        ru : "Ссылка на куфар",
        en : "Link to kufar"
    },
    "footer-email" : {
        ru : "Электронная почта",
        en : "Gmail"
    },
    "switch-lang" : {
        ru : "Выберите язык",
        en : "Choose language"
    },
    "header-bascket" : {
        ru : "Корзина",
        en : "Bascket"
    },
    "boxer-color" : {
        ru : "Выберите цвет",
        en : "Choose color"
    },
    "boxer-coinAcceptor" : {
        ru : "Монетоприемник (350 рублей)",
        en : "Сoin acceptor(350 rubles)"
    },
    "boxer-billAcceptor" : {
        ru : "Купюроприемник (700 рублей)",
        en : "Bill acceptor (700 rubles)"
    },
    "boxer-byCard" : {
        ru : "Оплата картой (1000 рублей)",
        en : "Payment by card (1000 rubles)"
    },
    "boxer-display" : {
        ru : "4-значный дисплей (350 рублей)",
        en : "4-digit display (350 rubles)"
    },
    "boxer-costOfGoods" : {
        ru : "Стоимость товаров",
        en : "Cost of goods"
    },
    "boxer-costOfOptions" : {
        ru : "Стоимость опций",
        en : "Cost of options"
    },
    "boxer-total" : {
        ru : "Итого",
        en : "Total"
    },
    "boxer-text" : {
        ru : "Классическая модель Rocky Boxer с обновленной базой образца 2019 года укомплектована мощной металлической рамой, усиленным пластиковым корпусом и ударопрочным стеклом дисплея — надежная гарантия безопасности для Вашего бизнеса. Аппараты представлены в 5-ти классических цветах, но Вы можете заказать и в любом другом цвете. А также возможна установка одной или нескольких платежных систем совершенно бесплат",
        en : "The classic Rocky Boxer model with an updated base for 2019 is equipped with a powerful metal frame, reinforced plastic case and impact-resistant display glass - a reliable guarantee of safety for your business. The devices are presented in 5 classic colors, but you can order in any other color. It is also possible to install one or more payment systems completely free"
    },
    "boxer-bascket" : {
        ru : "В корзину",
        en : "Add to cart"
    },
    "questions" : {
        ru : "Часто задаваемые вопросы",
        en : "Frequently asked questions"
    },
    "question-title1" : {
        ru : "Как быстро окупится мой автомат? Сколько я могу заработать на силомере?",
        en : "How quickly will my machine pay off? How much can I earn on a power meter?"
    },
    "question-title2" : {
        ru : "В каких местах лучше ставить силомеры?",
        en : "In which places is it better to install force meters?"
    },
    "question-title3" : {
        ru : "Как договариваться об аренде места для аппарата?",
        en : "How do I negotiate the rental of a place for the device?"
    },
    "question-title4" : {
        ru : "Обслуживание автомата-силомера Rocky Boxer",
        en : "Maintenance of the Rocky Boxer automatic power meter"
    },
    "question-title5" : {
        ru : "Стоимость одной игры на автоматах Rocky Boxer",
        en : "The cost of one game on Rocky Boxer slot machines"
    },
    "question-title6" : {
        ru : "Какие характеристики удара измеряет автомат Rocky Boxer?",
        en : "What impact characteristics does the Rocky Boxer machine measure?"
    },
    "question-title7" : {
        ru : "Могут ли украсть или разбить автоматы, расположенные на улице и что тогда делать?",
        en : "Can the vending machines located on the street be stolen or smashed, and then what to do?"
    },
    "our-social-networks" : {
        ru : "Наши социальные сети:",
        en : "Our social networks:"
    },
    "contact-support" : {
        ru : "Связаться с техподдержкой по почте kipe122006@gmail.com",
        en : "Contact technical support by mail kipe122006@gmail.com"
    },
    "data" : {
        ru : "Отправка данных",
        en : "Sending data"
    },
    "data1" : {
        ru : "Введите имя",
        en : "Enter your name"
    },
    "data2" : {
        ru : "Введите бюджет",
        en : "Enter your budget"
    },
    "data3" : {
        ru : "Введите почту",
        en : "Enter your email"
    },
    "data4" : {
        ru : "Введите телефон",
        en : "Enter phone number"
    },
    "data5" : {
        ru : "Сообщение",
        en : "Message"
    },
    "data6" : {
        ru : "Нажимая на кнопку «Отправить» вы соглашаетесь на обработку персональных данных в соответствии с ",
        en : "By clicking on the “Submit” button you agree to the processing of personal data in accordance with "
    },
    "data7" : {
        ru : "политикой конфиденциальности.",
        en : "privacy policy."
    },
    "data8" : {
        ru : "Свернуть",
        en : "Collapse"
    },
    "bascket1" : {
        ru : "Ваша корзина",
        en : "Your cart"
    },
    "bascket2" : {
        ru : "Ваша корзина пуста. Добавьте товары в корзину",
        en : "Your basket is empty. Add items to cart"
    },
    "bascket3" : {
        ru : "Итого:",
        en : "Total:"
    },
    "bascket4" : {
        ru : "Cделать заказ",
        en : "Place an order"
    },
    "bascket5" : {
        ru : "Перейти в каталог",
        en : "Go to catalog"
    },
    "moneta" : {
        ru : "Монетоприемник",
        en : "Coin acceptor"
    },
    "kupura" : {
        ru : "Купюроприемник",
        en : "Bill acceptor"
    },
    "carta" : {
        ru : "Бесконтактная оплата",
        en : "Contactless payment"
    },
    "disp" : {
        ru : "4-значный дисплей",
        en : "4 digit display"
    },
    "rub" : {
        ru : "рублей",
        en : "rubles"
    },
    "connect" : {
        ru : "Связаться с нами",
        en : "Connect with us"
    },
    "navig" : {
        ru : "Навигация",
        en : "Navigation"
    },
}
const boxer = {
    "header-sale" : {
        ru : "Продажа",
        en : "Sale"
    },
    "header-rent" : {
        ru : "Аренда",
        en : "Rent"
    },
    "header-delivery" : {
        ru : "Доставка",
        en : "Delivery"
    },
    "header-plan" : {
        ru : "Бизнес-план",
        en : "Business plan"
    },
    "header-aboutUs" : {
        ru : "О нас",
        en : "About us"
    },
    "header-call" : {
        ru : "Звонок",
        en : "Call"
    },
    "header-order" : {
        ru : "Заказать",
        en : "Order"
    },
    "header-bascket" : {
        ru : "Корзина",
        en : "Bascket"
    },
    "header-boxers" : {
        ru : "Наши силомеры",
        en : "Our boxers"
    },
    "footer-phone" : {
        ru : "Номер телефона",
        en : "Phone number"
    },
    "footer-link" : {
        ru : "Ссылка на куфар",
        en : "Link to kufar"
    },
    "footer-email" : {
        ru : "Электронная почта",
        en : "Gmail"
    },
    "switch-lang" : {
        ru : "Выберите язык",
        en : "Choose language"
    },
    "questions" : {
        ru : "Часто задаваемые вопросы",
        en : "Frequently asked questions"
    },
    "question-title1" : {
        ru : "Как быстро окупится мой автомат? Сколько я могу заработать на силомере?",
        en : "How quickly will my machine pay off? How much can I earn on a power meter?"
    },
    "question-title2" : {
        ru : "В каких местах лучше ставить силомеры?",
        en : "In which places is it better to install force meters?"
    },
    "question-title3" : {
        ru : "Как договариваться об аренде места для аппарата?",
        en : "How do I negotiate the rental of a place for the device?"
    },
    "question-title4" : {
        ru : "Обслуживание автомата-силомера Rocky Boxer",
        en : "Maintenance of the Rocky Boxer automatic power meter"
    },
    "question-title5" : {
        ru : "Стоимость одной игры на автоматах Rocky Boxer",
        en : "The cost of one game on Rocky Boxer slot machines"
    },
    "question-title6" : {
        ru : "Какие характеристики удара измеряет автомат Rocky Boxer?",
        en : "What impact characteristics does the Rocky Boxer machine measure?"
    },
    "question-title7" : {
        ru : "Могут ли украсть или разбить автоматы, расположенные на улице и что тогда делать?",
        en : "Can the vending machines located on the street be stolen or smashed, and then what to do?"
    },
    "our-social-networks" : {
        ru : "Наши социальные сети:",
        en : "Our social networks:"
    },
    "contact-support" : {
        ru : "Связаться с техподдержкой по почте kipe122006@gmail.com",
        en : "Contact technical support by mail kipe122006@gmail.com"
    },
    "data" : {
        ru : "Отправка данных",
        en : "Sending data"
    },
    "data1" : {
        ru : "Введите имя",
        en : "Enter your name"
    },
    "data2" : {
        ru : "Введите бюджет",
        en : "Enter your budget"
    },
    "data3" : {
        ru : "Введите почту",
        en : "Enter your email"
    },
    "data4" : {
        ru : "Введите телефон",
        en : "Enter phone number"
    },
    "data5" : {
        ru : "Сообщение",
        en : "Message"
    },
    "data6" : {
        ru : "Нажимая на кнопку «Отправить» вы соглашаетесь на обработку персональных данных в соответствии с ",
        en : "By clicking on the “Submit” button you agree to the processing of personal data in accordance with "
    },
    "data7" : {
        ru : "политикой конфиденциальности.",
        en : "privacy policy."
    },
    "data8" : {
        ru : "Свернуть",
        en : "Collapse"
    },
    "popular-attraction" : {
        ru : "Популярный аттракцион для измерения силы удара",
        en : "A popular attraction for measuring the force of impact"
    },
    "solution" : {
        ru : "Удачное решение для бизнеса с доставкой в ваш город",
        en : "A successful solution for business with delivery to your city"
    },
    "sale" : {
        ru : "Продажа",
        en : "Sale"
    },
    "engage-spare-parts" : {
        ru : "Наша компания занимается продажей силомеров и запчастей на них",
        en : "Our company is engaged in the sale of power meters and spare parts for them"
    },
    "more" : {
        ru : "Подробнее",
        en : "More"
    },
    "rent" : {
        ru : "Аренда",
        en : "Rent"
    },
    "provide-equipment" : {
        ru : "Мы предоставляем наше оборудование на праздники и мероприятия",
        en : "We provide our equipment for holidays and events"
    },
    "our-boxers" : {
        ru : "Наши силомеры",
        en : "Our power meters"
    },
    "delivery" : {
        ru : "Доставка",
        en : "Delivery"
    },
    "delivery-all" : {
        ru : "Доставка по всей Беларуси",
        en : "Delivery throughout Belarus"
    },
    "connect" : {
        ru : "Связаться с нами",
        en : "Contact us"
    },
    "our-boxers-all" : {
        ru : "Мы имеем собственные боксеры, которые прямо сейчас можно найти на улицах города",
        en : "We have our own boxers, which can be found on the streets of the city right now"
    },
    "earn" : {
        ru : "Зарабатывай с нами",
        en : "Earn money with us"
    },
    "receive" : {
        ru : "Хочешь получать пассивный доход с небольшим стартовым капиталом и быстрой окупаемостью? Тогда вендинговый бизнес для тебя",
        en : "Do you want to receive passive income with a small start-up capital and a quick payback? Then the vending business is for you"
    },
    "what-vend" : {
        ru : "Что такое вендинг?",
        en : "What is vending?"
    },
    "vend-p1" : {
        ru : "Вендинг — это продажа товаров и услуг автоматизированным способом, т.е. при помощи торговых автоматов. Свою популярность эта сфера обрела за нетребовательный и прибыльный способ продавать товары и оказывать услуги. Направлений вендингового бизнеса великое множество и постоянно появляются все новые перспективные стартапы.",
        en : "Vending is the sale of goods and services in an automated way, i.e. using vending machines. This area has gained its popularity for an undemanding and profitable way to sell goods and provide services. There are a great many areas of the vending business and new promising startups are constantly appearing."
    },
    "vend-p2" : {
        ru : "Вендинговый бизнес в России и СНГ с каждым годом набирает обороты. Получать регулярно прибыль с автономной работы аттракционов выгодно и делать это могут как компании, так и каждый гражданин старше 18 лет.",
        en : "The vending business in Russia and the CIS is gaining momentum every year. It is profitable to regularly profit from the autonomous operation of attractions and both companies and every citizen over the age of 18 can do this."
    },
    "vend-p3" : {
        ru : "Аттракционы-силомеры всегда пользуются популярностью у посетителей ночных клубов, торговых и развлекательных центров, парков, ресторанов и кафе. Начать собственный бизнес и стабильно получать пассивный доход с Rocky Boxer очень просто. Аппарат-силомер не требует заправки никакими расходными материалами, поэтому это удобный бизнес без дополнительных затрат. Единственной заботой может стать только поиск подходящего места и заключение договора аренды с его владельцем.",
        en : "Power rides are always popular with visitors to nightclubs, shopping and entertainment centers, parks, restaurants and cafes. It is very easy to start your own business and consistently receive passive income with Rocky Boxer. The power meter does not require refueling with any consumables, so it is a convenient business without additional costs. The only concern can only be finding a suitable place and concluding a lease agreement with its owner."
    },
    "vend-p4" : {
        ru : "Благодаря гибкости настроек и техническим характеристикам Rocky Boxer является одним из самых практичных и доходных аппаратов для вендинга.",
        en : "Due to the flexibility of settings and technical characteristics, the Rocky Boxer is one of the most practical and profitable vending machines."
    },
    "vend-p5" : {
        ru : "С древних времен людям свойственно соперничать друг с другом и стремиться к признанию авторитета.",
        en : "Since ancient times, people tend to compete with each other and strive for recognition of authority."
    },
    "vend-p6" : {
        ru : "Выплеснуть избыток энергии, сжечь лишние калории, произвести впечатление на девушку, посоревноваться с друзьями на спор и заодно узнать, на какую силу удара вы способны — для этих целей и создаются силомеры Rocky Boxer.",
        en : "To throw out excess energy, burn extra calories, impress a girl, compete with friends on a bet and at the same time find out what kind of impact force you are capable of — for these purposes, Rocky Boxer strength meters are created."
    },
    "vend-p7" : {
        ru : "Яркий и запоминающийся дизайн наших автоматов, минимальная амортизация, оперативная сервисная поддержка Rocky Boxer обеспечат надежную гарантию для вашего постоянного пассивного дохода!",
        en : "The bright and memorable design of our machines, minimal depreciation, and prompt service support from Rocky Boxer will provide a reliable guarantee for your permanent passive income!"
    },
    "why-boxer" : {
        ru : "Почему силомер Rocky Boxer - лучший аттракцион для спортивных развлечений",
        en : "Why the Rocky Boxer Power Meter is the best attraction for Sports Entertainment"
    },
    "card-title1" : {
        ru : "Порог входа в бизнес - до 10000 RUB",
        en : "The threshold for entering a business is up to 10,000 RUB"
    },
    "card-title2" : {
        ru : "Окупаемость 2-3 месяца",
        en : "Payback period is 2-3 months"
    },
    "card-title3" : {
        ru : "Отсутствие бумажной волокиты",
        en : "Lack of paperwork"
    },"card-title4" : {
        ru : "Отсутствие расходных материалов",
        en : "Lack of consumables"
    },
    "card-title5" : {
        ru : "Контроль 1-2 раза в неделю",
        en : "Monitoring 1-2 times a week"
    },
    "card-title6" : {
        ru : "Не нужны спецнавыки и знания",
        en : "Special skills and knowledge are not needed"
    },
    "card-p1" : {
        ru : "Для старта Вам может быть достаточно и 200 000 рублей. В наличии всегда есть новые аппараты, в том числе бюджетные модели.",
        en : "200,000 rubles may be enough for you to start. There are always new devices available, including budget models."
    },
    "card-p2" : {
        ru : "При установке в местах большого скопления людей, Ваш аппарат быстро окупится и начнет приносить чистую прибыль. В самых удачных местах можно добиться окупаемости всего за 2-3 месяца!",
        en : "When installed in crowded places, your device will quickly pay off and begin to make a net profit. In the most successful places, you can achieve payback in just 2-3 months!"
    },
    "card-p3" : {
        ru : "Договор купли-продажи мы предоставим, договориться с арендодателем чаще всего можно на словах, а для налогового учета достаточно зарегистрироваться в качестве самозанятого в приложении со смартфона.",
        en : "We will provide a purchase and sale agreement, it is most often possible to negotiate with the landlord in words, and for tax accounting it is enough to register as self-employed in the smartphone application."
    },
    "card-p4" : {
        ru : "Силомеры Rocky Boxer не требуют никаких расходных материалов для работы, имеют низкую амортизацию и редко требуют ремонта, что значительно экономит расходы.",
        en : "Rocky Boxer power meters do not require any consumables to operate, have low depreciation and rarely require repair, which significantly saves costs."
    },
    "card-p5" : {
        ru : "Для полного контроля достаточно навещать автомат 1-2 раза в неделю",
        en : "For full control, it is enough to visit the machine 1-2 times a week"
    },
    "card-p6" : {
        ru : "Использование аппаратов Rocky Boxer не предполагает специальных знаний и умений. Принцип работы простой и к каждой модели мы прилагаем паспорт со всеми подробностями по эксплуатации.",
        en : "The use of Rocky Boxer devices does not require special knowledge and skills. The principle of operation is simple and we attach a passport with all the details of operation to each model."
    },
    "plan-boxer" : {
        ru : "Бизнес план вместе с Rocky Boxer",
        en : "Business plan with Rocky Boxer"
    },
    "step1" : {
        ru : "Ищем место для установки силомера",
        en : "We are looking for a place to install a power meter"
    },
    "step2" : {
        ru : "Покупаем силомер",
        en : "We buy a power meter"
    },
    "step3" : {
        ru : "Получаем стабильно прибыль",
        en : "We get a steady profit"
    },
    "step4" : {
        ru : "Договариваемся об аренде",
        en : "We are negotiating a lease"
    },
    "step5" : {
        ru : "Настраиваем стоимость удара",
        en : "Setting up the cost of a hit"
    },
    "marka1" : {
        ru : "Марка номер 1 в Беларуси",
        en : "Brand number 1 in Belarus"
    },
    "warranty" : {
        ru : "Продукция бренда Rocky Boxer - это гарантия качества и надежности",
        en : "Rocky Boxer brand products are a guarantee of quality and reliability"
    },
    "advantages" : {
        ru : "Преимущества Rocky Boxer",
        en : "Benefits of Rocky Boxer"
    },
    "advantages-text1" : {
        ru : "В сравнении с другими вариантами вендинговых аппаратов на рынке, силомеры Рокки боксер обладают большим количеством преимуществ. Аппараты привлекают внимание публики на любом мероприятии, в ночном клубе или парке — непросто удержаться от удовольствия как следует ударить по груше и узнать результаты, особенно, если рядом присутствует публика, готовая принять вызов! Это гарантирует вам быструю окупаемость затрат на покупку аттракциона, обычно это 2-3 месяца.",
        en : "Compared to other vending machine options on the market, Rocky Boxer strength meters have many advantages. The machines attract the attention of the public at any event, in a nightclub or park - it’s not easy to resist the pleasure of hitting the bag properly and finding out the results, especially if there is an audience nearby ready to take on the challenge! This guarantees you a quick payback on the purchase of the attraction, usually 2-3 months."
    },
    "advantages-text2" : {
        ru : "Силомер Rocky Boxer можно установить в любых местах отдыха и развлечений, занимает 1 квадратный метр пространства, удобно транспортируется. Наличие козырька у автоматов позволяет использовать аппараты не только в помещении, но и на улице, защищая от непогоды. Принять участие в игре могут люди любого пола, возраста — аппарат Rocky Boxer предлагает два уровня игры — мужской и женский. А также, в нашем магазине представлена и детская модель силомера.",
        en : "The Rocky Boxer strength meter can be installed in any place of recreation and entertainment, takes up 1 square meter of space, and is convenient to transport. The presence of a canopy on the machines allows the machines to be used not only indoors, but also outdoors, protecting them from bad weather. People of any gender and age can take part in the game - the Rocky Boxer machine offers two levels of play - male and female. And also, in our store there is a children's model of the strength meter."
    },
    "advantages-text3" : {
        ru : "Заказать аппараты можно не только в базовых цветах, представленных в нашем магазине, но и в любом другом на выбор. У всех моделей есть озвучка разными голосами с шутками и комментариями, что делает процесс игры увлекательным и подстегивает интерес сыграть снова и снова.",
        en : "You can order devices not only in the basic colors presented in our store, but also in any other color of your choice. All models are voiced in different voices with jokes and comments, which makes the gameplay fun and encourages interest in playing again and again."
    },
    "advantages-text4" : {
        ru : "Практика показывает, что использование рокибоксера в развлекательном бизнесе перспективно и приносит стабильный доход. Силомер гарантирует автономность использования – необходимость проверки аппарата возникает 1-2 раза в неделю. Аттракционы изготовлены из прочных материалов, а в электронике использовано передовое оборудование. Это обеспечивает стойкость и долговечность аппарата.",
        en : "Practice shows that the use of rockyboxers in the entertainment business is promising and brings a stable income. The strength meter guarantees autonomy of use - the need to check the device occurs 1-2 times a week. The rides are made of durable materials, and the electronics use advanced equipment. This ensures the stability and durability of the device."
    },
    "advantages-text5" : {
        ru : "Мы всегда на связи с нашими клиентами, гарантируем индивидуальный подход каждому и стремимся обеспечить лучший сервис!",
        en : "We are always in touch with our clients, guarantee an individual approach to everyone and strive to provide the best service!"
    },
    "bascket1" : {
        ru : "Ваша корзина",
        en : "Your cart"
    },
    "bascket2" : {
        ru : "Ваша корзина пуста. Добавьте товары в корзину",
        en : "Your basket is empty. Add items to cart"
    },
    "bascket3" : {
        ru : "Итого:",
        en : "Total:"
    },
    "bascket4" : {
        ru : "Cделать заказ",
        en : "Place an order"
    },
    "bascket5" : {
        ru : "Перейти в каталог",
        en : "Go to catalog"
    },
    "moneta" : {
        ru : "Монетоприемник",
        en : "Coin acceptor"
    },
    "kupura" : {
        ru : "Купюроприемник",
        en : "Bill acceptor"
    },
    "carta" : {
        ru : "Бесконтактная оплата",
        en : "Contactless payment"
    },
    "disp" : {
        ru : "4-значный дисплей",
        en : "4 digit display"
    },
    "rub" : {
        ru : "рублей",
        en : "rubles"
    },
    "connect" : {
        ru : "Связаться с нами",
        en : "Connect with us"
    },
    "navig" : {
        ru : "Навигация",
        en : "Navigation"
    },
}
const productStandart = {
    "header-sale" : {
        ru : "Продажа",
        en : "Sale"
    },
    "header-rent" : {
        ru : "Аренда",
        en : "Rent"
    },
    "header-delivery" : {
        ru : "Доставка",
        en : "Delivery"
    },
    "header-plan" : {
        ru : "Бизнес-план",
        en : "Business plan"
    },
    "header-aboutUs" : {
        ru : "О нас",
        en : "About us"
    },
    "header-call" : {
        ru : "Звонок",
        en : "Call"
    },
    "header-order" : {
        ru : "Заказать",
        en : "Order"
    },
    "header-bascket" : {
        ru : "Корзина",
        en : "Bascket"
    },
    "header-boxers" : {
        ru : "Наши силомеры",
        en : "Our boxers"
    },
    "footer-phone" : {
        ru : "Номер телефона",
        en : "Phone number"
    },
    "footer-link" : {
        ru : "Ссылка на куфар",
        en : "Link to kufar"
    },
    "footer-email" : {
        ru : "Электронная почта",
        en : "Gmail"
    },
    "switch-lang" : {
        ru : "Выберите язык",
        en : "Choose language"
    },
    "boxer-color" : {
        ru : "Выберите цвет",
        en : "Choose color"
    },
    "boxer-coinAcceptor" : {
        ru : "Монетоприемник (350 рублей)",
        en : "Сoin acceptor(350 rubles)"
    },
    "boxer-billAcceptor" : {
        ru : "Купюроприемник (350 рублей)",
        en : "Bill acceptor (700 rubles)"
    },
    "boxer-byCard" : {
        ru : "Оплата картой (1000 рублей)",
        en : "Payment by card (1000 rubles)"
    },
    "boxer-display" : {
        ru : "4-значный дисплей (350 рублей)",
        en : "4-digit display (350 rubles)"
    },
    "boxer-costOfGoods" : {
        ru : "Стоимость товаров",
        en : "Cost of goods"
    },
    "boxer-costOfOptions" : {
        ru : "Стоимость опций",
        en : "Cost of options"
    },
    "boxer-total" : {
        ru : "Итого",
        en : "Total"
    },
    "boxer-bascket" : {
        ru : "В корзину",
        en : "Add to cart"
    },
    "questions" : {
        ru : "Часто задаваемые вопросы",
        en : "Frequently asked questions"
    },
    "question-title1" : {
        ru : "Как быстро окупится мой автомат? Сколько я могу заработать на силомере?",
        en : "How quickly will my machine pay off? How much can I earn on a power meter?"
    },
    "question-title2" : {
        ru : "В каких местах лучше ставить силомеры?",
        en : "In which places is it better to install force meters?"
    },
    "question-title3" : {
        ru : "Как договариваться об аренде места для аппарата?",
        en : "How do I negotiate the rental of a place for the device?"
    },
    "question-title4" : {
        ru : "Обслуживание автомата-силомера Rocky Boxer",
        en : "Maintenance of the Rocky Boxer automatic power meter"
    },
    "question-title5" : {
        ru : "Стоимость одной игры на автоматах Rocky Boxer",
        en : "The cost of one game on Rocky Boxer slot machines"
    },
    "question-title6" : {
        ru : "Какие характеристики удара измеряет автомат Rocky Boxer?",
        en : "What impact characteristics does the Rocky Boxer machine measure?"
    },
    "question-title7" : {
        ru : "Могут ли украсть или разбить автоматы, расположенные на улице и что тогда делать?",
        en : "Can the vending machines located on the street be stolen or smashed, and then what to do?"
    },
    "our-social-networks" : {
        ru : "Наши социальные сети:",
        en : "Our social networks:"
    },
    "contact-support" : {
        ru : "Связаться с техподдержкой по почте kipe122006@gmail.com",
        en : "Contact technical support by mail kipe122006@gmail.com"
    },
    "data" : {
        ru : "Отправка данных",
        en : "Sending data"
    },
    "data1" : {
        ru : "Введите имя",
        en : "Enter your name"
    },
    "data2" : {
        ru : "Введите бюджет",
        en : "Enter your budget"
    },
    "data3" : {
        ru : "Введите почту",
        en : "Enter your email"
    },
    "data4" : {
        ru : "Введите телефон",
        en : "Enter phone number"
    },
    "data5" : {
        ru : "Сообщение",
        en : "Message"
    },
    "data6" : {
        ru : "Нажимая на кнопку «Отправить» вы соглашаетесь на обработку персональных данных в соответствии с ",
        en : "By clicking on the “Submit” button you agree to the processing of personal data in accordance with "
    },
    "data7" : {
        ru : "политикой конфиденциальности.",
        en : "privacy policy."
    },
    "data8" : {
        ru : "Свернуть",
        en : "Collapse"
    },
    "boxer-text" : {
        ru : "Новая модель Rocky Boxer с обновленным дизайном и базой образца 2019 года укомплектована мощной металлической  рамой, усиленным пластиковым корпусом и ударопрочным стеклом дисплея — надежная  гарантия безопасности для Вашего бизнеса. Аппараты представлены в 5-ти классических  цветах, но Вы можете заказать и в любом другом цвете. А также возможна установка  одной или нескольких платежных систем совершенно бесплатно!",  en : "New Rocky Boxer model withupdated design and 2019 model base equipped with a powerful metalframe, reinforced plastic housing and impact-resistant display glass - reliableguarantee of security for your business. The devices are presented in 5 classiccolors, but you can order in any other color. It is also possible to installone or more payment systems completely free!"
    },
    "bascket1" : {
        ru : "Ваша корзина",
        en : "Your cart"
    },
    "bascket2" : {
        ru : "Ваша корзина пуста. Добавьте товары в корзину",
        en : "Your basket is empty. Add items to cart"
    },
    "bascket3" : {
        ru : "Итого:",
        en : "Total:"
    },
    "bascket4" : {
        ru : "Cделать заказ",
        en : "Place an order"
    },
    "bascket5" : {
        ru : "Перейти в каталог",
        en : "Go to catalog"
    },
    "moneta" : {
        ru : "Монетоприемник",
        en : "Coin acceptor"
    },
    "kupura" : {
        ru : "Купюроприемник",
        en : "Bill acceptor"
    },
    "carta" : {
        ru : "Бесконтактная оплата",
        en : "Contactless payment"
    },
    "disp" : {
        ru : "4-значный дисплей",
        en : "4 digit display"
    },
    "rub" : {
        ru : "рублей",
        en : "rubles"
    },
    "connect" : {
        ru : "Связаться с нами",
        en : "Connect with us"
    },
    "navig" : {
        ru : "Навигация",
        en : "Navigation"
    },
}
const productPremium = {
    "header-sale" : {
        ru : "Продажа",
        en : "Sale"
    },
    "header-rent" : {
        ru : "Аренда",
        en : "Rent"
    },
    "header-delivery" : {
        ru : "Доставка",
        en : "Delivery"
    },
    "header-plan" : {
        ru : "Бизнес-план",
        en : "Business plan"
    },
    "header-aboutUs" : {
        ru : "О нас",
        en : "About us"
    },
    "header-call" : {
        ru : "Звонок",
        en : "Call"
    },
    "header-order" : {
        ru : "Заказать",
        en : "Order"
    },
    "header-bascket" : {
        ru : "Корзина",
        en : "Bascket"
    },
    "header-boxers" : {
        ru : "Наши силомеры",
        en : "Our boxers"
    },
    "footer-phone" : {
        ru : "Номер телефона",
        en : "Phone number"
    },
    "footer-link" : {
        ru : "Ссылка на куфар",
        en : "Link to kufar"
    },
    "footer-email" : {
        ru : "Электронная почта",
        en : "Gmail"
    },
    "switch-lang" : {
        ru : "Выберите язык",
        en : "Choose language"
    },
    "boxer-color" : {
        ru : "Выберите цвет",
        en : "Choose color"
    },
    "boxer-coinAcceptor" : {
        ru : "Монетоприемник (350 рублей)",
        en : "Сoin acceptor(350 rubles)"
    },
    "boxer-billAcceptor" : {
        ru : "Купюроприемник (350 рублей)",
        en : "Bill acceptor (700 rubles)"
    },
    "boxer-byCard" : {
        ru : "Оплата картой (1000 рублей)",
        en : "Payment by card (1000 rubles)"
    },
    "boxer-display" : {
        ru : "4-значный дисплей (350 рублей)",
        en : "4-digit display (350 rubles)"
    },
    "boxer-costOfGoods" : {
        ru : "Стоимость товаров",
        en : "Cost of goods"
    },
    "boxer-costOfOptions" : {
        ru : "Стоимость опций",
        en : "Cost of options"
    },
    "boxer-total" : {
        ru : "Итого",
        en : "Total"
    },
    "boxer-bascket" : {
        ru : "В корзину",
        en : "Add to cart"
    },
    "questions" : {
        ru : "Часто задаваемые вопросы",
        en : "Frequently asked questions"
    },
    "question-title1" : {
        ru : "Как быстро окупится мой автомат? Сколько я могу заработать на силомере?",
        en : "How quickly will my machine pay off? How much can I earn on a power meter?"
    },
    "question-title2" : {
        ru : "В каких местах лучше ставить силомеры?",
        en : "In which places is it better to install force meters?"
    },
    "question-title3" : {
        ru : "Как договариваться об аренде места для аппарата?",
        en : "How do I negotiate the rental of a place for the device?"
    },
    "question-title4" : {
        ru : "Обслуживание автомата-силомера Rocky Boxer",
        en : "Maintenance of the Rocky Boxer automatic power meter"
    },
    "question-title5" : {
        ru : "Стоимость одной игры на автоматах Rocky Boxer",
        en : "The cost of one game on Rocky Boxer slot machines"
    },
    "question-title6" : {
        ru : "Какие характеристики удара измеряет автомат Rocky Boxer?",
        en : "What impact characteristics does the Rocky Boxer machine measure?"
    },
    "question-title7" : {
        ru : "Могут ли украсть или разбить автоматы, расположенные на улице и что тогда делать?",
        en : "Can the vending machines located on the street be stolen or smashed, and then what to do?"
    },
    "our-social-networks" : {
        ru : "Наши социальные сети:",
        en : "Our social networks:"
    },
    "contact-support" : {
        ru : "Связаться с техподдержкой по почте kipe122006@gmail.com",
        en : "Contact technical support by mail kipe122006@gmail.com"
    },
    "data" : {
        ru : "Отправка данных",
        en : "Sending data"
    },
    "data1" : {
        ru : "Введите имя",
        en : "Enter your name"
    },
    "data2" : {
        ru : "Введите бюджет",
        en : "Enter your budget"
    },
    "data3" : {
        ru : "Введите почту",
        en : "Enter your email"
    },
    "data4" : {
        ru : "Введите телефон",
        en : "Enter phone number"
    },
    "data5" : {
        ru : "Сообщение",
        en : "Message"
    },
    "data6" : {
        ru : "Нажимая на кнопку «Отправить» вы соглашаетесь на обработку персональных данных в соответствии с ",
        en : "By clicking on the “Submit” button you agree to the processing of personal data in accordance with "
    },
    "data7" : {
        ru : "политикой конфиденциальности.",
        en : "privacy policy."
    },
    "data8" : {
        ru : "Свернуть",
        en : "Collapse"
    },
    "boxer-text" : {
        ru : "Новая модель Rocky Boxer с обновленным дизайном и базой образца 2019 года укомплектована мощной металлической рамой, усиленным пластиковым корпусом и ударопрочным стеклом дисплея — надежная гарантия безопасности для Вашего бизнеса. Аппараты представлены в 5-ти классических цветах, но Вы можете заказать и в любом другом цвете. А также возможна установка одной или нескольких платежных систем совершенно бесплатно!",  en : "The new Rocky Boxer model with an updated design and base for 2019 is equipped with a powerful metal frame, reinforced plastic case and impact-resistant display glass - a reliable guarantee of safety for your business. The devices are presented in 5 classic colors, but you can order in any other color. It is also possible to install one or more payment systems completely free of charge!"
    },
    "bascket1" : {
        ru : "Ваша корзина",
        en : "Your cart"
    },
    "bascket2" : {
        ru : "Ваша корзина пуста. Добавьте товары в корзину",
        en : "Your basket is empty. Add items to cart"
    },
    "bascket3" : {
        ru : "Итого:",
        en : "Total:"
    },
    "bascket4" : {
        ru : "Cделать заказ",
        en : "Place an order"
    },
    "bascket5" : {
        ru : "Перейти в каталог",
        en : "Go to catalog"
    },
    "moneta" : {
        ru : "Монетоприемник",
        en : "Coin acceptor"
    },
    "kupura" : {
        ru : "Купюроприемник",
        en : "Bill acceptor"
    },
    "carta" : {
        ru : "Бесконтактная оплата",
        en : "Contactless payment"
    },
    "disp" : {
        ru : "4-значный дисплей",
        en : "4 digit display"
    },
    "rub" : {
        ru : "рублей",
        en : "rubles"
    },
    "connect" : {
        ru : "Связаться с нами",
        en : "Connect with us"
    },
    "navig" : {
        ru : "Навигация",
        en : "Navigation"
    },
}
const productJunior = {
    "header-sale" : {
        ru : "Продажа",
        en : "Sale"
    },
    "header-rent" : {
        ru : "Аренда",
        en : "Rent"
    },
    "header-delivery" : {
        ru : "Доставка",
        en : "Delivery"
    },
    "header-plan" : {
        ru : "Бизнес-план",
        en : "Business plan"
    },
    "header-aboutUs" : {
        ru : "О нас",
        en : "About us"
    },
    "header-order" : {
        ru : "Заказать",
        en : "Order"
    },
    "header-bascket" : {
        ru : "Корзина",
        en : "Bascket"
    },
    "header-boxers" : {
        ru : "Наши силомеры",
        en : "Our boxers"
    },
    "footer-phone" : {
        ru : "Номер телефона",
        en : "Phone number"
    },
    "footer-link" : {
        ru : "Ссылка на куфар",
        en : "Link to kufar"
    },
    "footer-email" : {
        ru : "Электронная почта",
        en : "Gmail"
    },
    "switch-lang" : {
        ru : "Выберите язык",
        en : "Choose language"
    },
    "boxer-color" : {
        ru : "Выберите цвет",
        en : "Choose color"
    },
    "boxer-coinAcceptor" : {
        ru : "Монетоприемник (350 рублей)",
        en : "Сoin acceptor(350 rubles)"
    },
    "boxer-billAcceptor" : {
        ru : "Купюроприемник (350 рублей)",
        en : "Bill acceptor (700 rubles)"
    },
    "boxer-byCard" : {
        ru : "Оплата картой (1000 рублей)",
        en : "Payment by card (1000 rubles)"
    },
    "boxer-display" : {
        ru : "4-значный дисплей (350 рублей)",
        en : "4-digit display (350 rubles)"
    },
    "boxer-costOfGoods" : {
        ru : "Стоимость товаров",
        en : "Cost of goods"
    },
    "boxer-costOfOptions" : {
        ru : "Стоимость опций",
        en : "Cost of options"
    },
    "boxer-total" : {
        ru : "Итого",
        en : "Total"
    },
    "boxer-bascket" : {
        ru : "В корзину",
        en : "Add to cart"
    },
    "questions" : {
        ru : "Часто задаваемые вопросы",
        en : "Frequently asked questions"
    },
    "question-title1" : {
        ru : "Как быстро окупится мой автомат? Сколько я могу заработать на силомере?",
        en : "How quickly will my machine pay off? How much can I earn on a power meter?"
    },
    "question-title2" : {
        ru : "В каких местах лучше ставить силомеры?",
        en : "In which places is it better to install force meters?"
    },
    "question-title3" : {
        ru : "Как договариваться об аренде места для аппарата?",
        en : "How do I negotiate the rental of a place for the device?"
    },
    "question-title4" : {
        ru : "Обслуживание автомата-силомера Rocky Boxer",
        en : "Maintenance of the Rocky Boxer automatic power meter"
    },
    "question-title5" : {
        ru : "Стоимость одной игры на автоматах Rocky Boxer",
        en : "The cost of one game on Rocky Boxer slot machines"
    },
    "question-title6" : {
        ru : "Какие характеристики удара измеряет автомат Rocky Boxer?",
        en : "What impact characteristics does the Rocky Boxer machine measure?"
    },
    "question-title7" : {
        ru : "Могут ли украсть или разбить автоматы, расположенные на улице и что тогда делать?",
        en : "Can the vending machines located on the street be stolen or smashed, and then what to do?"
    },
    "our-social-networks" : {
        ru : "Наши социальные сети:",
        en : "Our social networks:"
    },
    "contact-support" : {
        ru : "Связаться с техподдержкой по почте kipe122006@gmail.com",
        en : "Contact technical support by mail kipe122006@gmail.com"
    },
    "data" : {
        ru : "Отправка данных",
        en : "Sending data"
    },
    "data1" : {
        ru : "Введите имя",
        en : "Enter your name"
    },
    "data2" : {
        ru : "Введите бюджет",
        en : "Enter your budget"
    },
    "data3" : {
        ru : "Введите почту",
        en : "Enter your email"
    },
    "data4" : {
        ru : "Введите телефон",
        en : "Enter phone number"
    },
    "data5" : {
        ru : "Сообщение",
        en : "Message"
    },
    "data6" : {
        ru : "Нажимая на кнопку «Отправить» вы соглашаетесь на обработку персональных данных в соответствии с ",
        en : "By clicking on the “Submit” button you agree to the processing of personal data in accordance with "
    },
    "data7" : {
        ru : "политикой конфиденциальности.",
        en : "privacy policy."
    },
    "data8" : {
        ru : "Свернуть",
        en : "Collapse"
    },
    "boxer-text" : {
        ru : "Детская модель Rocky Boxer Junior предназначена для детей от 5-ти лет. Имеет привлекательный дизайн, специальную озвучку и компактные габариты в сравнении со взрослыми моделями, что обеспечивает более простую транспортировку. Аппараты представлены в 5-ти классических цветах, но Вы можете заказать и в любом другом цвете. А также возможна установка одной или нескольких платежных систем совершенно бесплатно!Нас так же ищут: Рокки Боксер детский, игровые бизнес автоматы для детей, силомер боксер детский.",  en : "The children's model Rocky Boxer Junior is intended for children from 5 years old. It has an attractive design, special voiceover and compact dimensions compared to adult models, which ensures easier transportation. The devices are presented in 5 classic colors, but you can order in any other color. It is also possible to install one or more payment systems completely free of charge! People are also looking for us: Rocky Boxer for children, gaming business machines for children, strength meter boxer for children."
    },
    "bascket1" : {
        ru : "Ваша корзина",
        en : "Your cart"
    },
    "bascket2" : {
        ru : "Ваша корзина пуста. Добавьте товары в корзину",
        en : "Your basket is empty. Add items to cart"
    },
    "bascket3" : {
        ru : "Итого:",
        en : "Total:"
    },
    "bascket4" : {
        ru : "Cделать заказ",
        en : "Place an order"
    },
    "bascket5" : {
        ru : "Перейти в каталог",
        en : "Go to catalog"
    },
    "moneta" : {
        ru : "Монетоприемник",
        en : "Coin acceptor"
    },
    "kupura" : {
        ru : "Купюроприемник",
        en : "Bill acceptor"
    },
    "carta" : {
        ru : "Бесконтактная оплата",
        en : "Contactless payment"
    },
    "disp" : {
        ru : "4-значный дисплей",
        en : "4 digit display"
    },
    "rub" : {
        ru : "рублей",
        en : "rubles"
    },
    "connect" : {
        ru : "Связаться с нами",
        en : "Connect with us"
    },
    "navig" : {
        ru : "Навигация",
        en : "Navigation"
    },
}
const delivery = {
    "header-sale" : {
        ru : "Продажа",
        en : "Sale"
    },
    "header-rent" : {
        ru : "Аренда",
        en : "Rent"
    },
    "header-delivery" : {
        ru : "Доставка",
        en : "Delivery"
    },
    "header-plan" : {
        ru : "Бизнес-план",
        en : "Business plan"
    },
    "header-aboutUs" : {
        ru : "О нас",
        en : "About us"
    },
    "header-order" : {
        ru : "Заказать",
        en : "Order"
    },
    "header-bascket" : {
        ru : "Корзина",
        en : "Bascket"
    },
    "header-boxers" : {
        ru : "Наши силомеры",
        en : "Our boxers"
    },
    "footer-phone" : {
        ru : "Номер телефона",
        en : "Phone number"
    },
    "footer-link" : {
        ru : "Ссылка на куфар",
        en : "Link to kufar"
    },
    "footer-email" : {
        ru : "Электронная почта",
        en : "Gmail"
    },
    "switch-lang" : {
        ru : "Выберите язык",
        en : "Choose language"
    },
    "how-pay" : {
        ru : "Как купить силомер",
        en : "How to buy a strength meter"
    },
    "delivery-p1" : {
        ru : "После оформления заказа на нашем сайте или по телефону, мыпредлагаем покупателям заключить договор купли-продажи. Для этого необходимы оторганизации реквизиты или паспортные данные и ФИО физического лица.",
        en : "After placing an order on our website or by phone, weWe invite buyers to enter into a purchase and sale agreement. For this you need fromorganization details or passport data and full name of the individual."
    },
    "delivery-p2" : {
        ru : "Мы оформляем договор, счет на оплату и высылаем эти документы вэлектронном виде на емейл покупателя. Юридические лица могут внести оплату на нашрасчетный счет, физические — воспользоваться любым банком для оплаты.",
        en : "We draw up an agreement, an invoice for payment and send these documents toelectronically to the buyer's email. Legal entities can make payments to ourcurrent account, physical - use any bank for payment."
    },
    "delivery-p3" : {
        ru : "После поступления оплаты, мы производим отгрузку заказа согласноусловиям договора. Оригиналы документов будут приложены к заказу и вручены в деньполучения.",
        en : "After receipt of payment, we ship the order according toterms of the contract. Original documents will be attached to the order and delivered on the dayreceiving."
    },
    "delivery-p4" : {
        ru : "Мы осуществляем бесплатную доставку нашей продукции по Минску впределах МКАД, Могилеву и до любого терминала транспортной компании.",
        en : "We provide free delivery of our products in Minsk towithin the Moscow Ring Road, Mogilev and to any transport company terminal."
    },
    "delivery-p5" : {
        ru : "В стоимость доставки входит фирменная упаковка. Далее стоимостьи условия доставки Вы можете уточнить у выбранной транспортной компании.",
        en : "Delivery costs include branded packaging. Next costYou can check delivery terms and conditions with the selected transport company."
    },
    "kinds-pay" : {
        ru : "Виды оплаты",
        en : "Payment types"
    },
    "card-title1" : {
        ru : "Наличный расчет при получении товара",
        en : "Spot payment upon receipt of goods"
    },
    "card-title2" : {
        ru : "Безналичный расчет",
        en : "Cashless payments"
    },
    "card-title3" : {
        ru : "Возможны другие варианты оплаты, оговариваются индивидуально",
        en : "Possible other payment options are discussed individually"
    },
    "card-title4" : {
        ru : "Высота 210 см",
        en : "Height 210 cm"
    },
    "card-title5" : {
        ru : "Ширина 70 см",
        en : "Width 70 cm"
    },
    "card-title6" : {
        ru : "Глубина 110 см",
        en : "Depth 110 cm"
    },
    "card-title7" : {
        ru : "Вес 130 кг",
        en : "Weight 130 kg"
    },
    "parameters" : {
        ru : "Параметры груза для самостоятельного расчета стоимости",
        en : "Cargo parameters for independent cost calculation"
    },
    "documents" : {
        ru : "Документы",
        en : "Documents"
    },
    "download1" : {
        ru : "Скачать договор (18 КБ)",
        en : "Download the contract (18 KB)"
    },
    "download2" : {
        ru : "Скачать счет на оплату (52 КБ)",
        en : "Download the invoice (52 KB)"
    },
    "download3" : {
        ru : "Скачать паспорт Rocky Boxer (52 МБ)",
        en : "Download Rocky Boxer passport (52 MB)"
    },
    "questions" : {
        ru : "Часто задаваемые вопросы",
        en : "Frequently asked questions"
    },
    "question-title1" : {
        ru : "Как быстро окупится мой автомат? Сколько я могу заработать на силомере?",
        en : "How quickly will my machine pay off? How much can I earn on a power meter?"
    },
    "question-title2" : {
        ru : "В каких местах лучше ставить силомеры?",
        en : "In which places is it better to install force meters?"
    },
    "question-title3" : {
        ru : "Как договариваться об аренде места для аппарата?",
        en : "How do I negotiate the rental of a place for the device?"
    },
    "question-title4" : {
        ru : "Обслуживание автомата-силомера Rocky Boxer",
        en : "Maintenance of the Rocky Boxer automatic power meter"
    },
    "question-title5" : {
        ru : "Стоимость одной игры на автоматах Rocky Boxer",
        en : "The cost of one game on Rocky Boxer slot machines"
    },
    "question-title6" : {
        ru : "Какие характеристики удара измеряет автомат Rocky Boxer?",
        en : "What impact characteristics does the Rocky Boxer machine measure?"
    },
    "question-title7" : {
        ru : "Могут ли украсть или разбить автоматы, расположенные на улице и что тогда делать?",
        en : "Can the vending machines located on the street be stolen or smashed, and then what to do?"
    },
    "our-social-networks" : {
        ru : "Наши социальные сети:",
        en : "Our social networks:"
    },
    "bascket1" : {
        ru : "Ваша корзина",
        en : "Your cart"
    },
    "bascket2" : {
        ru : "Ваша корзина пуста. Добавьте товары в корзину",
        en : "Your basket is empty. Add items to cart"
    },
    "bascket3" : {
        ru : "Итого:",
        en : "Total:"
    },
    "bascket4" : {
        ru : "Cделать заказ",
        en : "Place an order"
    },
    "bascket5" : {
        ru : "Перейти в каталог",
        en : "Go to catalog"
    },
    "connect" : {
        ru : "Связаться с нами",
        en : "Connect with us"
    },
    "navig" : {
        ru : "Навигация",
        en : "Navigation"
    },
}
const rent = {
    "header-sale" : {
        ru : "Продажа",
        en : "Sale"
    },
    "header-rent" : {
        ru : "Аренда",
        en : "Rent"
    },
    "header-delivery" : {
        ru : "Доставка",
        en : "Delivery"
    },
    "header-plan" : {
        ru : "Бизнес-план",
        en : "Business plan"
    },
    "header-aboutUs" : {
        ru : "О нас",
        en : "About us"
    },
    "header-call" : {
        ru : "Звонок",
        en : "Call"
    },
    "header-order" : {
        ru : "Заказать",
        en : "Order"
    },
    "header-bascket" : {
        ru : "Корзина",
        en : "Bascket"
    },
    "header-boxers" : {
        ru : "Наши силомеры",
        en : "Our boxers"
    },
    "footer-phone" : {
        ru : "Номер телефона",
        en : "Phone number"
    },
    "footer-link" : {
        ru : "Ссылка на куфар",
        en : "Link to kufar"
    },
    "footer-email" : {
        ru : "Электронная почта",
        en : "Gmail"
    },
    "switch-lang" : {
        ru : "Выберите язык",
        en : "Choose language"
    },
    "questions" : {
        ru : "Часто задаваемые вопросы",
        en : "Frequently asked questions"
    },
    "question-title1" : {
        ru : "Как быстро окупится мой автомат? Сколько я могу заработать на силомере?",
        en : "How quickly will my machine pay off? How much can I earn on a power meter?"
    },
    "question-title2" : {
        ru : "В каких местах лучше ставить силомеры?",
        en : "In which places is it better to install force meters?"
    },
    "question-title3" : {
        ru : "Как договариваться об аренде места для аппарата?",
        en : "How do I negotiate the rental of a place for the device?"
    },
    "question-title4" : {
        ru : "Обслуживание автомата-силомера Rocky Boxer",
        en : "Maintenance of the Rocky Boxer automatic power meter"
    },
    "question-title5" : {
        ru : "Стоимость одной игры на автоматах Rocky Boxer",
        en : "The cost of one game on Rocky Boxer slot machines"
    },
    "question-title6" : {
        ru : "Какие характеристики удара измеряет автомат Rocky Boxer?",
        en : "What impact characteristics does the Rocky Boxer machine measure?"
    },
    "question-title7" : {
        ru : "Могут ли украсть или разбить автоматы, расположенные на улице и что тогда делать?",
        en : "Can the vending machines located on the street be stolen or smashed, and then what to do?"
    },
    "our-social-networks" : {
        ru : "Наши социальные сети:",
        en : "Our social networks:"
    },
    "contact-support" : {
        ru : "Связаться с техподдержкой по почте kipe122006@gmail.com",
        en : "Contact technical support by mail kipe122006@gmail.com"
    },
    "data" : {
        ru : "Отправка данных",
        en : "Sending data"
    },
    "data1" : {
        ru : "Введите имя",
        en : "Enter your name"
    },
    "data2" : {
        ru : "Введите бюджет",
        en : "Enter your budget"
    },
    "data3" : {
        ru : "Введите почту",
        en : "Enter your email"
    },
    "data4" : {
        ru : "Введите телефон",
        en : "Enter phone number"
    },
    "data5" : {
        ru : "Сообщение",
        en : "Message"
    },
    "data6" : {
        ru : "Нажимая на кнопку «Отправить» вы соглашаетесь на обработку персональных данных в соответствии с ",
        en : "By clicking on the “Submit” button you agree to the processing of personal data in accordance with "
    },
    "data7" : {
        ru : "политикой конфиденциальности.",
        en : "privacy policy."
    },
    "data8" : {
        ru : "Свернуть",
        en : "Collapse"
    },
    "bascket1" : {
        ru : "Ваша корзина",
        en : "Your cart"
    },
    "bascket2" : {
        ru : "Ваша корзина пуста. Добавьте товары в корзину",
        en : "Your basket is empty. Add items to cart"
    },
    "bascket3" : {
        ru : "Итого:",
        en : "Total:"
    },
    "bascket4" : {
        ru : "Cделать заказ",
        en : "Place an order"
    },
    "bascket5" : {
        ru : "Перейти в каталог",
        en : "Go to catalog"
    },
    "rent-bascket" : {
        ru : "Аренда",
        en : "Rent"
    },
    "choose-boxer" : {
        ru : "Выберите силомер",
        en : "Select a force meter"
    },
    "rent1" : {
        ru : "Аренда силомера на срок:",
        en : "Renting a strength meter for the following period:"
    },
    "rent2" : {
        ru : "1 день",
        en : "1 day"
    },
    "rent3" : {
        ru : "3 дня",
        en : "3 days"
    },
    "rent4" : {
        ru : "5 дней",
        en : "5 days"
    },
    "rent5" : {
        ru : "неделя",
        en : "a week"
    },
    "rent6" : {
        ru : "месяц",
        en : "a month"
    },
    "rent7" : {
        ru : "Мы сдаем силомеры на мероприятия , предоставляя беконечное количество ударов (обычно такой спопсоб характерен для аренды от одного дня до целой недели). Для коммерческого использования с получением прибыли необходимо доплачивать за доп. услуги, такие как плятежные системы и дисплей. Другие сроки и условия аренды оговариваются по телефону, через почту или в соц. сетях",
        en : "We rent out force meters for events, providing an unlimited number of blows (usually this method is typical for rental from one day to a whole week). For commercial use with profit, you need to pay extra for additional. services such as beach systems and display. Other rental terms and conditions are negotiated over the phone, via mail or on social media. networks"
    },
    "boxer-coinAcceptor" : {
        ru : "Монетоприемник (20 рублей)",
        en : "Сoin acceptor (20 rubles)"
    },
    "boxer-billAcceptor" : {
        ru : "Купюроприемник (30 рублей)",
        en : "Bill acceptor (30 rubles)"
    },
    "boxer-byCard" : {
        ru : "Оплата картой (40 рублей)",
        en : "Payment by card (40 rubles)"
    },
    "boxer-display" : {
        ru : "4-значный дисплей (20 рублей)",
        en : "4-digit display (20 rubles)"
    },
    "boxer-costOfGoods" : {
        ru : "Стоимость товаров",
        en : "Cost of goods"
    },
    "boxer-costOfOptions" : {
        ru : "Стоимость опций",
        en : "Cost of options"
    },
    "boxer-total" : {
        ru : "Итого",
        en : "Total"
    },
    "boxer-bascket" : {
        ru : "В корзину",
        en : "Add to cart"
    },
    "moneta" : {
        ru : "Монетоприемник",
        en : "Coin acceptor"
    },
    "kupura" : {
        ru : "Купюроприемник",
        en : "Bill acceptor"
    },
    "carta" : {
        ru : "Бесконтактная оплата",
        en : "Contactless payment"
    },
    "disp" : {
        ru : "4-значный дисплей",
        en : "4 digit display"
    },
    "rub" : {
        ru : "рублей",
        en : "rubles"
    },
    "connect" : {
        ru : "Связаться с нами",
        en : "Connect with us"
    },
    "navig" : {
        ru : "Навигация",
        en : "Navigation"
    },
}

function checkPagePathName() {
    switch (currentPathName) {
        case "/D:/Boxer/cardOfItems.html" :
            currentTextObj = cards;
            break;
        case "/D:/Boxer/productClassic.html" :
            currentTextObj = productClassic;
            break;
        case "/D:/Boxer/index.html":
            currentTextObj = boxer;
            break;
        case "/D:/Boxer/productStandart.html":
            currentTextObj = productStandart;
            break;
        case "/D:/Boxer/productPremium.html":
            currentTextObj = productStandart;
            break;
        case "/D:/Boxer/productJunior.html":
            currentTextObj = productJunior;
            break;
        case "/D:/Boxer/delivery.html":
            currentTextObj = delivery;
            break;
        case "/D:/Boxer/rent.html":
            currentTextObj = rent;
            break;
    }

}
checkPagePathName()

function changeLang() {
    for (let key in currentTextObj) {
        let elems = document.querySelectorAll(`[data-lang=${key}]`)
        elems.forEach(elem => {
            if (elem) {
                elem.textContent = currentTextObj[key][currentLang]
            }
        })
    }
}
changeLang()

function inpChange() {
    let options = document.querySelectorAll(".dropdown_list_item");

    options.forEach(opt => {
        opt.addEventListener("click", function() {
            currentLang = opt.dataset.value
            localStorage.setItem("language",currentLang);
            localStorage.setItem("select",opt.dataset.value)
            changeLang()
        })
    })
    
}
inpChange()