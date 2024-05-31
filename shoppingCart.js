//Hideable Doc
const navBarCart = document.getElementById('navBarShoppingCart');
const shoppingCartDiv = document.querySelector(".shoppingCartPopOutMenu");
const productsSection = document.getElementById("products");

function toggleShoppingCart() {
    shoppingCartDiv.style.display = (shoppingCartDiv.style.display === "block") ? "none" : "block";
        // Toggle the margin property based on the current value
        if (productsSection.style.marginRight === "50px") {
            productsSection.style.marginRight = "100px";
        } else {
            productsSection.style.marginRight = "100px";
        }
}
navBarCart.addEventListener("click", toggleShoppingCart);
document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById('navBarShoppingCart');
    const cartMenu = document.querySelector('.shoppingCartPopOutMenu');
    const cartExit = document.getElementById('cartExit');
    const applyCouponButton = document.querySelector('.couponAddOption button');
    const couponInput = document.querySelector('.couponAddOption input');
    const couponBannerSuccessful = document.querySelector('.couponBannerSuccessful');
    const couponBannerDenied = document.querySelector('.couponBannerDenied');
    const closeCouponSuccess = document.querySelector('.couponBannerSuccessful i');
    const closeCouponDenied = document.querySelector('.couponBannerDenied i');

    // Event listener for clicking outside the coupon banners to hide them
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.couponBannerSuccessful') && couponBannerSuccessful.style.display === 'flex') {
            couponBannerSuccessful.style.display = 'none';
        }
        if (!event.target.closest('.couponBannerDenied') && couponBannerDenied.style.display === 'flex') {
            couponBannerDenied.style.display = 'none';
        }
    });

    // Event listener for clicking the cart icon
    cartIcon.addEventListener('click', function () {
        cartMenu.style.display = 'block';
    });

    // Event listener for clicking the cart exit button
    cartExit.addEventListener('click', function () {
        cartMenu.style.display = 'none';
    });

    // Event listener for clicking the apply coupon button
    applyCouponButton.addEventListener('click', applyCoupon);

    // Event listener for pressing Enter key in coupon input field
    couponInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            applyCoupon();
        }
    });

    // Event listener for pressing Enter key on the apply coupon button
    applyCouponButton.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            applyCoupon();
        }
    });

    // Function to apply the coupon code and show corresponding banners
    function applyCoupon() {
        const couponCode = couponInput.value.trim();
        if (couponCode === "DISCOUNT20") { // Sample coupon code for testing
            couponBannerSuccessful.style.display = 'flex';
            couponBannerDenied.style.display = 'none';
        } else {
            couponBannerSuccessful.style.display = 'none';
            couponBannerDenied.style.display = 'flex';
        }
        couponInput.value = '';

    }

    // Additional code for closing coupon banners
    closeCouponSuccess.addEventListener('click', function () {
        couponBannerSuccessful.style.display = 'none';
    });

    closeCouponDenied.addEventListener('click', function () {
        couponBannerDenied.style.display = 'none';
    });
});
//

