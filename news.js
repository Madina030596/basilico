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

//счетчик
function countdown() {
    const birthday = new Date ("December 22, 2023 00:00");
    const now = new Date;
    const diff = birthday - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const inRussia = function declOfNum(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
        return titles [(number%100 > 4 && number%100 < 20) ? 2 :
        cases[(number%10 < 5) ? number%10 : 5]]
    }

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector('#days').textContent = displayDay;

    const dayInRussia = inRussia(displayDay, ['день', 'дня', 'дней']);
    document.querySelector('#displayD').textContent = dayInRussia;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('#hours').textContent = displayHour;

    const hourInRussia = inRussia(displayHour, ['час', 'часа', 'часов']);
    document.querySelector('#displayH').textContent = hourInRussia;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('#minutes').textContent = displayMinute;

    const minuteInRussia = inRussia(displayMinute, ['минута', 'минуты', 'минут']);
    document.querySelector('#displayM').textContent = minuteInRussia;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('#seconds').textContent = displaySecond;

    const secondInRussia = inRussia(displaySecond, ['секунда', 'секунды', 'секунд']);
    document.querySelector('#displayS').textContent = secondInRussia;

    if(diff <= 0) {
        document.querySelector('#days').textContent = 0;
        document.querySelector('#hours').textContent = 0;
        document.querySelector('#minutes').textContent = 0;
        document.querySelector('#seconds').textContent = 0;
        document.querySelector('#displayD').textContent = 'дней';
        document.querySelector('#displayH').textContent = 'часов';
        document.querySelector('#displayM').textContent = 'минут';
        document.querySelector('#displayS').textContent = 'секунд';
        clearInterval(timer);
        birthdayIsStarted()
    }
}

let timer = setInterval(countdown, 1000)


const heading = document.querySelector('#title');
const gift = document.querySelector("#gift");

function birthdayIsStarted() {
    heading.textContent = 'Получите ваш подарок!';
    gift.style.display = "block";
    document.querySelector("#subtitle").style.display = "none";
    document.querySelector("#counter").style.display = "none";
}

gift.addEventListener("click", getGift);

function getGift() {
    gsap.to("#gift", {scale: 2, display: "none", opacity:0, duration: 2})
    gsap.to(".center-block__text", {delay: 2, opacity: 1, scale: 2, duration: 1.5, y: 50})
    gsap.to(".center-block input", {delay: 2, opacity: 1, scale: 2, duration: 2, y: 50})
    gsap.to(".center-block button", {delay: 2, opacity: 1, scale: 2, duration: 2.5, y: 50})
    document.querySelector("#coupon-text").style.display = "flex";
}

const btn = document.querySelector("#sendBtn");

btn.addEventListener("click", ()=> {
    document.querySelector("input").classList.add("req")

    if(document.querySelector("input").validity.valid) {
        document.querySelector("#coupon-text").style.display = "none";
        heading.style.display = "none";
        document.querySelector("#coupon-get-block").style.display = "block";
    }
})