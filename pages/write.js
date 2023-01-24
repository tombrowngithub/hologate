import {useState} from 'react';
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});
import 'react-quill/dist/quill.snow.css';

export default function Write() {
    const [value, setValue] = useState('');


    return (
        <div className="w-full p-2 bg-zinc-200 shadow-lg">
            <h1 className="shadow-lg text-center text-xl font-bold mb-2 border border-zinc-200">Write a story</h1>
            <input className="w-full h-9 mb-3 text-center border border-zinc-300" type="text" placeholder="Book Title"/>
            <ReactQuill className="bg-white h-[20rem]" value={value} onChange={setValue}/>
        </div>
    )
}