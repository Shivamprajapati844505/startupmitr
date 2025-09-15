import React from 'react'
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Mentors from "./Mentors";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
const Dashboard = () => {
  return (
    <div>
       <Hero />
       <About />
       <Mentors />
       <ContactUs />
    </div>
  )
}

export default Dashboard