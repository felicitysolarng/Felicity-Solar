"use client";

import Article from '@/components/ui/article'
import Pagination from '@/components/ui/pagination'
import { articles } from '@/lib/data'
import React, { useState } from 'react'

//type Props = {}

function Articles() {
    const [currentPage, setCurrentPage] = useState(1);


    const updateCurrentPage = (page: number) => {
        setCurrentPage(page)
    }
    return (
        <React.Fragment>
            <div className="grid gap-y-12 grid-cols-1 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                {
                    articles.length > 1 ? articles.map(b => {
                        return (
                            <Article key={b.title} title={b.title} category={b.category} cover={b.image} url={`/blog/${b.slug}`} />
                        )
                    }

                    ) : <p className='text-grey-700 '>No article currently available</p>
                }
            </div>
            <div className="flex justify-center items-center">
                <Pagination currentPage={currentPage} totalPages={50} onPageChange={updateCurrentPage} />
            </div>
        </ React.Fragment>

    )
}

export default Articles