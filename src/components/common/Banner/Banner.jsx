import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";

const Banner = () => {
  return (
    <div className="w-screen bg-black py-1 flex justify-evenly fixed z-50 top-0">
      <div className=" hidden sm:flex my-0.5">
        <PhoneIcon className="text-white my-0.5 " fontSize="small" />
        <p className="text-white mx-2 text-base">061067797307</p>
      </div>
      <p className="text-white   text-sm my-1 font-medium  tracking-wide">
        Wir sind rund um die Uhr verfügbar
      </p>

      <Link to="/contact" className="text-rose-500 underline">
        Contact Now
      </Link>
    </div>
  );
};

export default Banner;
