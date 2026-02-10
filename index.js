// Helper function to fetch all products
const fetchAllProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) throw Error('error');
    const data = await response.json();
    return data.products;
  }
  catch (err) {
    console.log(err);
  }
};

// Helper function to fetch a single product by ID
const fetchProductById = async (productId) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    if (!response.ok) throw Error('error');
    const data = await response.json();
    return data;
  }
  catch (err) {
    console.log(err);
  }
};

// 1. Sum of all prices
const sumAllPrices = async () => {
  const data = await fetchAllProducts();
  return data.reduce((acc, curr) => acc + curr.price, 0);
};
sumAllPrices();
// 2. Get email of all reviewers of product X
const getReviewerEmails = async (productId) => {
  const data = await fetchProductById(productId);
  return data.reviews.map((product) => product.reviewerEmail);
};

// Export functions for testing
module.exports = {
  sumAllPrices,
  getReviewerEmails,
  fetchAllProducts,
  fetchProductById
};
