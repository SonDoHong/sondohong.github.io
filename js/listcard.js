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

// FUSH lên API
// var test = [
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng Viettel",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng đá Minh Kiệt Dương Nội - Hà Đông",
//         service: {
//             wifi: true,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//         ],
//         title: "Sân bóng Yên Hòa - Cầu Giấy",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng Đại học Hà Nội",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: false,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng đá nhân tạo Tân Mỹ",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng cỏ nhân tạo Mỹ Đình 2",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: false,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân Bóng 10-10 - Phúc Xá Ba Đình Hà Nội",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng Bộ Công An - Thịnh Liệt - Thanh Trì",
//         service: {
//             wifi: true,
//             parking: false,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng đá Huyền Anh Thanh Trì",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng Sơn Trang 2",
//         service: {
//             wifi: true,
//             parking: false,
//             canteen: false,
//             livestream: false,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng đá Đoan Môn",
//         service: {
//             wifi: false,
//             parking: true,
//             canteen: false,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng Giáp Nhất",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng đá Nhà văn hóa Thanh Xuân",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng đá VSA",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng đá Đầm Hồng 2",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
//         type: 7,
//     },
//     {
//         img: [
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2018_1686210061703.jpg?alt=media&token=81ab2bcc-9ee9-47b6-9590-e19456ccc4a6&_gl=1*l0o7tt*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAxNzAuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2012_1686210265322.jpg?alt=media&token=1ca0e75d-0333-4120-8efe-43d59953e23e",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2011_1686210257071.jpg?alt=media&token=90091b38-f0de-423d-a4bd-9c24d27e6aea&_gl=1*2z08u9*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAyOTYuMC4wLjA.",
//             "https://firebasestorage.googleapis.com/v0/b/do-an-c587f.appspot.com/o/images%2FS%C3%A2n%20b%C3%B3ng%2010_1686210245738.jpg?alt=media&token=c874502e-0785-4b04-9a84-04525e05e7aa&_gl=1*lgsdjj*_ga*MTY5NTYwMDk5OC4xNjg1OTM5ODY4*_ga_CW55HF8NVT*MTY4NjIwNjcwNi4xNC4xLjE2ODYyMTAzMjkuMC4wLjA.",
//         ],
//         title: "Sân bóng đá Đầm Hồng 1",
//         service: {
//             wifi: true,
//             parking: true,
//             canteen: true,
//             livestream: true,
//         },
//         times: 1234567,
//         addres: {
//             city: "Hà Nội",
//             district: "Đông Anh",
//         },
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

async function orderDetails(data) {
    database
        .collection("time")
        .where("id", "==", String(data.times))
        .get()
        .then(async function (orderSnapshots) {
            return orderSnapshots.docs[0].data().price;
        });
}

var ref = database.collection("pitch");
ref.limit(12)
    .get()
    .then(async function (snapshots) {
        var datas = snapshots.docs;
        var datasLength = datas.length;
        // var data = datas[0].data();
        // console.log(data);

        let cardListElm = document.querySelector(".card-list");
        for (let i = 0; i < datasLength; i++) {
            let data = datas[i].data();
            let serviceData = data.service;
            let timeIdData = data.times;
            

            let cardItemElm = document.createElement("div");
            let cardItemFooterElm = "";


            for (let key in serviceData) {
                if (serviceData[key] == true) {
                    cardItemFooterElm += `<div class="card-item-footer-item">
                                            <i class="fa-solid fa-check"></i>
                                            <span>${key}</span>
                                        </div>`;
                }
            }

            cardItemElm.className = "grid_col-3 grid_col-4 grid_col-6-s";
            cardItemElm.innerHTML = `<div class="card-item">
                                    <a href="./details.html" class="card-item-link">
                                        <div class="card-item-img">
                                            <img src="${data.img[1]}" alt="">
                                        </div>

                                        <div class="card-item-infor">
                                            <h4 class="card-item-title">${data.title}</h4>

                                            
                                            <div class="card-item-price">Giá: <span>400.000 VND</span> / Trận</div>
                                            <p>Địa chỉ: ${data.addres.district} - ${data.addres.city}</p>
                                        </div>

                                        <div class="card-item-footer">
                                            ${cardItemFooterElm}
                                        </div>
                                    </a>
                                </div>`;

            cardListElm.append(cardItemElm);

            cardItemElm.addEventListener('click', function(e) {
                console.log(this);
                // window.localStorage.clear();
                window.localStorage.setItem('detail', JSON.stringify(data));
            })
        }
    });
