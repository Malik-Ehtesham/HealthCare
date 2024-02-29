import Header from "../../common/header/Header";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <Header page="Home" />
      <div className="w-full h-screen ">
        <video
          id="video"
          className="bg-contain h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./images/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="text-overlay">
          <p className="font-bold text-3xl my-2 sm:text-4xl md:text-5xl">
            Ihr Pflegedienst
          </p>
          <p className="font-medium text-base sm:text-lg lg:text-xl my-8 w-full sm:w-2/3">
            {" "}
            Zuhause gepflegt, mit Liebe und Respekt: Bei uns steht der Mensch im
            Mittelpunkt, umgeben von Fürsorge und Verständnis.
          </p>
          <Link
            to="/contact"
            className="btn text-xs md:text-sm min-w-60 my-2  bg-white text-rose-500 "
          >
            {" "}
            KONTAKTIEREN SIE UNS JETZT <ArrowRightAltIcon />
          </Link>
        </div>
      </div>
      {/* <section className=" relative">
        <video autoPlay muted loop className="background-video">
          <source src="./images/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container absolute">
          <div className="row">
            <Heading subtitle="" title="Ihr Pflegedienst" />
            <p>
              Zuhause gepflegt, mit Liebe und Respekt: Bei uns steht der Mensch
              im Mittelpunkt, umgeben von Fürsorge und Verständnis.
            </p>
            <div className="button">
              <button>
                KONTAKTIEREN SIE UNS JETZT{" "}
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;
