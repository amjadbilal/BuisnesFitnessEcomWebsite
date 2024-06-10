// document.addEventListener("DOMContentLoaded", function () {
//     // Get all the view buttons
//     const viewButtons = document.querySelectorAll(".view-btn");

//     // Add click event listener to each view button
//     viewButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             // Get the product ID from the data attribute
//             const productId = button.getAttribute("data-product-id");

//             // Redirect to product details page with product ID
//             window.location.href = `product_details.html?id=${productId}`;

//             // Disable the clicked button
//             viewButtons.style.display='none'
//         });
//     });

//     // Add click event listener to the "Go to Top" button
//     const goTopBtn = document.getElementById("goTopBtn");
//     goTopBtn.addEventListener("click", function () {
//         window.scrollTo(0, 0); // Scroll to top of the page
//     });
// });
