import { Route, Routes } from 'react-router-dom';
import { AddProduct, ProductPage, UpdateProduct } from './pages';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const removeProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    }).then(() => setProducts(products.filter((product) => product.id != id)));
  };
  const addProduct = (product) => {
    fetch(`http://localhost:3000/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts((products) => [...products, data]);
        navigate('/product');
      });
  };
  const onUpdate = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        const newProducts = products.map((p) =>
          p.id === data.id ? product : p
        );
        setProducts(newProducts);
        navigate('/product');
      });
  };
  // useEffect(() => {
  //   navigate('/product');
  // }, [navigate, products.length]);
  return (
    <>
      <Routes>
        <Route
          path='/product'
          element={
            <ProductPage products={products} removeProduct={removeProduct} />
          }
        />
        <Route
          path='/product/add'
          element={<AddProduct addProduct={addProduct} />}
        />
        <Route
          path='/product/:id/edit'
          element={<UpdateProduct onUpdate={onUpdate} products={products} />}
        />
      </Routes>
    </>
  );
}
export default App;
