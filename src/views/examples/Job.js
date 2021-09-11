import React from "react"
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer";

function Job(){
  return(
    <>
    <ExamplesNavbar />
    <div className="container wrapper" style={{paddingTop:"8rem", paddingBottom:"8rem"}}>
    <h1 className="text-info">#1 Telemarketer Intern</h1>
    <h2>Job Description:</h2>
    <p>We are looking for an enthusiastic Telemarketer to generate sales either by cold calling or answering requests in a fast-paced environment. You will be responsible for influencing existing or potential customers to buy products or services.

</p><p>A successful telemarketer must be friendly and persuasive. You must be able to understand the customer’s requirements in a short time and present solutions that meet their needs. 
</p>

<h2>Responsibilities:</h2>
<ul>
    <li>Cold call people using a given phone directory to sell products.</li>
    <li>Answer incoming calls from prospective customers.</li>
    <li>Use scripts to provide information about the product’s features, prices, etc., and present their benefits.</li>
    <li>Ask pertinent questions to understand the customer’s requirements.
</li>
    <li>Persuade the customer to buy by demonstrating how merchandise or services meet their needs.</li>
    <li>Record the customer’s personal information accurately in a computer system
</li>
<li>Deal with complaints or doubts to safeguard the company’s reputation.

</li>
<li>Go the “extra mile” to meet sales quota and facilitate future sales.
</li>
<li>Keep records of calls and sales and record useful information
</li>

</ul>
<h2>Requirements:</h2>
<ul>
    <li>Proven experience as a telemarketer or similar sales/customer service role.
</li>
    <li>Proven track record of successfully meeting sales quotas preferably over the phone.
</li>
    <li>Working knowledge of relevant computer programs (e.g. CRM software) and telephone systems.
</li>
    <li>Excellent communication and presentation skills.

</li>
    <li>Skilled in negotiation and dealing with complaints.</li>
    <li>Persistent and results-oriented.
</li>
<li>Patient and able to handle customer rejection.

</li>

</ul>
<h3>Salary: 2000 INR + Stipend per month </h3>
<h2>How to Apply for Hiring: </h2>
<p>Interested and eligible candidates may apply through mail. Attach your resume with the <span className="text-danger">subject: Telemarketer Intern</span>  and drop on <a href = "mailto: info@reactjsofficial.com">info@reactjsofficial.com</a>
</p>
    </div>
    <Footer />
    </>
  )
}
export default Job;