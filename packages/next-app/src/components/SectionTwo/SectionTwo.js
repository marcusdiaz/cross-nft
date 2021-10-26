import React from 'react'
import ContactForm from '../Contact/ContactForm2'

export default function SectionTwo() {
  return (
    <React.Fragment>

      <div className="w-screen bg-blue-100 justify-center h-min-16 py-8"> 
        <div className="relative justify-center text-center flex w-auto space-x-32">
          <div className=" w-25 bg-white border-black rounded-2xl shadow">
          <p>xxxxx your home at no out-of-pocket cost to you.</p>
          <p>Have you had hail or damaging storms in the last 12 months?</p>
          <p>Do you own your home?</p>
          <p></p>
          <p>Contact Us Now</p>
          
          <p>Free Evaluation in 48 hours!</p>
          <p>Just submit your PROPERTY and Contact Info Now!</p>
          </div>
          <div className="bg-white `w-48/100` border-black rounded-2xl shadow"> 
            <ContactForm/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
