import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
    console.log(props)
    return (
        <div className='flex justify-center items-center min-h-screen bg-neutral-800'>
            <Head title={props.title} />
            <div>
            {props.news ? props.news.map((data, i) => {
                return (
                    <div key={i} className="p-4 m-2 bg-white text-black shadow-md ronded-md">
                        <p className="text-2xl">{data.title}</p>
                        <br />
                        <p >{data.description}</p>
                        <i className="text-sm">{data.category}</i>
                        <i className="text-sm">{data.author}</i>
                    </div>
                )
            }): <p>Saat ini belum ada berita</p>};
            </div>
        </div>
    )
}