let products = {
    data: [
        {
            id:1,
            productName:"Apple Macintosh 128K",
            brand:"Apple",
            category:"Desktop",
            price:"39,999",
            stars:"5",
            image:"image1.jpg",
        },
        {
            id:2,
            productName:"PowerBook G4",
            brand:"Apple",
            category:"Laptop",
            price:"17.99",
            stars:"2",
            image:"image2.jpg",
        },
        {
            id:3,
            productName:"Microsoft Surface Studio 2+",
            brand:"Microsoft",
            category:"Laptop",
            price:"999.99",
            stars:"1",
            image:"Images\productImages\image3.png",
        },
        {
            id:4,
            productName:"Microsoft Band 2",
            brand:"Microsoft",
            category:"Watch",
            price:"199.99",
            stars:"3",
            image:"Images\productImages\image4.jpg",
        },
        {
            id:5,
            productName:"Samsung Galaxy S24",
            brand:"Samsung",
            category:"Phone",
            price:"1,299.99",
            stars:"5",
            image:"Images\productImages\image5.jpg",
        },
        {
            id:6,
            productName:"Samsung Galaxy Watch 5 Pro",
            brand:"Samsung",
            category:"Watch",
            price:"199.99",
            stars:"1",
            image:"Images\productImages\image6.png",
        },
        {
            id:7,
            productName:"iMac G3",
            brand:"Apple",
            category:"Laptop",
            price:"999.99",
            stars:"4",
            image:"Images\productImages\image7.png",
        },
        {
            id:8,
            productName:"Apple iMac 2011",
            brand:"Apple",
            category:"Desktop",
            price:"9.99",
            stars:"1",
            image:"Images\productImages\image8.jpg",
        },
        {
            id:9,
            productName:"Green-Eyed Mouse",
            brand:"Microsoft",
            category:"Mouse",
            price:"599.99",
            stars:"5",
            image:"Images\productImages\image9.jpg",
        },
        {
            id:10,
            productName:"Logitech G502 K Plus",
            brand:"Logitech",
            category:"Mouse",
            price:"34.99",
            stars:"4",
            image:"Images\productImages\image10.jpg",
        },
        {
            id:11,
            productName:"Razer Cobra Pro",
            brand:"Razer",
            category:"Mouse",
            price:"129.99",
            stars:"5",
            image:"Images\productImages\image11.jpg",
        },
        {
            id:12,
            productName:"Apple IIc",
            brand:"Apple",
            category:"Desktop",
            price:"9,999,999.99",
            stars:"5",
            image:"Images\productImages\image12.jpg",
        },
        {
            id:13,
            productName:"Microsoft Surface Studio 3",
            brand:"Microsoft",
            category:"Desktop",
            price:".29",
            stars:"5",
            image:"Images\productImages\image13.png",
        },
        {
            id:14,
            productName:"Samsung NC-10",
            brand:"Samsung",
            category:"Laptop",
            price:"3,141,592.65",
            stars:"5",
            image:"Images\productImages\image14.png",
        },
        {
            id:15,
            productName:"Galaxy Book",
            brand:"Samsung",
            category:"Laptop",
            price:"1,100",
            stars:"5",
            image:"Images\productImages\image15.jpg",
        },
        {
            id:16,
            productName:"MacBook Air",
            brand:"Apple",
            category:"Laptop",
            price:"1,300",
            stars:"5",
            image:"Images\productImages\image16.png",
        },
        {
            id:17,
            productName:"Surface Pro",
            brand:"Microsoft",
            category:"Laptop",
            price:"400",
            stars:"4",
            image:"Images\productImages\image17.png",
        },
        {
            id:18,
            productName:"Galaxy Book",
            brand:"Samsung",
            category:"Laptop",
            price:"1100",
            stars:"5",
            image:"Images\productImages\image18.png",
        },
        {
            id:19,
            productName:"MacBook Air",
            brand:"Apple",
            category:"Laptop",
            price:"1,300",
            stars:"5",
            image:"Images\productImages\image19.png",
        },
        {
            id:20,
            productName:"great",
            brand:"Microsoft",
            category:"Laptop",
            price:"400",
            stars:"4",
            image:"SurfacePro.jpg",
        },
    ]
}

let cart = [];
let cartItemCount = 0;
let discountCodeApplied = false;
let discount = 0; // Starting value for discount

function calculateDiscount(subTotal, discountPercentage) {
    return subTotal * (discountPercentage / 100); // Corrected the discount calculation
}

function applyDiscountCode(discountCode) {
    if (discountCode === "discount20") { // Check for the exact discount code
        discountCodeApplied = true;
    } else {
        discountCodeApplied = false;
    }
    calculateTotals();
} 

