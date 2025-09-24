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
import IdeaToImpact from './IdeaToImpact';
import FAQ  from './FAQ';
const Dashboard = () => {
  return (
    <div>
       <Hero />
       <Brand/>
       <IdeaToImpact/>
      <Services preview />
      <Categories preview />
       <Projects/>
       <States/>
       <Contact />
       <FAQ/>
    </div>
  )
}

export default Dashboard