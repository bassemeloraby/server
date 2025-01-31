const createProduct = (req, res) => {
  res.status(200).json({ tradeName: "hair shampoo", price: 20 });
};

export { createProduct };
