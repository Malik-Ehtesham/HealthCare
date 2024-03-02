// import React from "react"
// import { Link } from "react-router-dom"
// import "./footer.css"

// const Footer = () => {
//   return (
//     <>
//       <footer>
//         <div className='container padding'>
//           <div className='box last'>
//             <h3>Haben sie Fragen?</h3>
//             <ul>
//               <li>
//                 <i className='fa fa-map'></i>
//                 Ludwigstraße 25,<br /> 63110 Rodgau
//               </li>
//               <li>
//                 <i className='fa fa-phone-alt'></i>
//                 061067797307
//               </li>
//               <li>
//               <i className='fa fa-fax'></i>
//                 061067797298
//               </li>
//               <li>
//                 <i className='fa fa-paper-plane'></i>
//                 Info@pflegedienst-malik.de
//                 Bewerbung@pflegedienst<br></br>-malik.de
//               </li>
//             </ul>
//           </div>
//           <div className='box last'>
//             <ul>
//             <li>
//                 <i className='fa fa-clock'></i>
//                 <b>Öffnungszeiten des Büros</b>
//               </li>
//             </ul>
//             <ul>
//               <li>
//                 Montag 8:00-16:00 Uhr
//               </li>
//               <li>
//                 Dienstag 8:00-16:00 Uhr
//               </li>
//               <li>
//                 Mittwoch 8:00-16:00 Uhr
//               </li>
//               <li>
//                 Donnerstag 8:00-16:00 Uhr
//               </li>
//               <li>
//                 Freitag 8:00-16:00 Uhr
//               </li>

//             </ul>
//           </div>
//         </div>
//       </footer>
//       <div className='legal'>
//         <p>
//           Copyright ©2024 All rights reserved | This template is made with by WeDo | <Link to='/Datenschutz'>Datenschutz</Link>|<Link to='/Impressum'>Impressum</Link>
//         </p>
//       </div>
//     </>
//   )
// }

// export default Footer

import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import LogoImage from "/images/logo.jpg";
import FacebookImage from "/images/icons/Facebook.png";
import InstaImage from "/images/icons/Insta.png";
// import HeadsetImage from "../../utils/Images/icons/headset.svg";

const Footer = () => {
  return (
    <footer className=" footer-bg bg-rose-600 p-10 pb-0  ">
      <div className="border-b-2 border-white">
        <div className="flex justify-around flex-col lg:flex-row  pb-5 md:px-16 lg:px-0">
          <div>
            <Fade direction="left">
              <img src={LogoImage} className="w-28 h-20 rounded-md mb-5" />
              <p className="text-gray-100 text-lg lg:w-96">
                Unser Gesundheitsunternehmen hat sich zum Ziel gesetzt, das
                Familienwohl über Generationen hinweg zu stärken, indem es
                Vermächtnisse bewahrt und Verbindungen pflegt
              </p>
              <div className="flex ">
                <a
                  href="https://www.instagram.com/pflegedienstmalik?igsh=MWdvcWkxcWNia3VlZA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={InstaImage}
                    className="w-10 rounded-full ms-0 m-3 bg-white transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200  "
                  />
                </a>
                <a
                  href="https://www.facebook.com/pflegeundbetreuungmalik"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={FacebookImage}
                    className="w-10 rounded-full m-3 bg-white transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200"
                  />
                </a>
              </div>
            </Fade>
          </div>
          <div className="flex flex-col  md:flex-row justify-between sm:w- mt-10">
            <Fade direction="up">
              <div className="flex flex-col mb-10 md:mb-0 lg:me-10">
                <p className="text-lg   text-white font-bold  mb-5 bg-inherit">
                  Haben sie Fragen?
                </p>
                <p className="text-base cursor-default  text-gray-100 hover:text-yellow-400 my-2">
                  Ludwigstraße 25, 63110 Rodgau
                </p>
                <p className="text-base cursor-default  text-gray-100 hover:text-yellow-400 my-2">
                  061067797307
                </p>

                <p className="text-base cursor-default text-gray-100 hover:text-yellow-400 my-2">
                  061067797298
                </p>
                <p className="text-base cursor-default text-gray-100 hover:text-yellow-400 my-2">
                  Info@pflegedienst-malik.de
                </p>
                <p className="text-base cursor-default text-gray-100 hover:text-yellow-400 my-2">
                  Bewerbung@pflegedienst-malik.de
                </p>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="flex flex-col lg:ms-10">
                <p className="text-lg text-white font-bold mb-5 bg-inherit">
                  Öffnungszeiten des Büros
                </p>
                <p
                  className="text-base cursor-default  text-gray-100 hover:text-yellow-400
                my-2"
                >
                  Montag 9:00-16:00 Uhr
                </p>
                <p
                  className="text-base   cursor-default  text-gray-100 hover:text-yellow-400
                my-2"
                >
                  Dienstag 9:00-16:00 Uhr
                </p>
                <p
                  className="text-base cursor-default text-gray-100  hover:text-yellow-400
                my-2"
                >
                  Mittwoch 9:00-16:00 Uhr
                </p>
                <p
                  className="text-base cursor-default text-gray-100  hover:text-yellow-400
                my-2"
                >
                  Donnerstag 9:00-16:00 Uhr
                </p>{" "}
                <p
                  className="text-base cursor-default  text-gray-100 hover:text-yellow-400
                my-2"
                >
                  Freitag 9:00-16:00 Uhr
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  text-gray-100 items-center justify-center py-5">
        <p className="text-center text-gray-100 text-lg sm:text-xl   justify-center">
          Copyright ©2024 Pflegedienst-Malik |{" "}
        </p>
        <div className="flex  ">
          <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300  ">
            <Link
              to="/Datenschutz"
              className="mx-1 underline text-lg sm:text-xl   "
            >
              Datenschutz |
            </Link>
          </li>

          <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300  ">
            <Link
              to="/Impressum"
              className="mx-1 underline text-lg sm:text-xl "
            >
              Impressum
            </Link>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
