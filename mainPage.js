function renderFeaturedProducts(containerId = 'featuredProducts', productIDs = []) {
    const filteredProducts = products.data.filter(product => productIDs.includes(product.id));
    renderProducts(containerId, filteredProducts);
}
const featuredProductIDs = [1, 2, 3, 4, 5, 6];
renderFeaturedProducts('featuredProducts', featuredProductIDs);
function rendernewArrivals(containerIds = 'newArrivalsContainer', productIDs = []) {
    const newArrivalProducts = products.data.filter(product => productIDs.includes(product.id));
    renderProducts(containerIds, newArrivalProducts);
}
const renderNewArrivals = [1, 2, 3, 4, 5, 6];
rendernewArrivals('newArrivalsContainer', featuredProductIDs);
