const productsData = [{
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "DeliveryOn": new Date(1996, 8, 20),
        "Image": "./assets/1-chai.png"
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "DeliveryOn": new Date(1996, 7, 12),
        "Image": "./assets/2-chang.png"
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitPrice": 10,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 8, 26),
        "Image": "./assets/3-aniseed-syrup.png"
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "DeliveryOn": new Date(1996, 9, 19),
        "Image": "./assets/4-cajun-seasoning.png"
    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 7, 17),
        "Image": "./assets/5-gumbo-mix.png"
    },
    {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "DeliveryOn": new Date(1996, 9, 19),
        "Image": "./assets/6-grandmas-boysenberry-spread.png"
    },
    {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "UnitPrice": 30,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 7, 22),
        "Image": "./assets/7-organic-dried-pears.png"
    },
    {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "UnitPrice": 40,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 11, 1),
        "Image": "./assets/8-cranberry-sauce.png"
    },
    {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "DeliveryOn": new Date(1997, 1, 21),
        "Image": "./assets/9-kobe-niku.png"
    },
    {
        "ProductID": 10,
        "ProductName": "Ikura",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "DeliveryOn": new Date(1996, 8, 5),
        "Image": "./assets/10-ikura.png"
    }
];

function productsTemplate(product) {
    return `
    <div class="product">
        <img class="${product.UnitsInStock !== 0 ? "product-image" : "product-image-low-opacity"}" src="${product.Image}">
        <h2 class="product-name">${product.ProductName}</h2>
        <p class="product-id">Product ID: ${product.ProductID}</p>
        <p class="product-price"> Price: ${product.UnitPrice} $</p>
        <p ${product.UnitsInStock !== 0 ? "product-units" : "class=product-units-bold"}>Units in stock: ${product.UnitsInStock}</p>
        <p>Delivery on: ${product.DeliveryOn.getFullYear() + "-" + product.DeliveryOn.getMonth() + "-" + product.DeliveryOn.getDate()}</p>
    </div>
    `
}

let container = document.getElementById("container");
container.innerHTML = `
    <h1> Products (${productsData.length} results)</h1>
    ${productsData.map(productsTemplate).join('')}
`