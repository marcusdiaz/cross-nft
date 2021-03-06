import React, { Component, Fragment } from 'react';

//import Amplify, {API} from 'aws-amplify'
//import config from '../../src/aws-exports'
//Amplify.configure(config)


// 1. Need to add some state for the form elements

// 2. Modify the form here to be more relevant to my audience

// 3. Modify this form to also match the expected Hubspot form (which also is to be created)

// 4.

class ContactForm extends Component {
    
    render() {
        return (
            <>
        
              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                      <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First name
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
        
                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                              </label>
                              <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
        
                            <div className="col-span-6 sm:col-span-4">
                              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email address
                              </label>
                              <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
        
                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country / Region
                              </label>
                              <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>
        
                            <div className="col-span-6">
                              <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                Street address
                              </label>
                              <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
        
                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                              </label>
                              <input
                                type="text"
                                name="city"
                                id="city"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
        
                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                State / Province
                              </label>
                              <input
                                type="text"
                                name="state"
                                id="state"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
        
                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                ZIP / Postal
                              </label>
                              <input
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
        
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>
{/*        
              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                      <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
                    </div>
                  </div>

                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                          <fieldset>
                            <legend className="text-base font-medium text-gray-900">By Email</legend>
                            <div className="mt-4 space-y-4">
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments" className="font-medium text-gray-700">
                                    Comments
                                  </label>
                                  <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="candidates"
                                    name="candidates"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="candidates" className="font-medium text-gray-700">
                                    Candidates
                                  </label>
                                  <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offers"
                                    name="offers"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="offers" className="font-medium text-gray-700">
                                    Offers
                                  </label>
                                  <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <fieldset>
                            <div>
                              <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                              <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                            </div>
                            <div className="mt-4 space-y-4">
                              <div className="flex items-center">
                                <input
                                  id="push-everything"
                                  name="push-notifications"
                                  type="radio"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                  Everything
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  id="push-email"
                                  name="push-notifications"
                                  type="radio"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                  Same as email
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  id="push-nothing"
                                  name="push-notifications"
                                  type="radio"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                  No push notifications
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
*/ }
            </>
          ) ;   
        }
}

export default ContactForm;