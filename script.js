gsap.from(".slogan-container__slogan", {opacity: 0, duration: 1.5, delay: 1.5})
gsap.from(".header__link", {opacity: 0, duration: 1, delay: 0.5, stagger: 0.5})
gsap.from(".news-section", {duration: 0.5, stagger: 0.5, delay: 0.5, opacity: 0})

//кнопка прокрутки страницы вверх
const upBtn = document.querySelector("#upBtn");

window.onscroll = function() {scrollFunction()}; //когда страница опускается вниз на 400px, показывется кнопка

function scrollFunction() {
    if(document.bodyscrollTop>400 || document.documentElement.scrollTop > 400) {
        upBtn.style.display = "block";
    }
    else {
        upBtn.style.display = "none";
    }
}

upBtn.addEventListener("click", ()=>{ //при нажатии на кнопку страница поднимается вверх
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
})

//шаблон для ввода номера телефона
document.querySelector("#phone-mask").addEventListener("click", ()=> {
    let phoneMask = IMask(
        document.querySelector('#phone-mask'), {
            mask: '+{7}(000)000-00-00',
            lazy: false
    });
})

document.querySelector("#phone-maskTwo").addEventListener("click", ()=> {
    let phoneMaskTwo = IMask(
        document.querySelector('#phone-maskTwo'), {
            mask: '+{7}(000)000-00-00',
            lazy: false
    });
})

//ограничиваем выбор даты, начиная с текущего дня
// datePickerId.min = new Date().toISOString().split("T")[0]; - это 1й способ
//2й способ
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
} 

today = yyyy + '-' + mm + '-' + dd;
document.querySelector("#datePickerId").setAttribute("min", today);


//кнопка резервации
const reservationBtn = document.querySelector("#reservationBtn");

const reqInpAll = document.querySelectorAll("#requiredInput");
const phoneMask = document.querySelector("#phone-mask");
const datePicker = document.querySelector("#datePickerId");


for(let i = 0; i < reqInpAll.length; i++){
    reqInp = reqInpAll[i];
}

reservationBtn.addEventListener('click', ()=> {
    phoneMask.classList.add("req");

    datePicker.classList.add("req");

    reqInpAll.forEach(function(item) {
        item.classList.add("req");
    })

    if(reqInpAll[0].validity.valid && reqInpAll[1].validity.valid && reqInpAll[2].validity.valid && phoneMask.validity.valid && datePicker.validity.valid) {
        Swal.fire({
            title: 'Благодарим вас!',
            text: 'Наш менеджер скоро свяжется с вами для уточнения деталей.',
            confirmButtonColor: '#2B3A41',
        })

        phoneMask.classList.remove("req");
        phoneMask.value = "";

        datePicker.classList.remove("req");
        datePicker.value = "";

        reqInpAll.forEach(function(item) {
            item.classList.remove("req");
            item.value = "";
        })

        document.querySelector("#notRequired").value = "";
    }
    })


//кнопка обратной связи
const sendBtn = document.querySelector("#sendBtn");
const reqInpTwoAll = document.querySelectorAll("#requiredInputTwo");
const phoneMaskTwo = document.querySelector("#phone-maskTwo");

sendBtn.addEventListener("click", ()=> {
            phoneMaskTwo.classList.add("req");
        
            reqInpTwoAll.forEach(function(item) {
                item.classList.add("req")
            } ) 

            if(reqInpTwoAll[0].validity.valid && reqInpTwoAll[1].validity.valid && reqInpTwoAll[2].validity.valid && phoneMaskTwo.validity.valid) {
                Swal.fire({
                    text: 'Ваше обращение успешно отправлено.',
                    confirmButtonColor: '#2B3A41',
                    width: '25em',
                    padding: '0 0 1em'
                })

                phoneMaskTwo.value = "";
                phoneMaskTwo.classList.remove("req");

                reqInpTwoAll.forEach(function(item) {
                    item.classList.remove("req");
                    item.value = "";
                } ) 
            }
    })


//меню бургер
const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");

headerBurger.addEventListener("click", ()=> {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");

    document.querySelector("body").classList.toggle("lock"); //чтобы контент при открытом меню не прокручивался
})


document.querySelectorAll(".header__link").forEach(item => {
    item.addEventListener("click", ()=> {
        headerBurger.classList.remove("active");
        headerMenu.classList.remove("active");
        document.querySelector("body").classList.remove("lock"); 
    })
})