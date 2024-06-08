// app.js
document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('product-list');
    const products = [
        {
            id: '1',
            name: 'Treadmill X300',
            price: 999,
            rating: 4,
            image: 'assets/images/image1.jpg'
        },
        {
            id: '2',
            name: 'Exercise Bike Y200',
            price: 599,
            rating: 5,
            image: 'assets/images/image4.jpg'
        },
        {
            id: '3',
            name: 'Rowing Machine Z100',
            price: 799,
            rating: 4,
            image: 'assets/images/image6.jpg'
        }
    ];

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <button onclick="viewProduct(${product.id})">View Details</button>
            <button onclick="reserveProduct(${product.id})">Reserve</button>
        `;
        productContainer.appendChild(productCard);
    });
});

function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

function reserveProduct(productId) {
    // Implement reservation functionality
}
