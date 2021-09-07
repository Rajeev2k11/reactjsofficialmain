import React from "react"
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer";

function About(){
  return(
    <>
    <ExamplesNavbar />
    <div className="container wrapper" style={{paddingTop:"8rem", paddingBottom:"8rem"}}>
    <h1>About us</h1>
    <p>Reactjsofficial is an initiative to help students in their placement preparations targeting Software development/engineering, Analyst & Product based roles in IT/Internet/Analytics companies.We are a team of graduates from IITs/NITs having work experience in fast paced start-ups & top companies across the globe. We know what is required for better placement preparations, where the gap is and ensure your success in placements.<br/>
This is how we deliver to our promise:<br/>
We get to know you & your aspirations (dream company) before starting the program<br/>
We device a customized plan for you keeping your aspirations in mind<br/>
We provide you the targeted content in the form of Video lectures & Interview notes<br/>
We test your preparation levels at every stage via multiple Mock tests<br/>
We give you a glance of real time interviews via Mock interviews from industry experts<br/>
We will be with you throughout & mentor you to ensure your success in placements.<br/>
Our team of experts have done an extensive research to provide you the best in a crisp form targeting your dream company.</p>
    
    </div>
    <Footer />
    </>
  )
}
export default About;