import React from 'react'
import ContactForm from '../Contact/ContactForm2'
import Header from '../Header/Header'

export default function SectionOne() {
  return (
    <React.Fragment>

      <div className="w-screen bg-blue-600 justify-center h-min-16 py-8"> 
        <div className="relative justify-center text-center">
          <Header/>
          <p className="text-center text-yellow-300 text-2xl pt-4 pb-4">You may be elgible for a replacement roof on your home at no out-of-pocket cost to you.</p>
          <button className="btn-gold">Start Now!</button>
          <p className="text-center text-yellow-300 pt-4 pb-4">Have you had hail in the last 12-24 months?</p>
          <p className="text-center text-yellow-300 pt-4 pb-4">Have you had damaging wind in the last 12 months?</p>
          <p className="text-center text-yellow-300 pt-4 pb-4">Do you own your home?</p>
          <p></p>
          <button className="btn-gold">Contact Us Today!</button>
          <p className="text-center text-yellow-300 pt-4 pb-4">Free Evaluation in 48 hours!</p>
          <p className="text-center text-yellow-300 pt-4 pb-4">Submit your PROPERTY and Contact Info Now!</p>
        </div>
      </div>

    </React.Fragment>
  )
}