function renderProducts(containerId = 'products', filteredProducts = products.data) {
    const productsContainer = document.getElementById(containerId);
    productsContainer.innerHTML = '';

    for (let product of filteredProducts) {
        // Create product card elements
        let card = document.createElement("div");
        card.classList.add("card", product.category);

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        let image = document.createElement("img");
        image.setAttribute("src", product.image);

        imgContainer.appendChild(image);
        card.appendChild(imgContainer);

        let container = document.createElement("div");
        container.classList.add("container");

        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = product.productName.toUpperCase();
        container.appendChild(name);

        let price = document.createElement("h5");
        price.innerText = "$" + product.price;
        container.appendChild(price);

        let starsContainer = document.createElement("div");
        starsContainer.classList.add("stars-container");
        for (let i = 0; i < product.stars; i++) {
            let starIcon = document.createElement("i");
            starIcon.classList.add("fa-solid", "fa-star");
            starIcon.style.color = "gold";
            starsContainer.appendChild(starIcon);
        }
        container.appendChild(starsContainer);

        let addToCartButton = document.createElement("i");
        addToCartButton.classList.add("fa-solid", "fa-bag-shopping");
        addToCartButton.style.color = "forestgreen"; 
        addToCartButton.style.fontSize = "20px"; 
        addToCartButton.dataset.productId = product.id;
        let badge = document.createElement("div");
        badge.classList.add("badge");
        addToCartButton.removeAttribute('aria-hidden');
        badge.appendChild(addToCartButton);
        container.appendChild(badge);
        card.appendChild(container);
        productsContainer.appendChild(card);

        // Add event listener for adding to cart
        addToCartButton.addEventListener('click', function () {
            const productId = parseInt(this.dataset.productId);
            const product = products.data.find(p => p.id === productId);
            if (product) {
                if (cart.find(item => item.id === product.id)) {
                    alert("Product is already in the cart.");
                } else {
                    cartItemCount++;
                    updateCartCount(cartItemCount);
                    addToCart(product);
                    renderCartProducts();
                    calculateTotals();
                }
            }
        });
    }
}

// Call the function to render all products on the products page
renderProducts();

function updateCartCount(count) {
    const shoppingCartCount = document.getElementById('shoppingCartNumberOfItems');
    shoppingCartCount.textContent = count;
}

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    const priceNumber = parseFloat(product.price.replace(/,/g, '')); // Convert price to number
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, price: priceNumber, quantity: 1 });
    }
    updateCartCount(cartItemCount); // Update cart count when adding to cart
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
        const product = cart[productIndex];
        cartItemCount -= product.quantity;
        cart.splice(productIndex, 1);
        updateCartCount(cartItemCount);
        calculateTotals();
    }
}

function updateCartQuantity(productId, newQuantity) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        const difference = newQuantity - product.quantity;
        product.quantity = newQuantity;
        cartItemCount += difference; // Update cart item count based on quantity change
        updateCartCount(cartItemCount); // Update cart count in UI
    }
}

