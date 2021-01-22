

// const itemTitle = items.results.title
// console.log(itemTitle)

// let itemTitle = item.title
// function truncate(itemTitle) {
//     if (itemTitle.length > 5) {
//        return itemTitle.substring(0, 5) + '...'
//     }
//     return itemTitle
// }

// nav bar

// do i have to mave Jewlery & Accessories day an object so i can store arrays of sub categories inside of it


// let navLinks = ['Jewlery & Accessories']

// let navLinksHtml = navLinks.map((item) => {
//     return `<a class="jewlery">${item}</a> `
// })

// document.querySelector("#nav").innerHTML = navLinksHtml.join("")


// const firstCat = [{label: 'Jewlery & Accessories',
//                     children: ['Accessories', 'Bags & Purses','Necklaces','Rings', 'Earings', 'Bracelets','Body Jewlery' ]}]
    
// console.log(firstCat[0].children[0])


// const navCats = firstCat[0].label[0].map(function(item){
//     return `<p>${item}</p>`
// })
// // })
// document.querySelector('#nav').innerHTML = cat.join('')
// console.log(navCats)


// products grid

const products = items.results
console.log(products)
const productHtml = products.map((item) => {
    return `<div class='product-item'>
                <div class="bgimage" style="background-image: url(${item.Images[0].url_fullxfull})"></div>
                <p class="title">${item.title}</p> 
                <p class="shopName">${item.Shop.shop_name}</p>
                <strong class="price">$${item.price}</strong>
            </div>
        `

})
document.querySelector('#grid').innerHTML = productHtml.join('')