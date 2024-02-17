import React, { useRef } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Consultancies from "./components/Consultancies";
import Mentoring from "./components/Mentoring";
import FreeContent from "./components/FreeContent";
import About from "./components/About";
import LineCourses from "./components/LineCourses";

const Main = () => {

  const coursesRef = useRef(null);
  const consultanciesRef = useRef(null);
  const mentoringRef = useRef(null);
  const freeContentRef = useRef(null);

  const scrollTo = (item) => {
    item === `courses`
      ? coursesRef.current?.scrollIntoView({ behavior: 'smooth' })
      : item === `consultancies`
        ? consultanciesRef.current?.scrollIntoView({ behavior: 'smooth' })
        : item === `mentoring`
          ? mentoringRef.current?.scrollIntoView({ behavior: 'smooth' })
          : freeContentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="main">
      <Header />
      <Home />
      <LineCourses />
      <Products scrollTo={scrollTo} />
      <Courses ref={coursesRef} />
      <Consultancies ref={consultanciesRef} />
      <Mentoring ref={mentoringRef} />
      <FreeContent ref={freeContentRef} />
      <About />
      <Footer />
    </div>
  );
};

export default Main;