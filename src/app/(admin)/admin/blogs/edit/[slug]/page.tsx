
//import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import EditArticle from '../../components/EditArticle';



export const metadata: Metadata = {
    title: 'Edit Blog - Felicity Solar',
    description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

async function index({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    return (
        <>
            <header className="min-h-16 h-[7vh] bg-white py-8 border border-[#F0F2F5] flex justify-start px-6 items-center text-grey-800 font-bold text-2xl">
                Edit Blog
            </header>
         <EditArticle id={slug} />
        </>
    )
}

export default index