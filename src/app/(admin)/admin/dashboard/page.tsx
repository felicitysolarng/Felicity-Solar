import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Admin Dashboard- Felicity Solar',
    description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

function index() {
    return (
        <>
            <div className="flex h-16 border bg-white border-[#F0F2F5] justify-start items-center">
                <header className=" w-[90%] mx-auto  text-grey-800 font-bold text-2xl">
                    Dashboard
                </header>
            </div>

            <div className="flex w-[90%] mx-auto py-10 flex-col">
                <h1 className='font-inter font-semibold text-2xl text-grey-800 '>Welcome Back, Admin</h1>
                <div className="flex py-8">
                    <div className="flex stats gap-x-8 ">

                        <div className="bg-white rounded-md border h-[129px] w-[250px] border-grey-100 py-6 px-4 flex justify-center gap-y-2 flex-col">
                            <div className="flex items-center gap-x-2">
                                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24.3334" cy="24" r="24" fill="#FDF0E7" />
                                    <g clipPath="url(#clip0_309_122)">
                                        <path d="M31.2656 12.4117V16.6875H35.5411L31.2656 12.4117Z" fill="#ED7020" />
                                        <path d="M30.5625 18.0938C30.1742 18.0938 29.8594 17.7789 29.8594 17.3906V12H19.7812C18.6181 12 17.6719 12.9463 17.6719 14.1094V21.9698C17.9035 21.9488 18.138 21.9375 18.375 21.9375C20.7716 21.9375 22.917 23.0332 24.3368 24.75H31.9688C32.3571 24.75 32.6719 25.0648 32.6719 25.4531C32.6719 25.8414 32.3571 26.1562 31.9688 26.1562H25.2632C25.7027 27.0139 25.9861 27.964 26.0771 28.9688H31.9688C32.3571 28.9688 32.6719 29.2836 32.6719 29.6719C32.6719 30.0602 32.3571 30.375 31.9688 30.375H26.0771C25.8668 32.6971 24.6261 34.7262 22.8168 36H33.8438C35.0069 36 35.9531 35.0537 35.9531 33.8906V18.0938H30.5625ZM31.9688 21.9375H21.6562C21.2679 21.9375 20.9531 21.6227 20.9531 21.2344C20.9531 20.8461 21.2679 20.5312 21.6562 20.5312H31.9688C32.3571 20.5312 32.6719 20.8461 32.6719 21.2344C32.6719 21.6227 32.3571 21.9375 31.9688 21.9375Z" fill="#ED7020" />
                                        <path d="M18.375 23.3438C14.8857 23.3438 12.0469 26.1825 12.0469 29.6719C12.0469 33.1612 14.8857 36 18.375 36C21.8643 36 24.7031 33.1612 24.7031 29.6719C24.7031 26.1825 21.8643 23.3438 18.375 23.3438ZM20.25 30.375H18.375C17.9867 30.375 17.6719 30.0602 17.6719 29.6719V26.8594C17.6719 26.4711 17.9867 26.1562 18.375 26.1562C18.7633 26.1562 19.0781 26.4711 19.0781 26.8594V28.9688H20.25C20.6383 28.9688 20.9531 29.2836 20.9531 29.6719C20.9531 30.0602 20.6383 30.375 20.25 30.375Z" fill="#ED7020" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_309_122">
                                            <rect width="24" height="24" fill="white" transform="translate(12 12)" />
                                        </clipPath>
                                    </defs>
                                </svg>


                                <p className='font-inter font-medium text-base text-grey-500'>Total Products</p>
                            </div>
                            <h3 className='font-inter text-grey-900 font-bold text-[1.75rem]'>68</h3>
                        </div>
                        <div className="bg-white rounded-md border h-[129px] w-[250px] border-grey-100 py-6 px-4 flex justify-center gap-y-2 flex-col">
                            <div className="flex items-center gap-x-2">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="24" r="24" fill="#FDF0E7" />
                                    <path d="M22.5975 23.25L23.595 24.75H21.75V23.25H22.5975Z" fill="#ED7020" />
                                    <path d="M24.405 23.25H26.25V24.75H25.4025L24.405 23.25Z" fill="#ED7020" />
                                    <path d="M24 13.5C21.9233 13.5 19.8932 14.1158 18.1665 15.2696C16.4398 16.4233 15.094 18.0632 14.2993 19.9818C13.5045 21.9004 13.2966 24.0116 13.7018 26.0484C14.1069 28.0852 15.1069 29.9562 16.5754 31.4246C18.0438 32.8931 19.9148 33.8931 21.9516 34.2982C23.9884 34.7034 26.0996 34.4955 28.0182 33.7007C29.9368 32.906 31.5767 31.5602 32.7304 29.8335C33.8842 28.1068 34.5 26.0767 34.5 24C34.4995 21.2154 33.3931 18.545 31.4241 16.5759C29.4551 14.6069 26.7846 13.5005 24 13.5ZM28.5 24.75C28.6989 24.75 28.8897 24.829 29.0303 24.9697C29.171 25.1103 29.25 25.3011 29.25 25.5C29.25 25.6989 29.171 25.8897 29.0303 26.0303C28.8897 26.171 28.6989 26.25 28.5 26.25H27.75V28.5C27.7495 28.6611 27.6976 28.8178 27.6018 28.9473C27.506 29.0768 27.3714 29.1723 27.2175 29.22C27.1469 29.241 27.0736 29.2511 27 29.25C26.8763 29.2504 26.7544 29.2198 26.6456 29.1608C26.5368 29.1018 26.4446 29.0164 26.3775 28.9125L24.6 26.25H21.75V28.5C21.75 28.6989 21.671 28.8897 21.5303 29.0303C21.3897 29.171 21.1989 29.25 21 29.25C20.8011 29.25 20.6103 29.171 20.4697 29.0303C20.329 28.8897 20.25 28.6989 20.25 28.5V26.25H19.5C19.3011 26.25 19.1103 26.171 18.9697 26.0303C18.829 25.8897 18.75 25.6989 18.75 25.5C18.75 25.3011 18.829 25.1103 18.9697 24.9697C19.1103 24.829 19.3011 24.75 19.5 24.75H20.25V23.25H19.5C19.3011 23.25 19.1103 23.171 18.9697 23.0303C18.829 22.8897 18.75 22.6989 18.75 22.5C18.75 22.3011 18.829 22.1103 18.9697 21.9697C19.1103 21.829 19.3011 21.75 19.5 21.75H20.25V19.5C20.249 19.3387 20.3003 19.1813 20.3961 19.0515C20.492 18.9218 20.6274 18.8265 20.7819 18.7801C20.9364 18.7336 21.1018 18.7385 21.2533 18.7939C21.4049 18.8493 21.5344 18.9523 21.6225 19.0875L23.4 21.75H26.25V19.5C26.25 19.3011 26.329 19.1103 26.4697 18.9697C26.6103 18.829 26.8011 18.75 27 18.75C27.1989 18.75 27.3897 18.829 27.5303 18.9697C27.671 19.1103 27.75 19.3011 27.75 19.5V21.75H28.5C28.6989 21.75 28.8897 21.829 29.0303 21.9697C29.171 22.1103 29.25 22.3011 29.25 22.5C29.25 22.6989 29.171 22.8897 29.0303 23.0303C28.8897 23.171 28.6989 23.25 28.5 23.25H27.75V24.75H28.5Z" fill="#ED7020" />
                                </svg>

                                <p className='font-inter font-medium text-base text-grey-500'>Total Orders</p>
                            </div>
                            <h3 className='font-inter text-grey-900 font-bold text-[1.75rem]'>₦680,323</h3>
                        </div>

                        <div className="bg-white rounded-md border h-[129px] w-[250px] border-grey-100 py-6 px-4 flex justify-center gap-y-2 flex-col">
                            <div className="flex font-inter font-medium text-sm text-grey-500">Total Blogs</div>
                            <h3 className='font-inter text-grey-900 font-bold text-[1.75rem]'>6</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default index