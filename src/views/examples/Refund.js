import React from "react"
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer";

function Refund(){
  return(
    <>
    <ExamplesNavbar />
    <div className="container wrapper" style={{paddingTop:"8rem", paddingBottom:"8rem"}}>
    <h1>REFUND POLICY</h1>
    <p>Thank you for purchasing our courses. We want to make sure our users have a satisfying experience while they discover, assess, and buy our courses which may be either online training or classroom training courses. As with the online purchase experience, there are certain terms and conditions that govern the Refund Policy. While you are purchasing a course on Reactjsofficial Website you agree to our Privacy Policy and Terms of Use Policy and Refund Policy.</p>
    <p>Our refund policy is as follows:</p>
    <h1>CANCELLATION AND REFUNDS: CLASSROOM TRAINING</h1>
    <p>Reactjsofficial, reserves the right to postpone/cancel an event, or change the location of an event because of insufficient enrolments, instructor illness or force-majeure events (like floods, earthquakes, political instability, etc.)</p>
    <p>In case Reactjsofficial cancels an event, a 100% refund will be paid to the delegate. However travel, logistics or any personal expense incurred by learners shall not be refunded.</p>
    <p>If a cancellation is done by a delegate a request has to be raised with Reactjsofficial management, Decision of Reactjsofficial management will be final and will have to be accepted by all the parties. In case of refund processed, 20% of the total paid fee will be deducted and the remaining amount will be refunded back to the delegate.</p>

<h1>CANCELLATION AND REFUNDS: ONLINE CLASSROOM TRAINING</h1>
<p>The refund request will not be accepted if you have attended the online or classroom training for more than 1-day sessions or you have access to course material from the learning portal.</p>
<p>Note: All refunds will be processed within 7 working days of receipt of the refund request.

</p>
<p>Refunds will not be provided on discounted courses.

</p>
    </div>
    <Footer />
    </>
  )
}
export default Refund;