import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

// added by angela
const menuBtn = document.querySelector('menuToggle');
const 



//added by DoDo

const cardContainer_1 = document.querySelector('.card_container_1');
let url = `https://card-advisor-json-server.onrender.com/cards`;
let cardList = [];
function init(){
    getCardList();
}
init();

function getCardList(){
    axios.get(url)
    .then(function(response){
        cardList = response.data;
        console.log(response.data);
        let str = [];
        cardList.forEach(function(item){
            console.log(item.card_name);
            console.log(item.img);
            console.log(item.general_payment.reward);
            
            console.log(item.special_payment.reward);
            console.log(item.reward_type);
            console.log(item.announcement_period);
            str +=  `
            <div class="bg-light px-10">
              <p class="h4 text-center mb-4">${item.card_name}</p>
              <img class="py-10 mb-4 img-fluid" src="../assets/images/img_cards/${item.img}" alt="${item.card_name}">
              <div class="text-center py-10 mb-4">
                <p class="display-5">1%${item.general_payment.reward}</p>
                <p class="designer-button-1-2-fs mt-1">一般消費回饋</p>
              </div>
              <div class="text-center py-10 mb-4">
                <p class="h2">有上限</p>
                <p class="designer-button-1-2-fs mt-1">回饋上限</p>
              </div>
              <div class="text-center py-10 mb-4">
                <button class="btn btn-dark display-8 align-top p-2"><span class="material-symbols-outlined align-top pe-1">
                  monetization_on
                  </span>現金</button>
                <p class="designer-button-1-2-fs mt-1">${item.reward_type}</p>
              </div>
              <div class="text-center py-10 mb-4">
                <p class="designer-button-1-5-fs">無上限</p>
                <p class="display-5">1%</p>
                <p class="designer-button-1-2-fs mt-1">海外消費回饋</p>
              </div>
              <div class="text-center py-10 mb-4">
                <p class="designer-button-1-5-fs">無上限</p>
                <p class="display-5">3%</p>
                <p class="designer-button-1-2-fs mt-1">網購消費回饋</p>
              </div>
              <div class="text-center py-10 mb-4">
                <p class="designer-button-1-5-fs">OPENPOINTS 回饋 最高</p>
                <p class="display-5">8%</p>
                <p class="designer-button-1-2-fs mt-1">行動支付回饋</p>
              </div>
              <div class="text-center py-10 mb-4">
                <p class="designer-button-1-5-fs">首次註冊玉山 Wallet，並任刷 1 筆不限金額之一般消費或玉山電子支付信用卡儲值付款</p>
                <p class="h2">刷卡金<span class="display-5"> 50 </span>元</p>
                <p class="designer-button-1-2-fs mt-1">首刷禮</p>
              </div>
              <div class="py-10">
                <p class="designer-body-1-2-fs fw-bold mb-1">年費</p>
                <p class="designer-button-1-5-fs">首年免年費，次年起年費 3000 元。
                  滿足以下條件免年費：</p>
                <ul class="designer-button-1-5-fs ps-3">
                  <li>使用帳單 e 化享免年費優惠。</li>
                  <li>每年有消費，年年免年費。</li>
                </ul>  
                <p class="designer-body-1-2-fs fw-bold mb-1">公告時間</p>
                <p class="designer-button-1-5-fs">自 2023 年 3 月 1 日至 2024 年 2 月 29 日</p>
              </div>
            </div>
            ` 

        })
        console.log(str);
        cardContainer_1.innerHTML= str
    })
    .catch(function(error){
        console.log(error.response.data)
        });
}
