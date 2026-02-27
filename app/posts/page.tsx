'use client';

import { useState, useEffect } from "react"

export default function Page() {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function GetPost() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
    return data.slice(0,18);}

    useEffect(() => {
        GetPost().then(posts => {
            setPosts(posts);
            setIsLoading(false);
        })
    }, [])

    if (isLoading) return <p>Carregando...</p>

    return (
    <div className=" h-auto p-5 gap-3 bg-[#e4b540] flex flex-wrap justify-between rounded-3xl">

        {posts.map(post => (

        <div key={post.id}>
            <div className="bg-white flex flex-col border-2 w-80 p-4 gap-1 rounded-md shadow-[4px_4px_0px]">
        
                <div className="font-bold">
                <h1>{post.title}</h1>
                </div>
            
                <p className="text-sm">{post.body}</p>
            </div>
        </div>
        ))}

    </div>
    
    )
}