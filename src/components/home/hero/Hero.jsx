import Header from "../../common/header/Header";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="home-page min-h-screen">
      <Header page="Home" />
      <div className="flex justify-center">
        <div className="h-screen flex flex-col justify-center p-4 sm:w-5/6 sm:p-0 mt-5 md:mt-10">
          <p className="text-white font-black text-3xl sm:text-4xl md:text-5xl my-5">
            Ihr Pflegedienst
          </p>
          <p className="text-white text-lg sm:text-xl my-5 sm:w-4/5 md:w-2/3 lg:w-1/2  font-medium">
            Zuhause gepflegt, mit Liebe und Respekt: Bei uns steht der Mensch im
            Mittelpunkt, umgeben von Fürsorge und Verständnis.
          </p>
          <div className="my-5">
            <Link
              to="/contact"
              className="btn text-xs md:text-sm min-w-60 my-2  bg-white text-rose-500 "
            >
              {" "}
              KONTAKTIEREN SIE UNS JETZT <ArrowRightAltIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
