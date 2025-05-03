
import BatteryTabContent from '@/components/sections/product-tabs/BatteryTabContent';
import ChargeControllersTabContent from '@/components/sections/product-tabs/ChargeControllerTabContent';
import InverterTabContent from '@/components/sections/product-tabs/InverterTabContent';
import SolarPanelTabContent from '@/components/sections/product-tabs/SolarPanelsTabContent';
import StreetLightTabContent from '@/components/sections/product-tabs/StreetLightsTabContent';
import FAQ from '@/components/ui/faq';
import LinkButton from '@/components/ui/Link';
import { blogs, productsCats } from '@/lib/data';
import { MoveRight } from 'lucide-react';
import type { Metadata } from 'next'
import Image from 'next/image';
import { Tabs } from "radix-ui";
import Navbar from '@/components/layouts/navbar/Navbar';
import Testimonials from '@/components/sections/testimonial';
import Article from '@/components/ui/article';
import { WhatsApp } from '@/lib/icons';
import Link from 'next/link';



export const metadata: Metadata = {
  title: 'Home - Felicity Solar',
  description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

export default function Home() {

  return (
    <main className=" font-[family-name:var(--font-inter)]">

      <section className=" slideshow flex relative flex-col h-[90vh] md:h-[70vh] xl:h-[95vh] bg-no-repeat bg-center bg-cover bg-[url('/assets/images/landing_page_hero1.png')] justify-center ">
        <Navbar linkClassName="text-white" className='hidden mx-auto top-0 absolute w-full  lg:flex text-black' variant='white'/>
        <div className="w-[90%] xl:w-[80%] 2xl:w-[75%] mx-auto gap-y-8 flex flex-col">


          <div className="flex flex-col">
            <h1 className='text-6xl flex gap-y-2 flex-col font-semibold text-white w-w-[90%] xl:w-[90%]'>
              <span className='lg:block'>Power Your Home or Business</span>
              <span className='xl:block'>
                with <span className='text-primary'>Reliable</span> Solar
                <span className='xl:block'> Energy</span>
              </span>
            </h1>
          </div>
          <p className='text-white font-medium text-lg'>Affordable, sustainable solar solutions made for Nigeria</p>
          <div className="flex gap-x-10 items-center">
            <LinkButton className='transition-all duration-[250ms] hover:scale-105 hover:bg-[#007f24] hover:text-white' variant={"primary"} href='/get-a-free-quote' size={"lg"} label='Get a Free Quote' />
            <div className="flex items-center">
              <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_413_1638)">
                  <circle cx="58" cy="60" r="32" fill="#ED7020" />
                </g>
                <path d="M60.3913 52.9997C61.5308 53.222 62.5781 53.7793 63.399 54.6003C64.22 55.4212 64.7773 56.4685 64.9996 57.608M60.3913 48.333C62.7588 48.596 64.9665 49.6562 66.6519 51.3395C68.3373 53.0228 69.4003 55.2292 69.6663 57.5963M55.9311 62.1733C54.5292 60.7714 53.4223 59.1863 52.6103 57.4951C52.5405 57.3496 52.5056 57.2769 52.4787 57.1849C52.3834 56.8578 52.4519 56.4561 52.6502 56.1791C52.706 56.1012 52.7727 56.0345 52.9061 55.9012C53.3139 55.4933 53.5179 55.2893 53.6512 55.0843C54.154 54.3109 54.154 53.3139 53.6512 52.5405C53.5179 52.3354 53.3139 52.1315 52.9061 51.7236L52.6787 51.4963C52.0587 50.8763 51.7487 50.5663 51.4158 50.3979C50.7536 50.0629 49.9716 50.0629 49.3095 50.3979C48.9765 50.5663 48.6665 50.8763 48.0465 51.4963L47.8626 51.6802C47.2447 52.2981 46.9358 52.607 46.6998 53.0271C46.438 53.4932 46.2497 54.2171 46.2513 54.7517C46.2527 55.2334 46.3462 55.5627 46.5331 56.2212C47.5376 59.7602 49.4328 63.0996 52.2188 65.8856C55.0047 68.6715 58.3442 70.5668 61.8831 71.5712C62.5416 71.7581 62.8709 71.8516 63.3527 71.853C63.8873 71.8546 64.6112 71.6664 65.0773 71.4045C65.4973 71.1686 65.8063 70.8596 66.4241 70.2417L66.6081 70.0578C67.2281 69.4378 67.5381 69.1278 67.7065 68.7949C68.0414 68.1327 68.0414 67.3507 67.7065 66.6886C67.5381 66.3556 67.2281 66.0456 66.6081 65.4256L66.3807 65.1983C65.9728 64.7904 65.7689 64.5864 65.5638 64.4531C64.7904 63.9503 63.7934 63.9503 63.0201 64.4531C62.815 64.5865 62.6111 64.7904 62.2032 65.1983C62.0698 65.3316 62.0031 65.3983 61.9252 65.4541C61.6482 65.6525 61.2466 65.721 60.9195 65.6256C60.8274 65.5988 60.7547 65.5639 60.6092 65.494C58.918 64.682 57.3329 63.5751 55.9311 62.1733Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <filter id="filter0_d_413_1638" x="0" y="0" width="132" height="132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_413_1638" />
                    <feOffset dx="8" dy="6" />
                    <feGaussianBlur stdDeviation="16" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.929412 0 0 0 0 0.439216 0 0 0 0 0.12549 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_413_1638" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_413_1638" result="shape" />
                  </filter>
                </defs>
              </svg>


              <div className="flex flex-col">
                <h3 className='text-white text-base font-semibold'>Talk to an expert</h3>
                <p className='text-white text-base font-semibold'>+234 817 147 9561</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION ONE */}
      <section className='flex  py-32 mx-auto w-[90%] 2xl:w-[75%] md:gap-x-8 lg:gap-x-26'>
        <div className="flex flex-col gap-y-4 basis-1/2">
          <h3 className='text-base italize italic text-primary'>About us</h3>
          <h2 className='uppercase text-[101928] text-2xl font-bold'>GUANGZHOU FELICITY SOLAR NIG LTD</h2>
          <div className="flex flex-col gap-y-4">
            <p className='text-[#667185] text-base font-medium'>Established in 2016 and headquartered in Festac, Lagos, Felicity Solar Nigeria has grown to become one of the most recognized and trusted solar energy brands in the country. </p>
            <p className='text-[#667185] text-base font-medium'>With a strong focus on sales and after-sales support, we have built a robust network of over 12 service centers across Nigeria—ensuring fast, efficient, and professional assistance for our customers nationwide </p>
            <p className='text-[#667185] text-base font-medium'>Felicity Solar is a forward-thinking company committed to advancing clean energy solutions </p>
          </div>
          <LinkButton href='/about-us' label='Read more' className='w-[132px]' />
        </div>
        <div className="flex basis-1/2 justify-center">
          <Image src={"/assets/images/about_us_image.png"} alt='About Felicity solar limited' width={481} height={475} />
        </div>
      </section>
      {/* SECTION TWO */}
      <section className='  py-32 '>
        <div className="flex gap-y-12 mx-auto w-[90%] 2xl:w-[75%] gap-x-26 flex-col">
          <div className="flex items-center flex-col gap-y-4">
            <h3 className='text-base italize italic text-primary'>Felicity Solar Products</h3>
            <h2 className=' text-[#101928] text-3xl font-bold'>What do we Offer to you?</h2>
            <h3 className='text-[#667185] font-medium text-base'>Solar Panels. Batteries. Inverters. All in One Place.</h3>
          </div>

          <Tabs.Root defaultValue="solar_panels" orientation="vertical">
            <Tabs.List aria-label="products" className='bg-[#F7F9FC] border border-[#F0F2F5] rounded-full flex gap-x-12 px-4 py-3 w-fit mx-auto'>
              {productsCats.map(i => {
                return (
                  <Tabs.Trigger value={i.value} key={i.value} className='data-[state=active]:text-white data-[state=active]:bg-grey-950 data-[state=active]:rounded-full data-[state=active]:px-12 data-[state=active]:py-4 font-medium'>{i.label}</Tabs.Trigger>
                )
              })}
            </Tabs.List>
            <SolarPanelTabContent />
            <BatteryTabContent />
            <StreetLightTabContent />
            <InverterTabContent />
            <ChargeControllersTabContent />
          </Tabs.Root>
        </div>
      </section>
      {/* SECTION THREE */}
      <section className='  py-32 '>
        <div className="flex gap-y-12 mx-auto w-[90%] 2xl:w-[75%] gap-x-26 flex-col ">
          <div className="flex items-center flex-col gap-y-4">
            <h3 className='text-base italize italic text-primary'>Locations</h3>
            <h2 className=' text-[#101928] text-3xl font-bold'>How To Find Us?</h2>
          </div>
          <div className="flex bg-primary rounded-lg min-h-[400px] py-12 px-8 xl:px-22 justify-between">
            <div className="flex flex-col gap-y-16 basis-2/5">
              <Image src={"/assets/images/location_frame_1.png"} width={224} height={44} alt='locations logos' />
              <div className="flex gap-y-4 flex-col">
                <h3 className='text-xl font-bold text-white'>Looking to buy our solar panels, <span className='xl:block'>batteries, or street lights?</span> </h3>
                <p className='text-sm text-white font-medium'>We’ve made it easy for you to find a trusted distributor right in your area. Visit, call, or message our partners across Nigeria to get started with clean and reliable solar energy.</p>
              </div>
              <LinkButton className='max-w-[214px] max-h-12' variant={"white"} href="/locations" label="See All Locations " icon={<MoveRight className='ml-2' />} />
            </div>
            <div className="flex flex-col gap-y-8 basis-1/2">
              <Image src={"/assets/images/location_frame_2.png"} width={519} height={370} alt='location pin point where felicity solar limited have their offices' />
            </div>
          </div>
        </div>
      </section>
      {/* SECTION FOUR [TESTIMONIAL] */}
      <section className='py-32  custom-gradient' >
        <div className="flex flex-col mx-auto w-[95%] 2xl:w-[90%] gap-x-26 gap-y-20">
          <div className="flex justify-center items-center flex-col gap-y-4">
            <h3 className='text-base italize italic text-primary'>Customer success stories</h3>
            <h2 className=' text-[#101928] text-3xl font-bold'>See what our customers are saying</h2>
          </div>
          <Testimonials />
        </div>

      </section>
      {/* SECTION FOUR {FAQ]*/}
      <section className='py-32 flex-col flex gap-y-22' >
        <h2 className=' text-[#101928] text-3xl text-center font-bold'>Frequently Asked Questions</h2>
        <div className="flex gap-y-12 mx-auto w-[90%] 2xl:w-[75%] gap-x-26 flex-col ">
          <FAQ />
        </div>
      </section>
      {/* SECTION FIVE [BLOG] */}
      <section className='py-32 flex-col flex gap-y-22' >

        <div className="flex gap-y-26 mx-auto w-[90%] 2xl:w-[75%] gap-x-26 flex-col ">
          <div className="flex justify-between items-center">
            <h2 className=' text-[#101928] text-3xl text-center font-bold'>The Future of Solar Power</h2>
            <LinkButton className='max-w-[214px] max-h-12 text-grey-800 border border-grey-700' variant={"white"} href="/locations" label="View all " icon={<MoveRight className='ml-2' />} />
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-x-10 lg:gap-y-28 xl:gap-y-0">
            {
              blogs.length > 1 ? blogs.map(b =>
                <Article key={b.title} title={b.title} category={b.category} cover={b.cover} url='/blog' />
              ) : <p className='text-grey-700 '>No article currently available</p>
            }
          </div>
        </div>
      </section>

      <section className='py-32 '>
        <div className="flex gap-y-12 mx-auto w-[90%] 2xl:w-[75%] flex-col ">

          <div className="flex justify-center items-center flex-col bg-cover bg-center bg-no-repeat bg-[url('/assets/images/cta_section.png')] w-full min-h-[500px] rounded-lg py-12 px-22 gap-y-8 ">
            <div className="flex flex-col gap-y-3">
              <h2 className='font-bold text-4xl text-white'>Ready to Enjoy Uninterrupted Power?</h2>
              <p className='text-sm text-white font-medium text-center'>Felicity is built to run residential solar workflows end to end or can be a plug and play <span className='lg:block'>solution with other existing apps.</span></p>
            </div>
            <div className="flex gap-x-6">
              <LinkButton className='max-w-[310px] px-6 text-base font-medium max-h-12 group-hover:text-white' variant={"white"} href={"/get-free-quote"} label="Get a Free Energy Quote Now" icon={<MoveRight className='ml-2' />} />

              <Link href="/get-free-quote" className='flex  items-center gap-x-2 rounded-md max-w-[310px] bg-[#25D366] px-6 text-base font-medium max-h-12 group-hover:text-white'>
                <WhatsApp />
                <span>Send a Message</span>
                <MoveRight className='ml-0' />
              </Link>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
