let getAllProduct = async ()=>{
    let result = await axios({
        url : `https://shop.cyberlearn.vn/api/Product`,
        method: "GET",
    })
    console.log(result.data.content);
    document.querySelector('#Product-list').innerHTML = renderHTML(result.data.content);
}
getAllProduct();
let renderHTML = (arrProd) => {
    let strHTML ='';
    let index=1;
    for (let product of arrProd){
        strHTML +=`
            <div class="col-4 prod">
                <img class="img-fluid " src="${product.image}"/>
                <h1 class="card-title">${product.name}</h1>
                <p class="card-shortDes">${product.shortDescription}</p>
                <div class="buy-price row">
                    <a href="./detail.html?Productid=${index}" class="col-6 buy">
                        Buy&nbspnow
                    </a>
                    <div class="col-6 price">
                        ${product.price}
                    </div>
                </div>
            </div>
        `
        index++;
    }
    return strHTML;
}
window.onload = async function(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('Productid');
    //console.log(myParam);
    try{
        let res = await axios({
        url : `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
        method : `GET`
    })
        console.log('Thành công',res.data.content);
        document.querySelector('#product-main').innerHTML=renderProductMain(res.data.content);
    }catch(err){
        console.log('lỗi',err);
    }
}
let renderProductMain = (Prod) => {
    let str =`
        <div class="img-detail">
                <img href="./index.html" src="${Prod.image}" alt="...">
            </div>
            <div class="info-detail">
                <h1 class="name-detail">${Prod.name}</h1>
                <p class="des-detail">about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span class="menu-size">Available size</span>
                <div class="size-detail">
                    <div class="size">
                        31
                    </div>
                    <div class="size">
                        32
                    </div>
                    <div class="size">
                        33
                    </div>
                    <div class="size">
                        34
                    </div>
                </div>
                <div class="price-detail">
                    ${Prod.price}
                </div>
                <div class="total">
                    <div class="cong">
                        +
                    </div>
                    <span class="number">
                        1
                    </span>
                    <div class="tru">
                        -
                    </div>
                </div>
                <div class="btn-add">
                    Add to cart
                </div>
            </div>
    `
    return str;
}