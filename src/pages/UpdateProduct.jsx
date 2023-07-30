import { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = ({ onUpdate, products }) => {
  const { id } = useParams();

  const currentProduct = products.find((product) => product.id == id);
  const [data, setData] = useState();
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...data, [name]: value };
    setData(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const dataUpdate = { ...data, id: id };
    onUpdate(dataUpdate);
  };
  return (
    <div>
      <form>
        <input
          type=''
          placeholder='Name Product'
          onChange={onHandleChange}
          defaultValue={currentProduct?.name}
          name='name'
        />
        <input
          type=''
          placeholder='Price Product'
          onChange={onHandleChange}
          defaultValue={currentProduct?.price}
          name='price'
        />
      </form>
      <button onClick={onHandleSubmit} type='submit'>
        Update
      </button>
    </div>
  );
};

export default UpdateProduct;
