
import Link from 'next/link'
import React from 'react'

//

function Project() {
    return (

        <Link href={"/project-showcase/lagos/joshua0920"} className="relative flex-shrink-0 overflow-hidden bg-orange-500 rounded-lg  shadow-lg group" >

            {/* Main image section */}
            <div className=" pt-10 px-10 flex items-center min-h-72 justify-center group-hover:scale-110 transition-transform duration-300 bg-[url('/assets/images/solar_panel_project.jpg')] bg-center bg-no-repeat bg-cover" >
                <div
                    className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                    style={{
                        background: "radial-gradient(black, transparent 60%)",
                        transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                        opacity: "0.2",
                    }}
                ></div>
            </div >

            {/* 🟣 Overlay for better text visibility */}
            < div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100 lg:opacity-0  lg:group-hover:opacity-100 transition-opacity duration-300 z-10" style={{ "background": "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0 %, #000 100 %), url(<path-to-image>) lightgray 50% / cover no-repeat" }}></div>

            {/* Text Content */}
            < div className="gap-y-3 text-white px-6 pb-6 mt-6 flex flex-col z-10 absolute bottom-0" >
                <span className="block opacity-75 bg-primary px-1 text-sm font-medium -mb-1 text-white rounded-xs w-fit">
                    Solar panel
                </span>
                <span className="block font-semibold text-xl">50K System Installed at Felicity Solar`&apos;s New Plant</span>
            </div >

        </Link >

    )
}

export default Project


{/* <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
            <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
                viewBox="0 0 375 283" fill="none" style={{ "opacity": "0.1" }}>
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                    style={{ "background": "radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2F" }}>
                </div>
                <Image className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" width={400} height={300} />
            </div>
            <div className="gap-y-3 text-white px-6 pb-6 mt-6 flex flex-col">
                <span className="block opacity-75 text-grey-800 px-1 text-sm font-medium -mb-1 bg-white rounded-sm w-fit">Indoor</span>

                <span className="block font-semibold text-xl">Peace Lily</span>

            </div>
        </div> */}