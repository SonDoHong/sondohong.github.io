
var formSearchElm = document.querySelector('.header-search');
var searchInputElm = document.querySelector('#search');
console.log(ref)

formSearchElm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    console.log(database)
    // var ref = database.collection('pitch');
    ref.get().then(async function(snapshots) {
        var datas = snapshots.docs;
        var datasLength = datas.length;
        
        let valueSearch = searchInputElm.value.trim().toLowerCase();
        let cardListElm = document.querySelector(".card-list");
        let div = '';
        // console.log(datasLength)
        let result = 0;
        
        if (valueSearch != "") {
            for (let i = 0; i < datasLength; i++) {
                let data = datas[i].data();
                let dataTitle = data.title.toLowerCase();
                let dataService = data.service;
                let cardItemFooterElm = "";

                for (let key in dataService) {
                    if (dataService[key] == true) {
                        cardItemFooterElm += `<div class="card-item-footer-item">
                                                <i class="fa-solid fa-check"></i>
                                                <span>${key}</span>
                                            </div>`;
                    }
                }


                // có limit
                if (dataTitle.includes(valueSearch) == true && i < 11) {
                    div += `<div class="grid_col-3 grid_col-4 grid_col-6-s">
                                <div class="card-item">
                                    <a href="./details.html" class="card-item-link">
                                        <div class="card-item-img">
                                            <img src="${data.img[0]}" alt="">
                                        </div>

                                        <div class="card-item-infor">
                                            <h4 class="card-item-title">${data.title}</h4>

                                            
                                            <div class="card-item-price">Giá: <span>400.000 VND</span> / Trận</div>
                                            <p>Địa chỉ: Hà Nội</p>
                                        </div>

                                        <div class="card-item-footer">
                                        ${cardItemFooterElm}
                                            
                                        </div>
                                    </a>
                                </div>
                            </div>`;

                    cardListElm.innerHTML = div;
                    console.log(data)
                } else {
                    result += 1;
                    if (datasLength == result) {
                        alert('Không tìm thấy sân')
                    }
                }
                
            }
        } else {
            alert('vui lòng nhập tên sân.');
        }
    })

})