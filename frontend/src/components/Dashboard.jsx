import React from 'react'
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";            
import Contact from "./ContactUs";
import Footer from "./Footer";
import Brand from './Brand';
import Services from './Services';
import Projects from './Projects';
import Categories from './Categories';
import States from './States';
const Dashboard = () => {
  return (
    <div>
       <Hero />
       <Brand/>
      <Services preview />
      <Categories preview />
       <Projects/>
       <States/>
       <Contact />
    </div>
  )
}

export default Dashboard