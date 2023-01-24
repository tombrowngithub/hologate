import {useState} from 'react';
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});
import 'react-quill/dist/quill.snow.css';

export default function Write() {
    const [value, setValue] = useState('');


    return (
        <div className="flex flex-col items-center">
            <div className="w-[98%] p-2 bg-zinc-300 shadow-lg">
                <h1 className="shadow-lg text-center text-xl font-bold mb-2 border border-zinc-200">Write a story</h1>
                <input className="w-full h-9 mb-3 text-center border border-zinc-300" type="text"
                       placeholder="Enter Book Title"/>
                <ReactQuill className="bg-white" value={value} onChange={setValue}/>
            </div>

            <div className="cursor-pointer flex justify-center mt-[40%] rounded w-[98%] bg-indigo-800 sticky">
                <button className="text-lg py-2 text-white ">Publish</button>
            </div>
        </div>
    )
}