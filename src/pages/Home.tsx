import { Link } from 'react-router-dom';
import hero from './../Assets/images/hero.jpg'

const Home: React.FC = () => {
  return (
    <div className="hero min-h-screen">
        <img src={hero}/>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Pixtore</h1>
          <p className="mb-5">
            You can find every high resolution pictures and buy it
          </p>
          <Link to='/store'><button className="btn btn-primary">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
