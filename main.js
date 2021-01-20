const products = items.results
console.log(products)

const productHtml = products.map((item) => {
    return `<div class='product-item'>
                <div class="bgimage" style="background-image: url(${item.Images[0].url_fullxfull})"></div>
                <h2>${item.title}</h2> 
                <p>${item.Shop.shop_name}</p>
                <strong>$${item.price}</strong>
            </div>
        `

})
document.querySelector('#grid').innerHTML = productHtml.join('')