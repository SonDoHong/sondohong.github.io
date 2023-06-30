
const firebaseConfig = {
  apiKey: "AIzaSyBX4mAZtMfvMi0FP045_TBDkg8iKVntIUU",
  authDomain: "do-an-c587f.firebaseapp.com",
  databaseURL: "https://do-an-c587f-default-rtdb.firebaseio.com",
  projectId: "do-an-c587f",
  storageBucket: "do-an-c587f.appspot.com",
  messagingSenderId: "928801420475",
  appId: "1:928801420475:web:94305027271621c9b7259e",
  measurementId: "G-B0R645PVW0"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();

let loaderElm = document.querySelector('#loader');
let cardListElm = document.querySelector(".card-list");
let paginationElm = document.querySelector('.pagination');

// var database = analytics.firestore();
var ref = database.collection('pitch');
ref.limit(12).get().then(async function(snapshots) {
    var datas = snapshots.docs;
    var datasLength = datas.length;
    
    for (let i = 0; i < datasLength; i++) {
        let data = datas[i].data();
        let serviceData = data.service;
        let cardItemElm = document.createElement('div');
        let  cardItemFooter = '';
        let carouselListElm = document.querySelector('.carousel-inner');

        // Cho slider hiện 5 img
        if (i < 5) {
            carouselListElm.innerHTML += `<div class="carousel-item">
                                            <a href="./details.html" class="carousel-link">
                                                <img src="${data.img[0]}" class="d-block w-100" alt="...">
                                                <div class="carousel-caption d-md-block">
                                                    <h5>${data.title}</h5>
                                                    <p>Địa chỉ: ${data.addres}.</p>
                                                </div>
                                            </a>
                                        </div>`;

            // Gọi tất cả thẻ carousel-item
            let carouselItemsElm = document.querySelectorAll('.carousel-item');
            // Gắn class 'active' cho thẻ carousel-item đầu tiên
            carouselItemsElm[0].classList = 'carousel-item active';

            // Tạo vòng lặp để lấy ra từng thẻ carousel-item
            for (let j = 0; j < carouselItemsElm.length; j++) {
                // Bắt sự kiện click vào từng thẻ carousel-item
                carouselItemsElm[j].addEventListener('click', function(e) {
                    // console.log(this);
                    // Khi click xong thì lưu data của chính nó vào localStorage
                    window.localStorage.setItem('detail', JSON.stringify(datas[j].data()));
                })
            }
        }
        
        // Vòng lặp để lấy service ở data
        // Rồi gắn vào thẻ cardItemFooter
        for (let key in serviceData) {
            if (serviceData[key] == true) {
                if (key == 'livestream') {
                    cardItemFooter += `<div class="card-item-footer-item">
                    <i class="fa-solid fa-video"></i>
                                            <span>${key}</span>
                                        </div>`;
                }
                if (key == 'canteen') {
                    cardItemFooter += `<div class="card-item-footer-item">
                    <i class="fa-solid fa-utensils"></i>
                                            <span>${key}</span>
                                        </div>`;
                }
                if (key == 'parking') {
                    cardItemFooter += `<div class="card-item-footer-item">
                    <i class="fa-solid fa-motorcycle"></i>
                                            <span>${key}</span>
                                        </div>`;
                }
                if (key == 'wifi') {
                    cardItemFooter += `<div class="card-item-footer-item">
                    <i class="fa-solid fa-wifi"></i>
                                            <span>${key}</span>
                                        </div>`;
                }
            }
        }


        cardItemElm.className = 'grid_col-3 grid_col-4 grid_col-6-s';

        cardItemElm.innerHTML = `<div class="card-item">
                                    <a href="./details.html" class="card-item-link">
                                        <div class="card-item-img">
                                            <img src="${data.img[0]}" alt="">
                                        </div>

                                        <div class="card-item-infor">
                                            <h4 class="card-item-title">${data.title}</h4>

                                            
                                            <div class="card-item-price">Giá: <span>400.000 VND</span> / Trận</div>
                                            <p>Địa chỉ: ${data.addres}</p>
                                        </div>

                                        <div class="card-item-footer">
                                            ${cardItemFooter}
                                        </div>
                                    </a>
                                </div>`;

        cardListElm.append(cardItemElm); 

        cardItemElm.addEventListener('click', function(e) {
            // window.localStorage.clear();
            window.localStorage.setItem('detail', JSON.stringify(data));
        })
    }

});





// loading
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
    loaderElm.style.display = "none";
    cardListElm.style.display = "flex";
    if (paginationElm) {
        paginationElm.style.display = "block";
    }
}

myFunction();
