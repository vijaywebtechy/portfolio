import React from 'react'
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();
    return (
        <section className='notfound bg-white dark:bg-slate-950'>
            <div className="w-full max-w-5xl mx-auto px-4 text-center h-full flex flex-col items-start justify-center">
                <h2 className='font-inter text-2xl font-normal text-gray-600 dark:text-gray-400'>Page not found 😜😜</h2>
                <p className='font-montserrat text-lg font-normal text-gray-600 dark:text-gray-400 my-5'>This isn't the page you were looking for. But great things still exist—like my portfolio! 😊</p>
                <button onClick={() => router.push("/")} type='button' className='px-4 py-2 border border-gray-400 rounded-md text-gray-600 dark:text-gray-400'>Let's go home</button>
            </div>
        </section>
    )
}

export default NotFound
