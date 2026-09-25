const getAvailableProducts = (products) => {
  const availableProducts = [];

  for (const product of products) {
    if (product.stock > 0) {
      availableProducts.push(product);
    }
  }

  return availableProducts;
};