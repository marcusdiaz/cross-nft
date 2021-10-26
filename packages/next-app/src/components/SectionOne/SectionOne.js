import React from 'react'
import ContactForm from '../Contact/ContactForm2'

export default function SectionOne() {
  return (
    <React.Fragment>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                <div className="flex flex-col py-8">
                    <div className="bg-white border-green border-2 rounded-2xl shadow p-4 m-8">
                        <h2>Free Roof Replacement</h2>
                        <p>Help your House!</p>
                        <p>Free Inspection</p>
                    </div>
                </div>
                <div className="flex flex-col py-8">
                    <div className="bg-white border-green border-2 rounded-2xl shadow p-4 m-8">
                        <ContactForm/>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}
