import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

// added by angela

// hamburger menu
const menuBtn = document.querySelector('.menuToggle');
const menu = document.querySelector('.nav-list')

menuBtn.addEventListener("click", openMenu);

function openMenu() {
  menu.classList.toggle('show');
}

//




//added by DoDo

const cardContainer_1 = document.querySelector('.card_container_1');
const cardContainer_2 = document.querySelector('.card_container_2');
let url = `https://card-advisor-json-server.onrender.com/cards`;
let cardList = [];
let button = document.querySelector(".test-button");
let list = document.querySelector(".card-list");

function init(){
    getCardList();
    //compareCardInit()
}
init();

function getCardList(){
    axios.get(url)
    .then(function(response){
        cardList = response.data;
        console.log(response.data);
        renderCardItem1()
    })
}


//button.addEventListener("click", function () {
//document.addEventListener('DOMContentLoaded',function())
function renderCardItem1(){
        let str1 = [];
        let str = '';
        cardList.forEach(function(item){
            let rewardType_button = '';
            if(item.reward_type == "現金"){
                rewardType_button =
                `<button class="btn btn-dark display-8 align-top p-2"><span class="material-symbols-outlined align-top pe-1">
                monetization_on
                </span>現金</button>`
            }else{
                rewardType_button =
                `<button class="btn btn-dark display-8 align-top p-2"><span class="material-symbols-outlined align-top pe-1">
                change_circle
                </span>點數</button>`
            }
            
            console.log(item.card_name);
            console.log(item.img);
            console.log(item.general_payment.reward);
            console.log(item.reward_type);
            console.log(item.announcement_period);
            console.log(item.annual_fee);
            console.log(item.welcome_bonus.condition);
            console.log(item.welcome_bonus.reward)
        let online_shopping_reward_ary = [];
        let mobile_payment_reward_ary = [];
        let online_num ='';
        let mobile_num ='';
item.special_payment.forEach(function(payment){

    let keys = Object.keys(payment);
    console.log(keys);
    let typeValue = payment[keys[0]].type;
    let rewardValue = payment[keys[0]].reward;
    let limitValue = payment[keys[0]].limit;//上限值還沒取到

    console.log(typeValue);
    console.log(parseInt(rewardValue));

    if(typeValue === "online_shopping"){//如果不存在任何一個"online_shopping"，目前是undefined，要顯示'-'
        console.log(rewardValue);
        online_shopping_reward_ary.push(rewardValue);
    }
    if(typeValue === "mobile_payment"){//如果不存在任何一個"online_shopping"，目前是undefined，要顯示'-'
        console.log(rewardValue);
        mobile_payment_reward_ary.push(rewardValue);
    }
    // if(typeValue === "mobile_payment"){//如果不存在任何一個"online_shopping"，目前是undefined，要顯示'-'
    //     console.log([keys,rewardValue]);
    //     mobile_payment_reward_ary.push([keys,rewardValue]);
    // }

    

let online_numberArray = online_shopping_reward_ary.map(function (percentageString) {
    // 使用 parseFloat 解析字串並將百分比轉換為數字
    return parseFloat(percentageString);
  });
  console.log(online_numberArray)
  online_numberArray.sort(function(a,b){
    return b - a
})
console.log(online_numberArray[0]);
online_num = online_numberArray[0];

console.log(mobile_payment_reward_ary);

let mobile_numberArray = mobile_payment_reward_ary.map(function (percentageString) {
    // 使用 parseFloat 解析字串並將百分比轉換為數字
    return parseFloat(percentageString);
  });
  console.log(mobile_numberArray)
  mobile_numberArray.sort(function(a,b){
    return b[1] - a[1]
})
console.log(mobile_numberArray[0]);

mobile_num = mobile_numberArray[0];
            //console.log(item.special_payment.store[0].國外消費[reward])
            
                //Check if "國外消費" exists in special payment
                const overseaInfo = item.special_payment.find(function (payment) {
                  return payment["國外消費"];
                });
            
                if (overseaInfo) {
                console.log('海外消費回饋：',overseaInfo["國外消費"].reward);
                //   str += `<li>${overseaInfo["國外消費"].reward}</li>`;
                //   str += `<li>${overseaInfo["國外消費"].limit}</li>`;
                //   str += `<li>${overseaInfo["國外消費"].condition}</li>`;
                //   str += `<li>${overseaInfo["國外消費"].announcement_period}</li>`;
                } else {
                    console.log('海外消費回饋：','No Oversea Payment Information');
                  //str += `<li>No Oversea Payment Information</li>`;
                }
                // str += `<li></li>`;
                // str += `<li></li>`;
                // str += `<li></li>`;


                // const mobilePayment = item.special_payment.find(function(payment.type){
                //     return payment.type["mobilePayment"];
                // })
            
            //list.innerHTML = str;

        })
            
            str =  `
            <div class="bg-light px-10">
              <p class="h4 text-center mb-4">${item.card_name}</p>
              <a href='${item.url}'>
                <img class="py-10 mb-4 img-fluid" src="../assets/images/img_cards/${item.img}" alt="${item.card_name}">
              </a>
              <div class="text-center py-10 mb-4">
                <p class="display-5">${item.general_payment.reward}</p>
                <p class="designer-button-1-2-fs mt-1">一般消費回饋</p>
              </div>
              <div class="text-center py-10 mb-4">
                <p class="h2">有上限</p>
                <p class="designer-button-1-2-fs mt-1">回饋上限</p>
              </div>
              <div class="text-center py-10 mb-4">
              ${rewardType_button}
                <p class="designer-button-1-2-fs mt-1">${item.reward_type}</p>
              </div>
              <div class="text-center py-10 mb-4">
              <p class="designer-button-1-5-fs">
              
            </p>
            
                <p class="display-5"></p>
                <p class="designer-button-1-2-fs mt-1">海外消費回饋</p>
              </div>
              <div class="text-center py-10 mb-4">
                <p class="designer-button-1-5-fs">無上限</p>
                <p class="display-5">${online_num}%</p>
                <p class="designer-button-1-2-fs mt-1">網購消費回饋</p>
              </div>
              <div class="text-center py-10 mb-4">
                <p class="designer-button-1-5-fs">OPENPOINTS 回饋 最高</p>
                <p class="display-5">${mobile_num}%</p>
                <p class="designer-button-1-2-fs mt-1">行動支付回饋</p>
              </div>
              <div class="text-center py-10 mb-4">
                <p class="designer-button-1-5-fs">${item.welcome_bonus.condition}</p>
                <p class="h2">${item.welcome_bonus.reward}<span class="display-5"></span></p>
                <p class="designer-button-1-2-fs mt-1">首刷禮</p>
              </div>
              <div class="py-10">
                <p class="designer-body-1-2-fs fw-bold mb-1">年費</p>
                <p class="designer-button-1-5-fs">${item.annual_fee}</p>
                <ul class="designer-button-1-5-fs ps-3">

                </ul>  
                <p class="designer-body-1-2-fs fw-bold mb-1">公告時間</p>
                <p class="designer-button-1-5-fs">${item.announcement_period}</p>
                </div></p>
              </div>
            </div>
            ` 
            str1.push(str);

        })
        console.log(str1[1]);
        cardContainer_1.innerHTML= str1[0]
        cardContainer_2.innerHTML= str1[1]
        
    };

    // let deleteBtn1 = document.querySelector('.delete_btn_1');
    // console.log(deleteBtn1);
    // deleteBtn1.addEventListener('click',function(){
    //     cardContainer_1.innerHTML = "";
    // })
    
    // let deleteBtn2 = document.querySelector('.delete_btn_2');
    // console.log(deleteBtn2);
    // deleteBtn2.addEventListener('click',function(){
    //     cardContainer_2.innerHTML = "";
    // })
    
    // function deleteCardContainer(button,containerClass) {
    //     // 找到被點擊的按鈕的父級元素（即包含整個卡片的 <div>）
    //     var cardContainer = button.closest('.'+ containerClass);
        
    //     // 確認找到了卡片的父級元素後，將其移除
    //     if (cardContainer) {
    //       cardContainer.remove();
    //     }
    //   }

