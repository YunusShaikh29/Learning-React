import { useParams, Link } from "react-router-dom";

const ProductsDetail = () => {
  const param = useParams();
//   console.log(param)

  return (
    <>
      <h1>This is my product detail page.</h1>
      <p>{param.productId}</p>
      <p><Link to='..' relative='path'>Back</Link></p>
    </>
  );
};

export default ProductsDetail;
