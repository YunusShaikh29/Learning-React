import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>This is my home! 🏡</h1>
      <p>Go to <Link to='products'>the Products page</Link></p>
    </>
  );
};

export default Home;
