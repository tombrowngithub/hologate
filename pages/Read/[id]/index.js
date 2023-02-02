import {AdjustmentsHorizontalIcon, ArrowLeftIcon} from '@heroicons/react/24/solid'
import Link from "next/link";
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from "@heroicons/react/24/outline";
import {useEffect, useRef, useState} from "react";
import parse from 'html-react-parser'

export default function Read({Books}) {
    const [story, setStory] = useState("");
    const [pageCount, setPageCount] = useState(0);
    const [storyLength, setStoryLength] = useState([]);


    //console.log(length.length-1)
    const executeCallBack = useRef(false);
    useEffect(() => {
        if (executeCallBack.current === true) {
            return
        }
        let strArr = [];
        // Loop through the doc (Books.book_body) I get from Database, partition it into an array length 5 with 10 words each
        for (let i = 0; i <= Books.book_body.length - 10; i += 250) {
            const newStr = Books.book_body.split(" ")        // split the words into the array
            const stringSlice = newStr.slice(i, i + 250).join(" ")  //slice is base on the looped count
            if (stringSlice.trim() !== "") {      // check for empty string in the array and remove it
                strArr.push(stringSlice);      // Add each split words to a new array containing 10 words
            }
            if (strArr.length >= Books.book_body.length) { // break from the loop once the user reach the end of array containing words
                break;
            }
        }
        setStoryLength(strArr)
        setStory(strArr[pageCount]) // Now I set the collected words to the user while I use the "pageCount" to navigate
    }, [Books.book_body, pageCount])

    function NextPages() {
        if (pageCount >= storyLength.length - 1) {
            return;
        }
        setPageCount(prevState => prevState + 1);

    }


    function PrevPage() {
        if (pageCount <= 0) {
            return;
        }
        setPageCount(prevState => prevState - 1);
    }


    return (
        <div className="h-screen">
            <div className="flex items-center justify-between  w-screen h-[45px] z-10 bg-white drop-shadow-lg top-0">
                <Link className="flex items-center text-white bg-indigo-800 h-full p-2" href="/"><ArrowLeftIcon
                    className="w-6 text-white active:text-white"/><span>Home</span></Link>

                <div className="text-sm font-bold ">
                    <p>{Books.title}</p>
                </div>

                <div className="text-xs font-bold ">
                    <p>Page 1</p>
                </div>

                <div className=" ">
                    <AdjustmentsHorizontalIcon className="w-7 text-indigo-900 active:text-white"/>
                </div>
            </div>

            <div className="px-1.5 bg-zinc-300 shadow-lg">
                <div className="bg-white px-1">{parse(story)}</div>

            </div>
            <div className="pagination fixed bottom-0 left-0 right-0">
                <div onClick={PrevPage} className={pageCount <= 0 ? "": "active:bg-red-300 rounded-3xl"}>
                    <ArrowLeftCircleIcon className={pageCount <= 0 ? "w-10 text-slate-400" : "w-10 text-indigo-600"}/>
                </div>

                <div onClick={NextPages} className={pageCount >= storyLength.length - 1 ? "": "active:bg-red-300 rounded-3xl"}>
                    <ArrowRightCircleIcon
                        className={pageCount >= storyLength.length - 1 ? "w-10 text-slate-400" : "w-10 text-indigo-600"}/>
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
        const Books = await res.json()
        return {
            props: {
                Books,
            },
        }
    }
}
