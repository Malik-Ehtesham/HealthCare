import { Link } from "react-router-dom";

import Logo from "/images/logo.jpg";

const Navbar = (props) => {
  return (
    <div
      className={`px-12  mb-10 mt-6 ${
        props.page === "Home" ? "absolute" : ""
      } top-0 w-full z-10`}
    >
      <p
        className={`text-3xl font-black ${
          props.page === "Home" ? "text-white" : "text-black"
        }  p-4`}
      >
        PFLEGEDIENST MALIK
      </p>
      <div className=" bg-rose-600 flex justify-between">
        <div className=" lg:flex py-2 px-0 ">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center   ">
              <Link
                to="/"
                className="hover:bg-transparent text-base xl:text-lg text-white  font-semibold  py-3 px-1.5 xl:px-4 rounded-full"
              >
                Home
              </Link>
            </li>
            <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  ">
              <Link
                to="/about"
                className="hover:bg-transparent text-base xl:text-lg text-white  font-semibold  py-3 px-1.5 xl:px-4 rounded-full "
              >
                Über Uns
              </Link>
            </li>
            <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  ">
              <Link
                to="/courses"
                className="hover:bg-transparent text-base xl:text-lg text-white  font-semibold  py-3 px-1.5 xl:px-4 rounded-full"
              >
                Leistungen
              </Link>
            </li>
            <li className="  ">
              <details className="dropdown  ">
                <summary className="m-1 btn bg-inherit hover:bg-transparent border-0  text-base xl:text-lg text-white  font-semibold  py-3 px-1.5 xl:px-4 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center">
                  Pflegeinformation
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/Pflegebe">Pflegebedürftigkeit</Link>
                  </li>
                  <li>
                    <Link to="/Pflegehilf">Pflegehilhsmittel</Link>
                  </li>
                  <li>
                    <Link to="/Pflegesachleistung">
                      Ambulante Pflegesachleistung{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/Pflegestärkungsgesetze">
                      Pflegestaerkungsgesetz 1 (psg-1)
                    </Link>
                  </li>
                  <li>
                    <Link to="/Pflegestärkungsgesetze">
                      Pflegestaerkungsgesetz 2 (psg-2)
                    </Link>
                  </li>
                  <li>
                    <Link to="/Pflegestärkungsgesetze">
                      Pflegestaerkungsgesetz 3 (psg-3)
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  ">
              <Link
                to="/Vollmacht"
                className=" hover:bg-transparent text-base xl:text-lg text-white  font-semibold  py-3 px-1.5 xl:px-4 rounded-full"
              >
                Vollmachten
              </Link>
            </li>
            <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  ">
              <Link
                to="/team"
                className="hover:bg-transparent text-base xl:text-lg text-white  font-semibold  py-3 px-1.5 xl:px-4 rounded-full"
              >
                Team
              </Link>
            </li>
            <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  ">
              <Link
                to="/karriere"
                className="hover:bg-transparent text-base xl:text-lg text-white  font-semibold  py-3 px-1.5 xl:px-4 rounded-full"
              >
                Karriere
              </Link>
            </li>
            <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  ">
              <Link
                to="/contact"
                className="hover:bg-transparent text-base xl:text-lg text-white  font-semibold  py-3 px-1.5 xl:px-4 rounded-full"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`  ${
            props.page === "Home" ? "bg-white" : "bg-slate-200"
          } flex justify-center items-center `}
        >
          <Link
            to="/Betreung"
            className="text-red-500 text-sm font-medium xl:text-base px-3 xl:px-2     "
          >
            Vereinbaren sie ein Beratungsgespräch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
