



const item=[
    {
        id:'001',
        item_image: 'image/js-image/11.jpg',
        company_name: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            NoOfReviews: 1400,
        },
    },
    {
        id:'002',
        item_image: 'image/js-image/22.jpg',
        company_name: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            NoOfReviews: 24,
        },
    },
    {
        id:'003',
        item_image: 'image/js-image/33.jpg',
        company_name: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            NoOfReviews: 249,
        },
    },
    {
        id:'004',
        item_image: 'image/js-image/44.jpg',
        company_name: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            NoOfReviews: 10,
        },
    },
    {
        id:'005',
        item_image: 'image/js-image/55.jpg',
        company_name: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            NoOfReviews: 3500,
        },
    },
    {
        id:'006',
        item_image: 'image/js-image/66.jpg',
        company_name: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            NoOfReviews: 0,
        },
    },
    {
        id:'007',
        item_image: 'image/js-image/77.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            NoOfReviews: 388,
        },
    },
    {
        id:'008',
        item_image: 'image/js-image/88.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            NoOfReviews: 5200,
        },
    }
    ];
displayItemsOnHomePage();
function displayItemsOnHomePage() {
    let itemsContainerElement=document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
let innerHTML='';
item.forEach(item =>{
    innerHTML += `
    <div class="item-container">
                <img class="item-image" src="${item.item_image}" alt="item image">
                <div class="rating">${item.rating.stars} ⭐ ${item.rating.NoOfReviews}</div>
                <div class="company-name">${item.company_name}</div>
                <div class="item-name">${item.item_name}</div>
                 <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                  <span class="origional-price">Rs ${item.original_price}</span>
                  <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <div>
                  <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
                </div>
            </div>
    `


});
itemsContainerElement.innerHTML=innerHTML;
};
let bagItems;
onload();
function onload(){
    let bagItemStr=localStorage.getItem('bagItem');
    bagItems=bagItemStr ? JSON.parse(bagItemStr) :[];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItem',JSON.stringify(bagItems));
    displayBagIcon();
};
function displayBagIcon() {
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;

    }else{
        bagItemCountElement.style.visibility='hidden';
    }
}