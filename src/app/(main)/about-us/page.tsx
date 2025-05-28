import Navbar from '@/components/layouts/navbar/Navbar'
import Milestones from '@/components/sections/milestones'
import { why_choose_us } from '@/lib/data'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: 'About us - Felicity Solar',
    description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

function index() {
    return (
        <main className='font-[family-name:var(--font-inter)]'>

            <Navbar linkClassName="text-grey-800 font-semibold" className='hidden border-b border-grey-100 lg:flex bg-white' variant='primary' />

            <section className='flex flex-col lg:flex-row mt-12 py-32 mx-auto w-[90%] 2xl:w-[75%] md:gap-x-8 lg:gap-x-26 gap-y-10 lg:gap-y-0'>
                <div className="order-2 lg:order-1 flex flex-col gap-y-4 basis-1/2">
                    <h3 className='text-base italize italic text-primary'>About us</h3>
                    <h2 className='uppercase text-[101928] text-2xl font-bold'>GUANGZHOU FELICITY SOLAR NIG LTD</h2>
                    <div className="flex flex-col gap-y-4">
                        <p className='text-[#667185] text-base font-medium leading-8'>Established in 2016 and headquartered in Festac, Lagos, Felicity Solar Nigeria has grown to become one of the most recognized and trusted solar energy brands in the country.  </p>
                        <p className='text-[#667185] text-base font-medium leading-8'>With a strong focus on sales and after-sales support, we have built a robust network of over 12 service centers across Nigeria—ensuring fast, efficient, and professional assistance for our customers nationwide </p>
                        <p className='text-[#667185] text-base font-medium leading-8'>Felicity Solar is a forward-thinking company committed to advancing clean energy solutions </p>
                        <p className='text-[#667185] text-base font-medium leading-8'>We specialize in the PHOTOVOLTAIC + ENERGY STORAGE industry chain, offering end-to-end services in the design, research & development, production, and sales of a wide range of solar products. Our portfolio includes photovoltaic modules, inverters, MPPT controllers, lithium battery packs, and solar street lights—each designed to meet the diverse energy needs of homes, businesses, and communities.</p>
                        <p className='text-[#667185] text-base font-medium leading-8'>Our products are certified by international standards including CE, ROHS, and SONCAP, and we maintain strong partnerships in over 40 countries and regions such as the United States, Australia, Turkey, Japan, UAE, Singapore, and Nigeria. </p>
                        <p className='text-[#667185] text-base font-medium leading-8'>
                            Our products are certified by international standards including CE, ROHS, and SONCAP, and we maintain strong partnerships in over 40 countries and regions such as the United States, Australia, Turkey, Japan, UAE, Singapore, and Nigeria.
                        </p>
                        <p className='text-[#667185] text-base font-medium leading-8'>
                            We operate 15 offices globally and continue to expand by opening at least five new branches every year.
                        </p>

                        <p className='text-[#667185] text-base font-medium leading-8'>
                            As pioneers in the solar energy and storage sector, we are driven by a mission to bring clean, reliable power to underserved areas. Guided by our core values—hard work, innovation, focus, and integrity—we aim to light up lives and create a brighter, more sustainable future for all.
                        </p>
                    </div>

                </div>
                <div className="order-1 lg:order-2flex basis-1/2 h-96 justify-center items-start">
                    <Image src={"/assets/images/about_us.png"} alt='About Felicity solar limited' width={481} height={475} />
                </div>
            </section>

            <section className='py-32  custom-gradient' >
                <div className="flex flex-col mx-auto w-[95%] 2xl:w-[90%]  gap-x-26 gap-y-20">
                    <div className="flex justify-center items-center flex-col gap-y-4">
                        <h3 className='text-base italize italic text-primary '>Why Choose Us</h3>
                        <h2 className=' text-grey-900 text-3xl font-bold text-center '>Our Reputation and Industry Experience</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 xl:grid-cols-4 gap-x-8">
                        {
                            why_choose_us.map(a => {
                                return (
                                    <div key={a.title} className="flex py-9 items-center justify-center px-8 rounded-lg bg-white flex-col gap-y-7 custom-shadow">
                                        <Image src={a.icon} alt={a.title} width={48} height={48} className='w-auto h-auto' />
                                        <h3 className='font-semibold text-base text-grey-700 '>{a.title}</h3>
                                        <p className='text-sm text-center leading-6 text-[#667185]  font-medium'>
                                            {a.description}
                                        </p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </section>


            <section className='py-32 flex-col flex gap-y-22' >
                <div className="flex gap-y-26 mx-auto w-[90%]  gap-x-26 flex-col ">
                    <h2 className=' text-grey-900 text-3xl font-bold'>Our Milestones</h2>
                    <Milestones />
                </div>

            </section>
        </main>
    )
}

export default index