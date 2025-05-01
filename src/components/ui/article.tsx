import Image from 'next/image'
import React from 'react'
import LinkButton from './Link'
import { MoveRight } from 'lucide-react'

type Props = {
    cover: string,
    title: string,
    category: string,
    url: string
}

function    Article({ cover, title, category, url }: Props) {
    return (
        <article className='flex group flex-col  h-auto xl:min-h-[361px]'>
            <div className="flex h-[230px] xl:max-h-[184px]">
                <Image src={cover} width={326} height={184} alt={title} className='object-cover object-bottom w-full h-auto' />
            </div>

            <div className="flex flex-col border-x border-b rounded-b-lg p-4 border-grey-200 group-hover:bg-grey-950 py-10 grow">
                <h4 className='text-primary font-bold text-xs uppercase'>{category}</h4>
                <h3 className='text-lg font-bold text-grey-800 mt-2 group-hover:text-white'>{title}</h3>

                <LinkButton className='max-w-[110px] text-sm px-0 max-h-12 group-hover:text-white' variant={"outline"} href={url ? url : "#"} label="Read more " icon={<MoveRight className='ml-2' />} />
            </div>
        </article>
    )
}

export default Article