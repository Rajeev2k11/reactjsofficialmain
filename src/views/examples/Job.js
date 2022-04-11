import React from "react"
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer";


import { Button } from "reactstrap";

function Job(){
   
  return(
    <>
    <ExamplesNavbar />
    <div className="container wrapper" style={{paddingTop:"8rem", paddingBottom:"8rem"}}>
    <h1 className="text-info">Campus Ambassador Program</h1>

    <h2 ><span className="text-primary">|</span> Recruitment Process</h2>
   
              
                <blockquote>
                  <h2 className="blockquote blockquote-default">
                  <span className="text-primary">Shortlisting of Candidates</span>
                  <p>Candidates are shortlisted depending on profile and availability.</p>
                   
                  </h2>
                </blockquote>
                <blockquote>
                  <h2 className="blockquote blockquote-default">
                  <span className="text-primary">Online interview</span>
                  <p>Shortlisted candidates will be invited for online telephonic interview/ video interview.</p>
                   
                  </h2>
                </blockquote>
             
                <h2 ><span className="text-primary">|</span> Job description</h2>
                <blockquote>
                  <h2 className="blockquote blockquote-default">
                      <p><span style={{fontWeight:700}}>Reactjsofficial</span> is looking for Campus Ambassadors who have leadership quality and a strong social media presence.

</p><br />
                  <span className="text-primary">Responsibilities of the Candidate:</span>
                  <ul>
    <li>Create awareness and take care o promotional activities of Reactjsofficial both online and offline.</li>
    <li>Work with the team and promote various training and workshops on social media platforms like WhatsApp and Facebook.</li>
    <li>Get your classmates from your college or nearby colleges to register for the training, workshops, and internship programs.</li>
    <li>Execute marketing campaigns and engage your college students in activities.
</li>
</ul>
<span className="text-primary">Eligibility:</span>   
<ul>
    <li>Must be enrolled in any undergraduate/postgraduate program in any college across India</li>
    <li>Must be active on social media platforms</li>
    <li>Must have a strong presence and influence in your university or college</li>
    
</ul>
<h4>We seek enthusiastic and responsible students with superior networking abilities, an innovative mindset, and a strong online presence through this program.</h4>

<span className="text-primary">Learning Opportunities:</span>   
<ul>
    <li>Improve your communication skills and enhance your network</li>
    <li>Improve your marketing and promotional skills</li>
    <li>Enhance your management skills and data handling skills
</li>
    
</ul>
<p><span style={{fontSize:"1rem", fontWeight:600}}>Selection Procedure:</span> The selection process shall be based on the online application followed by an online interview.</p>

<span className="text-primary">Rewards and Incentives:</span>   
<ul>
    <li>Certificate of Excellence from <span style={{fontWeight:600}}>Reactjsofficial</span> for all selected Campus Ambassadors</li>
    <li>Credit yourself as a Campus Ambassador in your resumes, LinkedIn profile, blogs, personal pages, etc.</li>
   
    <li>Incentives on each registration</li>
     <li>A Certificate of Participation and Letter of Recommendation to you from Kukbit</li>

    
</ul>

</h2>

</blockquote>

<Button target="Blank" href="https://forms.gle/1Pkk13hLwVxcw5j47" className="btn-round" color="primary" type="button">
              Apply Now
            </Button>
    </div>

    
    <Footer />
    </>
  )
}
export default Job;