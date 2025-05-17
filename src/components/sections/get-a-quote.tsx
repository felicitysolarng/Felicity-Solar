
"use client";
import React from 'react'

//type Props = {}

function GetQuote() {
    return (
        <section className="py-12 text-gray-800 sm:py-24 mt-20 lg:mt-10">
            <div className="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
                <div className="max-w-2xl px-4 lg:pr-24">
                    <p className="mb-2 text-primary">Have Custom Needs</p>
                    <h3 className="mb-5 text-3xl font-semibold">Let’s Design the Perfect Solar Solution for You</h3>
                    <p className="mb-16 text-lg text-gray-600">Whether you're looking to power your home, business, school, or farm, our solar experts are here to help. </p>
                    <div className="mb-5 flex font-medium">
                       
                        <div className="">
                            <p className="mb-2">🔧 Expert System Design</p>
                            <span className="font-normal text-gray-600">Our engineers craft each solar setup to suit your location, budget, and energy usage—ensuring maximum efficiency and durability.</span>
                        </div>
                    </div>
                    <div className="mb-5 flex font-medium">
                       
                        <div className="">
                            <p className="mb-2">🔋 Seamless Battery Backup</p>
                            <span className="font-normal text-gray-600">Enjoy uninterrupted power with smart battery systems that store excess energy for night-time or outages.</span>
                        </div>
                    </div>
                    <div className="mb-5 flex font-medium">
                       
                        <div className="">
                            <p className="mb-2">💸 Cut Your Energy Bills</p>
                            <span className="font-normal text-gray-600">Slash your electricity expenses from day one and gain independence from unstable grid power.</span>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-full bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
                    <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
                        <h3 className="mb-1 inline-block text-3xl font-medium"><span className="mr-4">Get Started Now!</span></h3>
                        {/* <span className="inline-block rounded-md bg-primary/10 px-2 py-1 text-sm text-primary sm:inline">Quick Response</span> */}
                        <p className="text-gray-600 font-medium">Get a Free Customized Solar Quote for Your Home or Business</p>
                    </div>
                    <div className="p-4 sm:p-8">
                        <div className="flex gap-x-3 mt-4">
                            <div className="flex gap-y-2 flex-col">
                                <label htmlFor="fullnames">Fullnames</label>
                                <input id="name" type="text" className=" w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 h-12 shadow-sm focus:border-grey-400  focus:outline-none hover:border-grey-200" placeholder="Enter your full name" />
                            </div>
                            <div className="flex gap-y-2 flex-col">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" className="w-full h-12 resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-grey-400 focus:outline-none hover:border-grey-200" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="flex gap-x-3 mt-4">
                            <div className="flex gap-y-2 flex-col">
                                <label htmlFor="location">Location</label>
                                <input id="location" type="text" className=" w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 h-12 shadow-sm focus:border-grey-400  focus:outline-none hover:border-grey-200" placeholder="e.g Lagos" />
                            </div>
                            <div className="flex gap-y-2 flex-col">
                                <label htmlFor="budget">Budget Range </label>
                                <input id="budget" type="emtextail" className="w-full h-12 resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-grey-400 focus:outline-none hover:border-grey-200 placeholder:text-sm" placeholder="₦500k–₦1M, ₦1M–₦5M, ₦5M+" />
                            </div>
                        </div>
                        <div className="peer-invalid:block mt-1 hidden text-left text-xs text-rose-600">Email format Incorrect. Please complete the email</div>
                        <label className="mt-5 mb-2 inline-block max-w-full">Additional Notes</label>
                        <textarea id="about" className="mb-8 w-full resize-none text-sm h-30 overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-grey-400 focus:outline-none hover:border-grey-200" placeholder='Share list of equipments you want to power with the solar system'></textarea>
                        <button className="w-full rounded-lg border h-12 bg-primary p-3 text-center font-medium text-white outline-none transition focus:ring  hover:bg-pirmary-10 hover:text-white">Send</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default GetQuote