function calculateTotals() {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const shipping = subtotal * 0.05; // 5% of subtotal
    const tax = subtotal * 0.0825; // Example tax rate

    let totalDiscount = 0; // Initialize discount
    if (discountCodeApplied) {
        totalDiscount = subtotal * 0.2; // Apply a 20% discount
    }

    const total = subtotal + shipping + tax - totalDiscount;

    // Update UI with the calculated totals
    document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').innerText = `$${shipping.toFixed(2)}`;
    document.getElementById('tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('discount').innerText = `$${totalDiscount.toFixed(2)}`;
    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}



function renderCartProducts() {
    const productsHolder = document.getElementById('productHolder');
    productsHolder.innerHTML = '';

    cart.forEach(product => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cartItem');

        let imgContainer = document.createElement('div');
        imgContainer.classList.add('cartImageContainer');
        let image = document.createElement('img');
        image.setAttribute('src', product.image);
        imgContainer.appendChild(image);
        cartItem.appendChild(imgContainer);

        let cartDetails = document.createElement('div');
        cartDetails.classList.add('cartDetails');
        
        let name = document.createElement('h4');
        name.innerText = product.productName;
        cartDetails.appendChild(name);

        let itemPrice = document.createElement('p');
        itemPrice.classList.add('itemPrice');
        itemPrice.innerText = "$" + product.price;
        cartDetails.appendChild(itemPrice);

        let quantity = document.createElement('div');
        quantity.classList.add('quantity');
        quantity.innerHTML = `Quantity: <input type="number" value="${product.quantity}" min="1" data-product-id="${product.id}">`;
        cartDetails.appendChild(quantity);

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeFromCart');
        removeButton.innerHTML = 'Remove';
        removeButton.addEventListener('click', function () {
            removeFromCart(product.id);
            renderCartProducts();
            calculateTotals();
        });
        cartDetails.appendChild(removeButton);

        cartItem.appendChild(cartDetails);
        productsHolder.appendChild(cartItem);
    });

    // Add event listeners to quantity inputs
    const quantityInputs = document.querySelectorAll('.quantity input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', function () {
            const productId = parseInt(this.dataset.productId);
            const newQuantity = parseInt(this.value);
            updateCartQuantity(productId, newQuantity);
            calculateTotals();
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderProducts();

    const applyCouponButton = document.querySelector('.couponAddOption button');
    applyCouponButton.addEventListener('click', function () {
        const couponCode = document.getElementById('discountCodeInput').value.trim();
        applyDiscountCode(couponCode);
    });
});

calculateTotals(); // Call this to initially calculate totals without the discount applied








let selectedBrands = [];
let selectedCategories = [];
let selectedPriceRanges = [];
let selectedSortOrder = null;


function filterProducts() {
    let filteredProducts = products.data.filter(product =>
        (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
        (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
        (selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
            let [min, max] = range.split('-').map(Number);
            let price = parseInt(product.price.replace(/,/g, ''));
            return price >= min && price <= max;
        }))
    );

    if (selectedSortOrder) {
        switch (selectedSortOrder) {
            case 'PriceHigh':
                filteredProducts.sort((a, b) => parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, '')));
                break;
            case 'PriceLow':
                filteredProducts.sort((a, b) => parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, '')));
                break;
            case 'NameAsc':
                filteredProducts.sort((a, b) => a.productName.localeCompare(b.productName));
                break;
            case 'NameDesc':
                filteredProducts.sort((a, b) => b.productName.localeCompare(a.productName));
                break;
            case 'StarsHigh':
                filteredProducts.sort((a, b) => b.stars - a.stars);
                break;
            case 'StarsLow':
                filteredProducts.sort((a, b) => a.stars - b.stars);
                break;
        }
    }

    renderProducts(filteredProducts);
}


// Add event listener for the sort radio buttons
document.querySelectorAll('input[name="sortButton"]').forEach(radio => {
    radio.addEventListener('change', () => {
        selectedSortOrder = radio.value;
        filterProducts();
    });
});

// Initial render
renderProducts();
function handleFilter(selectedFilter, value, checked) {
    if (checked) {
        if (!selectedFilter.includes(value)) {
            selectedFilter.push(value); // Add value to filter array if not already present
        }
    } else {
        selectedFilter = selectedFilter.filter(item => item !== value); // Remove value from filter array if unchecked
    }
    return selectedFilter; // Return the updated filter array
}

// Update the event listener to use the returned value
document.querySelectorAll('.checkBoxFilter').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const filterType = checkbox.closest('.filterSection').classList[1]; // Get the filter type from parent element
        const value = checkbox.value;
        const checked = checkbox.checked;

        switch (filterType) {
            case 'filterPageBrands':
                selectedBrands = handleFilter(selectedBrands, value, checked);
                break;
            case 'filterPageCategories':
                selectedCategories = handleFilter(selectedCategories, value, checked);
                break;
            case 'filterPagePriceRanges':
                selectedPriceRanges = handleFilter(selectedPriceRanges, value, checked);
                break;
            default:
                break;
        }
        filterProducts(); // Reapply all filters after updating the selected filters
    });
});


const searchBarInput = document.getElementById('searchBarInput');

searchBarInput.addEventListener('input', () => {
    const searchValue = searchBarInput.value.trim().toLowerCase(); // Get the search value, trim whitespace, and convert to lowercase

    let filteredProducts = products.data.filter(product =>
        product.productName.toLowerCase().includes(searchValue) // Check if product name includes the search value (case insensitive)
    );

    // Apply other filters if any
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
    }
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
    }
    if (selectedPriceRanges.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return selectedPriceRanges.some(range => {
                let [min, max] = range.split('-').map(Number);
                let price = parseInt(product.price.replace(/,/g, ''));
                return price >= min && price <= max;
            });
        });
    }

    renderProducts(filteredProducts); // Render the filtered products
});