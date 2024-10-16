import { useState } from "react";
import "./App.css";

function App() {
  const [productForm, setProductForm] = useState({
    productTitle: '',
    productPrice: 0,
    productDesc: "",
    productStock: 0,
    productRating: 0
  }
  )

const handleForm = (e) => {
  e.preventDefault();
  setProductForm({
    ...productForm,
    [e.target.name]: e.target.value
  })
}


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Haven't done this yet boy");
  };
  return (
    <main>
      <section>
        <h2>Create new product</h2>
        <form onSubmit={handleSubmit}>
          <label>Name of Product:</label>
          <input
          name="productTitle"
            value={productForm.title}
            onChange={handleForm}
          />
          <label>Price of product:</label>
          <input
          name="productPrice"
            type="number"
            value={productForm.price}
            onChange={handleForm}
          />
          <label>Describe product:</label>
          <textarea name="productDesc" onChange={handleForm} value={productForm.productDesc} />
          <label>Enter amount of stock:</label>
          <input
          name="productStock"
            type="number"
            value={productForm.productStock}
            onChange={handleForm}
          />
          <label>Enter rating:</label>
          <input
          name="productRating"
            type="number"
            value={productForm.productRatingS}
            onChange={handleForm}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default App;