// 
    //   document.addEventListener("DOMContentLoaded", function () {
    //     // 假設 cardList 是你的資料陣列
    //     let cardListTest = [
    //         { card_name: "Card A", description: "Description A" },
    //         { card_name: "Card B", description: "信用卡" },
    //         // 其他卡片資料...
    //     ];
    
    //     // 取得搜尋框和結果區域的元素
    //     let searchInput = document.getElementById("searchInput");
    //     let searchResults = document.getElementById("searchResults");
    
    //     // 監聽搜尋框的 input 事件
    //     searchInput.addEventListener("input", function () {
    //         // 取得搜尋框的值
    //         let keyword = searchInput.value.toLowerCase();
    
    //         // 過濾符合條件的卡片
    //         let filteredCards = cardListTest.filter(function (card) {
    //             return card.card_name.toLowerCase().includes(keyword) ||
    //                    card.description.toLowerCase().includes(keyword);
    //         });
    
    //         // 顯示搜尋結果
    //         displaySearchResults(filteredCards);
    //     });
    
    //     // 顯示搜尋結果的函式
    //     function displaySearchResults(results) {
    //         // 清空先前的結果
    //         searchResults.innerHTML = "";
    
    //         // 如果有搜尋結果，顯示在結果區域中
    //         if (results.length > 0) {
    //             results.forEach(function (result) {
    //                 let cardElement = document.createElement("div");
    //                 cardElement.textContent = result.card_name + " - " + result.description;
    //                 searchResults.appendChild(cardElement);
    //             });
    //         } else {
    //             // 如果沒有符合條件的結果，顯示提示訊息
    //             searchResults.textContent = "沒有符合條件的卡片。";
    //         }
    //     }
    // });