import {ArrowLeftIcon, AdjustmentsHorizontalIcon} from '@heroicons/react/24/solid'
import Link from "next/link";
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import parse from 'html-react-parser'


export default function Read({task}) {

    return (
        <div className="h-screen">
            <div className="flex items-center justify-between  w-screen h-[45px] z-10 bg-white drop-shadow-lg top-0">
                <Link className="flex items-center text-white bg-indigo-800 h-full p-2" href="/"><ArrowLeftIcon
                    className="w-6 text-white active:text-white"/><span>Home</span></Link>

                <div className="text-sm font-bold ">
                    <p>{task.title}</p>
                </div>

                <div className="text-xs font-bold ">
                    <p>Page 1</p>
                </div>

                <div className=" ">
                    <AdjustmentsHorizontalIcon className="w-7 text-indigo-900 active:text-white"/>
                </div>
            </div>

            <div className="px-1.5 bg-zinc-300 shadow-lg">
                <div className="bg-white px-1">{parse(task.book_body)}</div>

            </div>
            <div className="pagination fixed bottom-0 left-0 right-0">
                <div className="active:bg-red-300 rounded-3xl">
                    <ArrowLeftCircleIcon className="w-10 text-indigo-600"/>
                </div>

                <div className="active:bg-red-300 rounded-3xl">
                    <ArrowRightCircleIcon className="w-10 text-indigo-600"/>
                </div>
            </div>
        </div>
    )
}

// export async function getStaticPaths() {
//     await connectDB()
//     const users = await BookModel.find()
//
//
//     const paths = users.map((user) => ({
//         params: { id: user._id.toString() },
//     }))
//
//     return { paths, fallback: false }
// }

export async function getServerSideProps({params}) {
    const res = await fetch(`http://localhost:3000/api/${params.id}`)
    if (res.status === 200) {
        const task = await res.json()
        return {
            props: {
                task,
            },
        }
    }
}
