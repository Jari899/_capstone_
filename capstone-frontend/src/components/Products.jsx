import React from "react";

const Products = ({ products = [] }) => {
  // Italian high heel shoes image (Unsplash)
  const shoeImage = "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80";
  return (
    <section>
      {products?.map((product) => (
        <section key={product.id}>
          <img
            src={shoeImage}
            alt="Italian High Heel Shoes"
            style={{ width: "150px", height: "auto", objectFit: "cover" }}
          />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </section>
      ))}
    </section>
  );
};

export default Products;
