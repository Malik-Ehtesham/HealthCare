import React from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";
import { Link } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";
import CourseCard from "./course/CourseCard/CourseCard";
import FirstImage from "/images/JP.webp";
import SecondImage from "/images/c.webp";
import ThirdImage from "/images/BA.webp";
import FourthImage from "/images/b.webp";
import FifthImage from "/images/HC.jpg";

const OnlineCourses = () => {
  return (
    <>
      {/* <section className="online">
        <Heading subtitle="Leistungen" title="Unsere Leistungen" />
        <div className="container">
          <div className="content grid1">
            {online.map((val, index) => (
              <Link to={val.href} className="course-link" key={index}>
                <div className="box">
                  <div className="img">
                    <img src={val.hoverCover} alt="" className="show" />
                  </div>
                  <h1>{val.courseName}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}
      <div className="flex justify-center my-10">
        <div className="sm:w-5/6">
          <p className="font-bold text-red-600 text-center">LEISTUNGEN</p>
          <p className="font-bold text-center text-4xl">Unsere Leistungen</p>
          <div className="flex justify-around  flex-wrap overflow-auto gap-y-5   items-center my-5">
            <Link to="/grundpflege">
              <CourseCard title="Grundpflege" image={FirstImage} />
            </Link>
            <Link to="/Behandlungspflege">
              <CourseCard title="Behandlungspflege" image={SecondImage} />
            </Link>
            <Link to="/BA">
              <CourseCard title="Beratungs nach §37.3" image={ThirdImage} />
            </Link>
            <Link to="/Vpflege">
              <CourseCard title="Verhinderungspflege" image={FourthImage} />
            </Link>
            <Link to="/Care">
              <CourseCard
                title="Pflege- und Haushaltsmanagement nach §45b SGB XI"
                image={FifthImage}
              />
            </Link>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default OnlineCourses;
