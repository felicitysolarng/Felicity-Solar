import Navbar from '@/components/layouts/navbar/Navbar';
import { ChevronRight } from 'lucide-react';
import { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
//import { useRouter } from 'next/router'


type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: `Blog Post - ${slug}`,
        description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
    }
};



export default async function index({ params }: Props) {
    const { slug } = await params

    return (
        <div className="flex flex-col">
            <Navbar linkClassName="text-black" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />
            <main className='font-[family-name:var(--font-inter)] bg-white mx-auto w-[90%] flex-col gap-y-8 xl:w-[70%] 2xl:w-[60%]'>
                <div className="flex lg:pb-4 pt-8 gap-y-1 lg:gap-y-0 lg:items-center flex-col md:flex-row">
                    <Link href="/blog" className='flex font-medium  text-sm 2xl:text-base items-center text-grey-400'>Blog <ChevronRight size={16} /></Link>
                    <p className='text-grey-700 text-sm 2xl:text-base font-medium'>Post: {slug}</p>
                </div>

                <section className='w-full lg:w-4/5 pb-32 pt-14'>
                    <div className="flex w-full">
                        <Image src={"/assets/images/blog1_lg.png"} width={678} height={300} alt={slug} />
                    </div>
                    <div className="flex flex-col gap-y-2 mt-5 mb-18">
                        <h3 className='uppercase text-primary font-bold text-xs xl:text-sm '>Annoucement</h3>
                        <h2 className='text-2xl font-bold text-grey-800'>Felicity Solar Announces Construction of 3rd Plant.</h2>
                    </div>
                    <div className="flex flex-col gap-y-12">
                        <p className='font-medium text-base text-grey-700 leading-8'>Guangzhou Felicitysolar Technology Co., Ltd is located near Renhe Town, Baiyun District, Guangzhou, China. The new factory covers an area of 20,000 square meters. The primary personnel and equipment have been arranged and the production line operates normally.</p>

                        <p className='font-medium text-base leading-8 text-grey-700'>
                            At present, the overall production capacity is 10,000 units of energy storage batteries, 20,000 units of inverters, 10,000 units of controllers, 15,000 units of street lamps, and 8,700 units of gel batteries. In doing so, the company hopes to not only benefit as efficiently as possible from the forecast growth of the renewable energy industry (including photovoltaics such as Energy Storage Lithium Batteries, Hybrid Inverters, Solar charge controllers, Solar Panels, and Gel Battery) but also contribute to product design and development of new projects. It aims to manufacture systems mainly used in the fields of home energy storage systems and large-scale photovoltaic power plants. This will create more than 100 new jobs.
                        </p>
                        <Image src={"/assets/images/3rd_plant_lg.png"} width={678} height={300} alt='3rd plant' />
                        <p className='font-medium leading-8 text-base text-grey-700'>
                            At present, the overall production capacity is 10,000 units of energy storage batteries, 20,000 units of inverters, 10,000 units of controllers, 15,000 units of street lamps, and 8,700 units of gel batteries. In doing so, the company hopes to not only benefit as efficiently as possible from the forecast growth of the renewable energy industry (including photovoltaics such as Energy Storage Lithium Batteries, Hybrid Inverters, Solar charge controllers, Solar Panels, and Gel Battery) but also contribute to product design and development of new projects. It aims to manufacture systems mainly used in the fields of home energy storage systems and large-scale photovoltaic power plants. This will create more than 100 new jobs.
                        </p>
                        <Image src={"/assets/images/inverters.png"} width={678} height={300} alt='3rd plant' />
                        <p className='font-medium leading-8 text-base text-grey-700'>
                            “We will have more than 100 branches around the world in the future, allowing us to play a key role in the growth of renewable energy globally,” said CEO Soki. “Building this new factory will help us protect our supply chain and continuously upgrade our products. Staying true to the company’s purpose: Felicitysolar makes life full of hope. This will allow us to strengthen our reputation for excellence as a brand and strengthens our presence in Africa and the Middle East. core markets, expanding operations in Europe and South America. In addition, this expansion increases our flexibility.
                        </p>
                        <p className='font-medium leading-8 text-base text-grey-700'>
                            We can further increase capacity at any time while minimizing risk, dependencies and costs.”
                            With the rapid development of Felicitysolar, the establishment of new factories and the introduction of high-end technical talents have resulted in the continuous doubling of Felicitysolar’s sales, the continuous iterative upgrade of its products, the acquisition of a number of R&D certificates, and the availability of CE, UN38.3, MSDS, and other products Certificate to sell the brand to all regions of the world.
                        </p>
                        <Image src={"/assets/images/warehouse_products.png"} width={678} height={300} alt='3rd plant' />

                    </div>
                </section>

            </main>
        </div>

    )
}