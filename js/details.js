let detail = JSON.parse(localStorage.getItem('detail'));

// data
const firebaseConfig = {
    apiKey: "AIzaSyBX4mAZtMfvMi0FP045_TBDkg8iKVntIUU",
    authDomain: "do-an-c587f.firebaseapp.com",
    databaseURL: "https://do-an-c587f-default-rtdb.firebaseio.com",
    projectId: "do-an-c587f",
    storageBucket: "do-an-c587f.appspot.com",
    messagingSenderId: "928801420475",
    appId: "1:928801420475:web:94305027271621c9b7259e",
    measurementId: "G-B0R645PVW0",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();
var ref = database.collection("time");

let loaderElm = document.querySelector('.test');
let containerElm = document.querySelector('.container');
let footerElm = document.querySelector('.footer');

ref.get().then(async function(snapshots) {
    var datas = snapshots.docs;
    var datasLength = datas.length;

    getDetail(detail);

    

    // phần đặt thuê sân
    let pitchPutElm = document.querySelector('.pitch_put-body');
    for (let i = 0; i < datasLength; i++) {
        let data = datas[i].data();
        let dataId = data.id;


        // lấy giá từ data time
        if(detail.times == dataId) {
            pitchPutElm.innerHTML = `<table>
                                        <tr>
                                            <th>GIỜ TRỐNG</th>
                                            <th>LOẠI SÂN</th>
                                            <th>GIÁ THUÊ SÂN</th>
                                            <th>ĐĂNG KÝ SÂN</th>
                                        </tr>

                                        <tr>
                                            <td>05:00 - 06:30</td>
                                            <td>Sân 7</td>
                                            <td>400.000VNĐ</td>
                                            <td><button class="btn-pitch_put">ĐẶT SÂN</button></td>
                                        </tr>

                                        <tr>
                                            <td>05:00 - 06:30</td>
                                            <td>Sân 7</td>
                                            <td>400.000VNĐ</td>
                                            <td><button class="btn-pitch_put">ĐẶT SÂN</button></td>
                                        </tr>

                                        <tr>
                                            <td>05:00 - 06:30</td>
                                            <td>Sân 7</td>
                                            <td>400.000VNĐ</td>
                                            <td><button class="btn-pitch_put">ĐẶT SÂN</button></td>
                                        </tr>

                                        <tr>
                                            <td>05:00 - 06:30</td>
                                            <td>Sân 7</td>
                                            <td>400.000VNĐ</td>
                                            <td><button class="btn-pitch_put">ĐẶT SÂN</button></td>
                                        </tr>
                                        
                                    </table>`;
        }

    }
    // Click btn pitch put
    let btnPitchPut = document.querySelectorAll('.btn-pitch_put');
    btnPitchPut.forEach(function(item) {
        console.log(item)
        item.addEventListener('click', function() {
            if (localStorage.getItem('user-do-an')) {
                alert('Bạn đã đặt sân thành công!!')
            } else {
                alert('Bạn vui lòng đăng nhập tài toàn trước.')
            }
            
        })
    })
    // End click btn pitch put
});

// Tên và Ảnh sân
function getDetail(product) {
    let titleTextElm = document.querySelector('.title-text');
    let titleTexSubtElm = document.querySelector('.title-text-sub');
    let imgMainElm = document.querySelector('.pitch_img-item-main');
    let imgsSubEml = document.querySelector('.pitch_img-list-sub');
    let addres = product.addres;
    let imgs = product.img;
    let imgsLength = imgs.length;
    let addresText = '';
    
    // Phần Tên và địa chỉ sân
    for (let key in addres) {
        addresText += (addres[key] + ' - ');
    }

    titleTextElm.textContent = product.title;
    addresText = addresText.slice(0, -3);
    titleTexSubtElm.textContent = addresText;
    // End tên và địa chỉ sân

    // Phần Show IMg
    imgMainElm.innerHTML = `<img src="${imgs[0]}" alt="Ảnh sân bóng.">`;
    for (let img = 1; img < imgsLength; img++) {
        if (img <= 4) {
            imgsSubEml.innerHTML += `<div class="pitch_img-item">
                                        <img src="${imgs[img]}" alt="Ảnh sân bóng.">
                                    </div>`;
        };
        if (img > 4) {
            let btnImgListElm = document.querySelector('.btn-img-list');
            btnImgListElm.style.display = 'block';
        };
    }
    // End Show IMG
}
// End Tên và Ảnh sân

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1500);
}

function showPage() {
    loaderElm.style.display = "none";
    containerElm.style.display = "block";
    footerElm.style.marginTop = "50px";
}

myFunction();
