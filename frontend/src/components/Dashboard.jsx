import React from 'react'
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";            
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Brand from './Brand';
import Services from './Services';
import Projects from './Projects';
const Dashboard = () => {
  return (
    <div>
       <Hero />
       <Brand/>
      <Services preview />
       <Projects/>
       <About/>
       <ContactUs />
    </div>
  )
}

export default Dashboard