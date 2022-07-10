import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
    console.log(props)
    return (
        <div className='flex justify-center items-center min-h-screen bg-neutral-800 text-white text-2xl'>
            <Head title={props.title} />
            <p>{props.description}</p>
        </div>
    )
}