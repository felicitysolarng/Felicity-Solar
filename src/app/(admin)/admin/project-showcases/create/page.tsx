
//import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import AddShowcase from '../components/AddShowcase'


export const metadata: Metadata = {
    title: 'Add Project Showcase - Felicity Solar',
    description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

function index() {

    return (
        <>
            <header className="max-h-16 bg-white py-8 border border-[#F0F2F5] flex justify-start px-6 items-center text-grey-800 font-bold text-2xl">
                Add Project Showcase
            </header>
            <AddShowcase />
        </>
    )
}

export default index