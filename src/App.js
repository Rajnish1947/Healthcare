
import React from "react";
import Nabar from "./components/Nabar";
import Header from "./components/Header";
import About from "./pages/About";
import Test from "./components/Test";
import Feedback from "./components/Feedback";
import Hrmaam from "./components/Hrmaam";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nabar />
      <section id="home"><Header /></section>
      <section id="about"><About /></section>
      <section id="test"><Test /></section>
      <section id="feedback"><Feedback /></section>
      <section id="hrmaam"><Hrmaam /></section>
      <section id="services"><Services /></section>
      <section id="courses"><Courses /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;
