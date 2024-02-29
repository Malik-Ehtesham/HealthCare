import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-screen bg-black py-1 flex justify-evenly fixed z-50 top-0 px-1">
      <div>
        {/* <p className="text-white text-center">03080554483</p> */}
        <p className="text-white   text-sm my-1 font-medium  tracking-widest">
          Wir sind rund um die Uhr verfügbar
        </p>
      </div>
      <Link to="/contact" className="text-rose-500 underline m-auto">
        Contact Now
      </Link>
    </div>
  );
};

export default Banner;
