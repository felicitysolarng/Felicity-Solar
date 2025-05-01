"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { milestones, testimonials } from "../../lib/data"

export class testimonial {
    name!: string;
    location!: string;
    img!: string;
    message!: string;
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 2400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 3000,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            },
        }
    ],
};

const Milestones = () => {
    return (
        <Slider {...settings}>
            {milestones.map((tm: { cover: string, msg: string }, i: number) => {
                const isOdd = i % 2 !== 0;
                return (
                    <aside key={i} className="py-4 ">
                        <>
                            {
                                isOdd ?

                                    <> <div className="flex w-full h-[150px]">
                                        <Image
                                            src={tm.cover}
                                            alt={tm.msg}
                                            width={300}
                                            height={150}
                                            className="w-full"
                                        />
                                    </div>
                                        <p
                                            style={{
                                                background: 'linear-gradient(90deg, rgba(255, 247, 241, 0.40) 0%, #FDF0E7 100%)',
                                            }}
                                            className="p-4 rounded-lg flex-col h-[150px] flex justify-center items-center"
                                        >
                                            {tm.msg}
                                        </p></>
                                    :

                                    <>
                                        <p
                                            style={{
                                                background: 'linear-gradient(90deg, rgba(255, 247, 241, 0.40) 0%, #FDF0E7 100%)',
                                            }}
                                            className="p-4 rounded-lg flex-col h-[150px] flex justify-center items-center"
                                        >
                                            {tm.msg}
                                        </p>
                                        <div className="flex w-full h-[150px]">
                                            <Image
                                                src={tm.cover}
                                                alt={tm.msg}
                                                width={300}
                                                height={150}
                                                className="w-full"
                                            />
                                        </div>
                                    </>

                            }
                        </>
                    </aside>
                )
            })}
        </Slider >
    );
};

export default Milestones;


/* 

<aside key={i} className="p-4 ">
                   <div className="flex w-full h-[150px]">
                       <Image
                           src={tm.cover}
                           alt={tm.msg}
                           width={300}
                           height={150}
                           className="w-full"
                       />
                   </div>
                   <p
                       style={{
                           background: 'linear-gradient(90deg, rgba(255, 247, 241, 0.40) 0%, #FDF0E7 100%)',
                       }}
                       className="p-4 rounded-lg flex-col h-[150px] flex justify-center items-center"
                   >
                       {tm.msg}
                   </p>
               </aside>*/