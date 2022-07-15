import React, { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Navbar from "@/Components/Navbar";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotification, setisNotification] = useState(false);

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };
    return (
        <div className="min-h-screen bg-base-100">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="card w-full bg-white shadow-xl m-2">
                <div className="card-body">
                    <div className="p-4 text-2xl">Edit News</div>
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full m-2 bg-white shadow"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full m-2 bg-white shadow"
                        onChange={(description) => setDescription(description.target.value)}
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full m-2 bg-white shadow"
                        onChange={(category) => setCategory(category.target.value)}
                        defaultValue={props.myNews.category}
                    />
                    <button
                        className="btn glass m-2"
                        onClick={() => handleSubmit()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
