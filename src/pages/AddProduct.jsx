import { useState } from 'react';

const AddProduct = ({ addProduct }) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const onHandleChange = (event) => {
    // setData({ name: event.target.value });
    const { name, value } = event.target;

    if (!value) {
      setErrors((errors) => ({ ...errors, [name]: 'Khong duoc de trong' }));
    }
    const newData = { ...data, [name]: value };
    setData(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (errors.name || errors.price) return;
    addProduct(data);
  };

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Enter Product Name'
          onChange={onHandleChange}
          name='name'
        />
        {errors.name ? (
          <div style={{ color: 'red' }}>{errors.name}</div>
        ) : (
          <></>
        )}
        <br />
        <input
          type='text'
          placeholder='Enter Product Price'
          onChange={onHandleChange}
          name='price'
        />
        {errors.price ? (
          <div style={{ color: 'red' }}>{errors.price}</div>
        ) : (
          <></>
        )}
        <br />
        <button onClick={onHandleSubmit}>Add New</button>
      </form>
    </div>
  );
};

export default AddProduct;
