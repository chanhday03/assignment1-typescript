import { Link } from 'react-router-dom';

const ProductPage = ({ products, removeProduct }) => {
  console.log(products);
  const onHandleRemove = (id) => {
    removeProduct(id);
  };
  return (
    <div>
      <Link to={`/product/add`}>
        <button>Add</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => onHandleRemove(product.id)}>
                    delete
                  </button>
                  <Link to={`${product.id}/edit`}>edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
