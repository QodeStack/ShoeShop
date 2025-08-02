//console.log(axios);
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
