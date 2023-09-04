import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  const param = useParams();
//   console.log(param)

  return (
    <>
      <h1>This is my product detail page.</h1>
      <p>{param.productId}</p>
    </>
  );
};

export default ProductsDetail;
