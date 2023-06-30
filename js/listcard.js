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

let container = document.querySelector('.container-body');
let loaderElm = document.querySelector('#loader');
let cardListElm = document.querySelector(".card-list");
let paginationElm = document.querySelector('.pagination');

container.style.marginTop = '90px';

// FUSH lên API
// var test = [
//     {
//         img: [
//             'https://i.pinimg.com/originals/28/38/b1/2838b195f8753b6ad9147b2a7bfd7281.jpg',
//             'https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%207_1688100197411.jpg?alt=media&token=960bfc9e-fb6a-439b-9ed4-28bd2f6fe548',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng Quận Từ Liêm",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Trung tâm thể thao quận Bắc Từ Liêm, đường Đức Diễn, Phường Phúc Diễn, Bắc Từ LIêm, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://images6.alphacoders.com/347/347570.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/01/28/resized/san-bong-minh-kiet-duong-noi-anh6_1611823656.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng đá Minh Kiệt Dương Nội - Hà Đông",
//         service: {
//             wifi: false,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Trường phổ thông quốc tế VIS, Aeon Mall Hà Đông, Nguyễn Hoàng Quyết, Dương Nội, Hà Đông, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://png.pngtree.com/background/20220726/original/pngtree-soccer-stadium-perspective-background-with-green-lawn-and-white-gates-picture-image_1797563.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/01/29/resized/san-bong-yen-hoa-img1_1611854871.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng Yên Hòa - Cầu Giấy",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Số 224 Trung Kính, Yên Hòa, Cầu Giấy, Hà Nội (ngã tư Trung Kính giao Dương Đình Nghệ)",
//         type: 7,
//     },
//     {
//         img: [
//             'https://img.lovepik.com/photo/40017/8904.jpg_wh860.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/07/29/resized/san-bong-dai-hoc-ha-noi_1627546389.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng Đại học Hà Nội",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: true,
//             livestream: false,
//         },
//         times: 1234567,
//         addres: "Sân bóng Đại học Hà Nội - Hà Nội.",
//         type: 7,
//     },
//     {
//         img: [
//             'https://img.lovepik.com/photo/40017/8907.jpg_wh860.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/01/27/resized/anh-dai-dien-san-bong-me-tri-thuong_1611715303.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng đá nhân tạo Tân Mỹ",
//         service: {
//             wifi: true,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Ngõ 268 Tân Mỹ, sát sân Gold Phương Đông, Mỹ Đình, Từ Liêm, Hà Nội, Việt Nam",
//         type: 7,
//     },
//     {
//         img: [
//             'https://led-ld.nichia.co.jp/img/led/lighting_shp_1_e.png',
//             'https://thegioithethao.vn/images/products_soccer/2021/01/27/resized/anh-dai-dien-san-bong-my-dinh-2_1611708639.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng cỏ nhân tạo Mỹ Đình 2",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "32 Đường Mỹ Đình, Mỹ Đình, Nam Từ Liêm, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://c4.wallpaperflare.com/wallpaper/547/764/836/the-ball-sport-logo-football-wallpaper-preview.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/09/05/resized/san-bong-10-10-phuc-xa_1630833197.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân Bóng 10-10 - Phúc Xá Ba Đình Hà Nội",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: false,
//         },
//         times: 1234567,
//         addres: "15a, Hồng Hà, Phúc Xá, Ba Đình, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop/mls-sje-prd/yvokdk8maulfekzozfme.png',
//             'https://thegioithethao.vn/images/products_soccer/2021/07/29/resized/san-bo-cong-an_1627557931.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng Bộ Công An - Thịnh Liệt - Thanh Trì",
//         service: {
//             wifi: false,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Đường Thanh Liệt, Thanh Liệt, Thanh Trì, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://treobangron.com.vn/wp-content/uploads/2022/11/background-bong-da-9.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/07/29/resized/san-bong-huyen-anh_1627557464.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng đá Huyền Anh Thanh Trì",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Sân bóng đá Huyền Anh Thanh Trì - Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://i.pinimg.com/736x/3d/f2/53/3df253dc1a9bc9857dc139f3f7ef7f36.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/07/29/resized/san-bong-son-trang_1627557708.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng Sơn Trang 2",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: true,
//             livestream: false,
//         },
//         times: 1234567,
//         addres: "Sân bóng Sơn Trang 2 - Hà Nội.",
//         type: 7,
//     },
//     {
//         img: [
//             'https://phuongnam24h.com/img_data/images/nhung-san-bong-da-dep-nhat-the-gioi.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/04/14/resized/san-bong-doan-mon-img3_1618384580.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng đá Đoan Môn",
//         service: {
//             wifi: true,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "P. Nguyễn Lân, Khương Mai, Thanh Xuân, Hà Nội.",
//         type: 7,
//     },
//     {
//         img: [
//             'https://treobangron.com.vn/wp-content/uploads/2022/11/background-bong-da-6.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/04/14/resized/san-bong-giap-nhat-1_1618384926.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng Giáp Nhất",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Sân bóng Giáp Nhất - Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://cdnmedia.webthethao.vn/uploads/media/images/files/long.nguyengia/1ec61a221c004832acb32504f9cbbab44.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/05/05/resized/san-bong-nha-van-hoa-thanh-xuan_1620208382.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng đá Nhà văn hóa Thanh Xuân",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: true,
//             livestream: false,
//         },
//         times: 1234567,
//         addres: "Nhà văn hóa Thanh Xuân, Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội",
//         type: 7,
//     },
//     // ttttt
//     {
//         img: [
//             'https://nld.mediacdn.vn/2018/6/2/kaliningrad-bb-1527916609780801000641.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/05/05/resized/san-bong-nha-van-hoa-thanh-xuan_1620208382.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng đá Nhà văn hóa ABC",
//         service: {
//             wifi: true,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Trung tâm thể thao quận Bắc Từ Liêm, đường Đức Diễn, Phường Phúc Diễn, Bắc Từ LIêm, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2022/5/3/z3387172640619ae4e6f175ab41c816f5da284fb220358-1-16515969584181661880429.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/05/05/resized/san-bong-nha-van-hoa-thanh-xuan_1620208382.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng đá Nhà văn hóa XYZ",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Trung tâm thể thao quận Bắc Từ Liêm, đường Đức Diễn, Phường Phúc Diễn, Bắc Từ LIêm, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://i.pinimg.com/originals/28/38/b1/2838b195f8753b6ad9147b2a7bfd7281.jpg',
//             'https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%207_1688100197411.jpg?alt=media&token=960bfc9e-fb6a-439b-9ed4-28bd2f6fe548',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng Quận Từ Liêm",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Trung tâm thể thao quận Bắc Từ Liêm, đường Đức Diễn, Phường Phúc Diễn, Bắc Từ LIêm, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://images6.alphacoders.com/347/347570.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/01/28/resized/san-bong-minh-kiet-duong-noi-anh6_1611823656.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng đá Minh Kiệt Dương Nội - Hà Đông",
//         service: {
//             wifi: false,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Trường phổ thông quốc tế VIS, Aeon Mall Hà Đông, Nguyễn Hoàng Quyết, Dương Nội, Hà Đông, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://png.pngtree.com/background/20220726/original/pngtree-soccer-stadium-perspective-background-with-green-lawn-and-white-gates-picture-image_1797563.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/01/29/resized/san-bong-yen-hoa-img1_1611854871.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng Yên Hòa - Cầu Giấy",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Số 224 Trung Kính, Yên Hòa, Cầu Giấy, Hà Nội (ngã tư Trung Kính giao Dương Đình Nghệ)",
//         type: 7,
//     },
//     {
//         img: [
//             'https://img.lovepik.com/photo/40017/8904.jpg_wh860.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/07/29/resized/san-bong-dai-hoc-ha-noi_1627546389.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng Đại học Hà Nội",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: true,
//             livestream: false,
//         },
//         times: 1234567,
//         addres: "Sân bóng Đại học Hà Nội - Hà Nội.",
//         type: 7,
//     },
//     {
//         img: [
//             'https://img.lovepik.com/photo/40017/8907.jpg_wh860.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/01/27/resized/anh-dai-dien-san-bong-me-tri-thuong_1611715303.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng đá nhân tạo Tân Mỹ",
//         service: {
//             wifi: true,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Ngõ 268 Tân Mỹ, sát sân Gold Phương Đông, Mỹ Đình, Từ Liêm, Hà Nội, Việt Nam",
//         type: 7,
//     },
//     {
//         img: [
//             'https://led-ld.nichia.co.jp/img/led/lighting_shp_1_e.png',
//             'https://thegioithethao.vn/images/products_soccer/2021/01/27/resized/anh-dai-dien-san-bong-my-dinh-2_1611708639.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân bóng cỏ nhân tạo Mỹ Đình 2",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "32 Đường Mỹ Đình, Mỹ Đình, Nam Từ Liêm, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://c4.wallpaperflare.com/wallpaper/547/764/836/the-ball-sport-logo-football-wallpaper-preview.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/09/05/resized/san-bong-10-10-phuc-xa_1630833197.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg'
//         ],
//         title: "Sân Bóng 10-10 - Phúc Xá Ba Đình Hà Nội",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: false,
//         },
//         times: 1234567,
//         addres: "15a, Hồng Hà, Phúc Xá, Ba Đình, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop/mls-sje-prd/yvokdk8maulfekzozfme.png',
//             'https://thegioithethao.vn/images/products_soccer/2021/07/29/resized/san-bo-cong-an_1627557931.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng Bộ Công An - Thịnh Liệt - Thanh Trì",
//         service: {
//             wifi: false,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Đường Thanh Liệt, Thanh Liệt, Thanh Trì, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://treobangron.com.vn/wp-content/uploads/2022/11/background-bong-da-9.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/07/29/resized/san-bong-huyen-anh_1627557464.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng đá Huyền Anh Thanh Trì",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Sân bóng đá Huyền Anh Thanh Trì - Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://i.pinimg.com/736x/3d/f2/53/3df253dc1a9bc9857dc139f3f7ef7f36.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/07/29/resized/san-bong-son-trang_1627557708.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng Sơn Trang 2",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: true,
//             livestream: false,
//         },
//         times: 1234567,
//         addres: "Sân bóng Sơn Trang 2 - Hà Nội.",
//         type: 7,
//     },
//     {
//         img: [
//             'https://phuongnam24h.com/img_data/images/nhung-san-bong-da-dep-nhat-the-gioi.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/04/14/resized/san-bong-doan-mon-img3_1618384580.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng đá Đoan Môn",
//         service: {
//             wifi: true,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "P. Nguyễn Lân, Khương Mai, Thanh Xuân, Hà Nội.",
//         type: 7,
//     },
//     {
//         img: [
//             'https://treobangron.com.vn/wp-content/uploads/2022/11/background-bong-da-6.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/04/14/resized/san-bong-giap-nhat-1_1618384926.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng Giáp Nhất",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Sân bóng Giáp Nhất - Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://cdnmedia.webthethao.vn/uploads/media/images/files/long.nguyengia/1ec61a221c004832acb32504f9cbbab44.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/05/05/resized/san-bong-nha-van-hoa-thanh-xuan_1620208382.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng đá Nhà văn hóa Thanh Xuân",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: true,
//             livestream: false,
//         },
//         times: 1234567,
//         addres: "Nhà văn hóa Thanh Xuân, Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội",
//         type: 7,
//     },
//     // ttttt
//     {
//         img: [
//             'https://nld.mediacdn.vn/2018/6/2/kaliningrad-bb-1527916609780801000641.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/05/05/resized/san-bong-nha-van-hoa-thanh-xuan_1620208382.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng đá Nhà văn hóa ABC",
//         service: {
//             wifi: true,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Trung tâm thể thao quận Bắc Từ Liêm, đường Đức Diễn, Phường Phúc Diễn, Bắc Từ LIêm, Hà Nội",
//         type: 7,
//     },
//     {
//         img: [
//             'https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2022/5/3/z3387172640619ae4e6f175ab41c816f5da284fb220358-1-16515969584181661880429.jpg',
//             'https://thegioithethao.vn/images/products_soccer/2021/05/05/resized/san-bong-nha-van-hoa-thanh-xuan_1620208382.jpg.webp',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/hinh-anh-san-co-bong-da-dep-nhin-tu-tren-cao_101639111.jpg',
//             // 1
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-san-co-bong-da-nhin-tu-tren-cao_101635925.jpg',
//             'https://atsport.vn/wp-content/uploads/2021/06/thi-cong-san-co-nhan-tao-tai-vinh-long-2-1080x771.jpg',
//             'https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg',
//             'https://thegioithethao.vn/upload_images/images/2021/05/18/don-vi-cung-cap-vat-lieu-va-thi-cong-san-bong-9-nguoi.jpg',
//             'https://thegioiconhantao.com.vn/wp-content/uploads/2017/05/sanxayaboury.jpg',
//             'https://xaydung.edu.vn/wp-content/uploads/san-bong-co-nhan-tao-cho-7-nguoi.jpg',
//             'https://img5.thuthuatphanmem.vn/uploads/2021/12/11/anh-dep-san-co-bong-da_101634091.jpg',
//         ],
//         title: "Sân bóng đá Nhà văn hóa XYZ",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: "Trung tâm thể thao quận Bắc Từ Liêm, đường Đức Diễn, Phường Phúc Diễn, Bắc Từ LIêm, Hà Nội",
//         type: 7,
//     },
// ];
// const randomId = function (length = 6) {
//     return Math.random()
//         .toString(36)
//         .substring(2, length + 2);
// };

