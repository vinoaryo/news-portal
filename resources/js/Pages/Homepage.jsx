import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react'
import Navbar from '@/Components/Navbar'
import NewsList from '@/Components/Homepage/NewsList'
import Paginator from '@/Components/Homepage/Paginator'
export default function Homepage(props) {
    console.log('props:', props)
    return (
        <div className='min-h-screen bg-neutral-800'>
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <NewsList news={props.news.data}/>
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta}/>
            </div>
        </div>
    )
}