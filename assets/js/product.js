// product.js
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = products[productId];

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('main-image').src = product.images[0];
        document.getElementById('product-price').textContent = `$${product.price}`;
        document.getElementById('product-rating').textContent = `Rating: ${product.rating}/5`;
        document.getElementById('product-description').textContent = product.details;

        const featuresList = document.getElementById('product-features');
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        const imagesContainer = document.getElementById('product-images');
        product.images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = product.name;
            imagesContainer.appendChild(img);
        });

        if (product.video) {
            const videoContainer = document.getElementById('product-video');
            const video = document.createElement('video');
            video.controls = true;
            video.src = product.video;
            videoContainer.appendChild(video);
        }
    } else {
        document.getElementById('product-name').textContent = 'Product not found';
    }
});