// for (let i = 0; i < test.length; i++) {
//     var itemPitch = test[i];

//     var id = randomId(10);

//     itemPitch.id = id;

//     console.log(itemPitch)

//     database
//         .collection("pitch")
//         .doc(id)
//         .set(itemPitch)
//         .then(function (result) {

//         });
// }

// console.log(test);

// async function orderDetails(data) {
//     database
//         .collection("time")
//         .where("id", "==", String(data.times))
//         .get()
//         .then(async function (orderSnapshots) {
//             return orderSnapshots.docs[0].data().price;
//         });
// }

var ref = database.collection("pitch");
ref.limit()
    .get()
    .then(async function (snapshots) {
        var datas = snapshots.docs;
        var datasLength = datas.length;
        // var data = datas[0].data();
        // console.log(datas);

        
        for (let i = 0; i < datasLength; i++) {
            let data = datas[i].data();
            let serviceData = data.service;
            let timeIdData = data.times;
            
            

            let cardItemElm = document.createElement("div");
            let cardItemFooterElm = "";

            for (let key in serviceData) {
                if (serviceData[key] == true) {
                    if (key == 'livestream') {
                        cardItemFooterElm += `<div class="card-item-footer-item">
                        <i class="fa-solid fa-video"></i>
                                                <span>${key}</span>
                                            </div>`;
                    }
                    if (key == 'canteen') {
                        cardItemFooterElm += `<div class="card-item-footer-item">
                        <i class="fa-solid fa-utensils"></i>
                                                <span>${key}</span>
                                            </div>`;
                    }
                    if (key == 'parking') {
                        cardItemFooterElm += `<div class="card-item-footer-item">
                        <i class="fa-solid fa-motorcycle"></i>
                                                <span>${key}</span>
                                            </div>`;
                    }
                    if (key == 'wifi') {
                        cardItemFooterElm += `<div class="card-item-footer-item">
                        <i class="fa-solid fa-wifi"></i>
                                                <span>${key}</span>
                                            </div>`;
                    }
                }
            }

            cardItemElm.className = "grid_col-3 grid_col-4 grid_col-6-s";
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
                                            ${cardItemFooterElm}
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