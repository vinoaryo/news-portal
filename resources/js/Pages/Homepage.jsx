import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react'
import Navbar from '@/Components/Navbar'
import NewsList from '@/Components/Homepage/NewsList'
import Paginator from '@/Components/Homepage/Paginator'
import Footer from '@/Components/Footer'
export default function Homepage(props) {
    console.log('props:', props)
    return (
        <div className='min-h-screen bg-base-100'>
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <NewsList news={props.news.data}/>
            </div>
            <div className="flex justify-center items-center m-2">
                <Paginator meta={props.news.meta}/>
            </div>
            <div className="sticky top-[100vh]">
                <Footer />
            </div>
        </div>
    )
}