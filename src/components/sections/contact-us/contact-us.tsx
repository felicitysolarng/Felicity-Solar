"use client";

import React from 'react'

//type Props = {}

function ContactForm() {

   /*  async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        })

        // Handle response if necessary
        const data = await response.json()
        // ...
    } */
    return (
        <div>
            <form className="w-[90%] mx-auto ">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block md:uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-grey-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        {/*  <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block md:uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-8">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block md:uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
                            Phone Number
                        </label>
                        <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="text" placeholder="23470474682836" />
                    </div>

                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <label className="block md:uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="johndoe@email.com" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block md:uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                            Message
                        </label>
                        <textarea className="appearance-none block w-full h-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" id="grid-message" placeholder="Your message" />

                    </div>
                </div>
                <input  type='submit' className='bg-primary text-white h-12 rounded-sm px-4' value={"Send Message"}/>
            </form>
        </div>
    )
}

export default ContactForm