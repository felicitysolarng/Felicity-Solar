import Navbar from '@/components/layouts/navbar/Navbar'
import Goback from '@/components/ui/go-back'
import { installers } from '@/lib/data'
import { ChevronRight } from 'lucide-react'
import { Metadata } from 'next'
//import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

////

export const metadata: Metadata = {
  title: 'Distributors Locations- Felicity Solar',
  description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}
function page() {
  return (
    <main className='font-[family-name:var(--font-inter)]'>

      <Navbar linkClassName="text-grey-800 font-semibold" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />

      <section className='flex flex-col lg:flex-row pt-12 mx-auto w-[90%] 2xl:w-[75%] md:gap-x-8 lg:gap-x-26 gap-y-10 lg:gap-y-0'>
        <div className="flex lg:hidden my-10 ">
          <Goback />
        </div>
        <div className=" items-center flex-row gap-x-1 hidden lg:flex">
          <Link href={"/"} className='text-grey-400 items-center flex font-medium text-sm' aria-label='link to homepage'> Homepage</Link>
          <p className='text-grey-700 items-center flex font-medium text-sm' aria-label='link to products page'><ChevronRight color='#98A2B3' size={16} />Installers</p>
        </div>

      </section>
      <header className='mb-2 lg:mb-20'>
        <h2 className=' text-grey-900 text-4xl font-bold text-center'>Certified Installers</h2>
      </header>
      <section className='grid gap-y-10 lg:gap-y-20 grid-cols-1 md:grid-cols-3 gap-x-10 pt-8 pb-22 mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]'>
        {
          installers.length > 0 && installers.map(d => {
            return (
              <div key={d?.id} className="flex flex-col bg-grey-700 lg:bg-grey-500 lg:hover:bg-grey-700 max-h-fit lg:max-h-[250px] lg:max-w-[503px] rounded-md px-3 lg:px-6 py-6 lg:py-10 gap-y-4">
                <div className="flex gap-x-2 items-start">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8295 11.5609C13.4177 11.5609 14.793 10.9912 15.9167 9.86733C17.0405 8.74362 17.6101 7.36868 17.6101 5.78025C17.6101 4.19237 17.0405 2.81725 15.9166 1.69317C14.7927 0.569639 13.4175 0 11.8295 0C10.241 0 8.86609 0.569639 7.74237 1.69335C6.61865 2.81707 6.04883 4.19218 6.04883 5.78025C6.04883 7.36868 6.61865 8.7438 7.74255 9.86751C8.86646 10.991 10.2416 11.5609 11.8295 11.5609Z" fill="#FDF0E7" />
                    <path d="M21.9435 18.4546C21.9111 17.987 21.8456 17.4768 21.7491 16.9382C21.6517 16.3954 21.5262 15.8824 21.3761 15.4134C21.221 14.9288 21.0101 14.4501 20.7493 13.9914C20.4787 13.5154 20.1608 13.1008 19.8041 12.7597C19.4312 12.4028 18.9745 12.1159 18.4464 11.9066C17.9202 11.6984 17.337 11.593 16.7131 11.593C16.4681 11.593 16.2312 11.6935 15.7736 11.9914C15.492 12.175 15.1626 12.3874 14.7949 12.6224C14.4805 12.8227 14.0546 13.0104 13.5286 13.1803C13.0153 13.3464 12.4942 13.4306 11.9799 13.4306C11.4655 13.4306 10.9446 13.3464 10.4308 13.1803C9.90527 13.0106 9.47937 12.8229 9.16534 12.6226C8.80115 12.3898 8.47156 12.1774 8.18573 11.9912C7.7287 11.6933 7.49158 11.5928 7.24658 11.5928C6.62256 11.5928 6.03955 11.6984 5.51349 11.9068C4.98578 12.1157 4.52893 12.4026 4.15558 12.7599C3.79907 13.1012 3.48102 13.5156 3.21075 13.9914C2.9502 14.4501 2.73926 14.9286 2.58398 15.4136C2.43402 15.8826 2.30859 16.3954 2.21118 16.9382C2.11469 17.4761 2.04913 17.9864 2.01672 18.4552C1.98486 18.9144 1.96875 19.391 1.96875 19.8724C1.96875 21.1252 2.367 22.1394 3.15234 22.8874C3.92798 23.6255 4.95428 24 6.20233 24H17.7585C19.0065 24 20.0325 23.6257 20.8083 22.8874C21.5938 22.14 21.9921 21.1256 21.9921 19.8722C21.9919 19.3886 21.9756 18.9117 21.9435 18.4546Z" fill="#FDF0E7" />
                  </svg>
                  <p className='font-inter font-semibold text-base text-white'>{d.contact.name}</p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.94558 4.61067L9.42933 11.0972C10.8435 12.5086 13.155 12.5099 14.5703 11.0972L21.0541 4.61067C21.1194 4.54537 21.1099 4.43784 21.0341 4.38502C20.3728 3.92381 19.5682 3.65039 18.7015 3.65039H5.29823C4.43147 3.65039 3.62686 3.92386 2.96555 4.38502C2.8898 4.43784 2.88028 4.54537 2.94558 4.61067ZM1.21289 7.73569C1.21289 7.05413 1.38188 6.41016 1.67953 5.84414C1.72608 5.75559 1.84406 5.73769 1.9148 5.80842L8.31647 12.2101C10.3437 14.2402 13.6548 14.2414 15.6832 12.2101L22.0849 5.80842C22.1557 5.73769 22.2736 5.75559 22.3202 5.84414C22.6178 6.41016 22.7868 7.05417 22.7868 7.73569V16.264C22.7868 18.5183 20.953 20.3493 18.7015 20.3493H5.29823C3.04673 20.3493 1.21289 18.5183 1.21289 16.264V7.73569Z" fill="#FDF0E7" />
                  </svg>
                  <p className='font-inter font-semibold text-base text-white'>{d.contact.email}</p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_290_964)">
                      <path d="M22.0742 15.7533C20.6049 15.7533 19.1621 15.5234 17.7949 15.0716C17.125 14.8431 16.3014 15.0528 15.8926 15.4727L13.194 17.5098C10.0644 15.8393 8.13669 13.9121 6.48894 10.8061L8.46612 8.17781C8.97981 7.66481 9.16406 6.91544 8.94331 6.21231C8.48956 4.83794 8.25906 3.39587 8.25906 1.92587C8.25913 0.863937 7.39519 0 6.33331 0H1.92581C0.863937 0 0 0.863937 0 1.92581C0 14.0977 9.90237 24 22.0742 24C23.1361 24 24.0001 23.1361 24.0001 22.0742V17.679C24 16.6172 23.1361 15.7533 22.0742 15.7533Z" fill="#FDF0E7" />
                    </g>
                    <defs>
                      <clipPath id="clip0_290_964">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className='font-inter font-semibold text-base text-white'>{d.contact.phone}</p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_290_906)">
                      <path d="M21.9529 16.8268C21.6125 16.6398 21.185 16.7642 20.9981 17.1045C20.8111 17.4448 20.9355 17.8723 21.2758 18.0593C22.1134 18.5194 22.5938 19.0295 22.5938 19.4588C22.5938 19.9838 21.8498 20.7976 19.7619 21.5069C17.6992 22.2078 14.9426 22.5937 12 22.5937C9.05742 22.5937 6.30084 22.2078 4.23811 21.5069C2.15016 20.7976 1.40625 19.9838 1.40625 19.4588C1.40625 19.0295 1.88663 18.5194 2.72419 18.0592C3.06455 17.8723 3.18886 17.4448 3.00187 17.1044C2.81489 16.7641 2.38753 16.6398 2.04708 16.8267C1.11323 17.3398 0 18.2129 0 19.4588C0 20.4138 0.656813 21.7754 3.78572 22.8385C5.99034 23.5875 8.90756 24 12 24C15.0924 24 18.0097 23.5875 20.2143 22.8385C23.3432 21.7754 24 20.4138 24 19.4588C24 18.2129 22.8868 17.3398 21.9529 16.8268Z" fill="#FDF0E7" />
                      <path d="M6.6922 20.4905C8.11955 20.8937 10.0048 21.1158 12.0007 21.1158C13.9966 21.1158 15.8819 20.8937 17.3092 20.4905C19.0554 19.9972 19.9409 19.2831 19.9409 18.3682C19.9409 17.4532 19.0554 16.7392 17.3092 16.246C16.9215 16.1365 16.5 16.0404 16.0517 15.9585C15.8083 16.3791 15.5533 16.8119 15.2866 17.2573C15.7827 17.3317 16.2485 17.423 16.6715 17.5308C17.9566 17.8581 18.4261 18.2266 18.5227 18.3682C18.4261 18.5099 17.9567 18.8784 16.6716 19.2057C15.4552 19.5155 13.8902 19.6922 12.242 19.708C12.1621 19.7139 12.0817 19.7173 12.0007 19.7173C11.9197 19.7173 11.8393 19.7139 11.7594 19.708C10.1111 19.6922 8.54616 19.5156 7.3298 19.2057C6.04467 18.8784 5.57522 18.5099 5.4787 18.3682C5.57522 18.2266 6.04472 17.8581 7.32984 17.5308C7.75284 17.4231 8.21864 17.3317 8.71481 17.2573C8.44814 16.812 8.19309 16.379 7.94967 15.9585C7.50145 16.0405 7.07981 16.1365 6.6922 16.246C4.94597 16.7392 4.06055 17.4533 4.06055 18.3682C4.06055 19.2831 4.94597 19.9972 6.6922 20.4905Z" fill="#FDF0E7" />
                      <path d="M11.9991 18.311C12.6251 18.311 13.1936 17.992 13.5201 17.4578C15.8081 13.7145 18.5354 8.78109 18.5354 6.5362C18.5354 2.93212 15.6033 0 11.9991 0C8.39502 0 5.46289 2.93212 5.46289 6.5362C5.46289 8.78109 8.19022 13.7145 10.4781 17.4578C10.8047 17.992 11.3733 18.311 11.9991 18.311ZM9.37194 6.08742C9.37194 4.63884 10.5505 3.46031 11.9991 3.46031C13.4478 3.46031 14.6263 4.63884 14.6263 6.08742C14.6263 7.53605 13.4478 8.71458 11.9991 8.71458C10.5505 8.71458 9.37194 7.53609 9.37194 6.08742Z" fill="#FDF0E7" />
                    </g>
                    <defs>
                      <clipPath id="clip0_290_906">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>


                  <p className='font-inter font-semibold text-base text-white'>{d.contact.address}</p>
                </div>
              </div>

            )
          })
        }
      </section>

    </main>
  )
}

export default page