// components/WhyBlakskillDropdown.tsx
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const ProductsDropdown = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex gap-6 z-50 w-full flex-col">
            <h3 className="text-blakskill-primary900 font-inter font-semibold text-xl">Why Blakskill?</h3>
            <p className="font-inter text-sm text-tertiary-600 ">Our vast network of technologists and AI-driven matching help you hire the world's best.</p>
            <span className="flex items-center">
                <Link href="/why-blakskill" className="font-inter text-blakskill-purpleDefault text-sm font-medium">Learn more  </Link>
                <ChevronRight size={15} className="ml-1" />
            </span>
          {/*   <Image src={"/assets/images/whyblaksill_navbar_img.png"} alt="" /> */}
        </div>
    );
};

export default ProductsDropdown;
