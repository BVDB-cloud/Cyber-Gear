function renderFeaturedProducts(containerId = 'featuredProducts', productIDs = []) {
    const filteredProducts = products.data.filter(product => productIDs.includes(product.id));
    renderProducts(containerId, filteredProducts);
}

// Call the function with specific product IDs for the main page
const featuredProductIDs = [1, 2, 3, 4, 5, 6]; // Adjust IDs as needed
renderFeaturedProducts('featuredProducts', featuredProductIDs);


function rendernewArrivals(containerIds = 'newArrivalsContainer', productIDs = []) {
    const newArrivalProducts = products.data.filter(product => productIDs.includes(product.id));
    renderProducts(containerIds, newArrivalProducts);
}

// Call the function with specific product IDs for the main page
const renderNewArrivals = [1, 2, 3, 4, 5, 6]; // Adjust IDs as needed
rendernewArrivals('newArrivalsContainer', renderNewArrivals);