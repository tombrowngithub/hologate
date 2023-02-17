import {AdjustmentsHorizontalIcon, ArrowLeftIcon, XMarkIcon} from '@heroicons/react/24/solid'
import Link from "next/link";
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from "@heroicons/react/24/outline";
import {useEffect, useRef, useState} from "react";
import parse from 'html-react-parser'
import ReadSetting from "/pages/NavBar Utilities/ReadSetting"

export default function Read({Books}) {
    const [readSettings, setReadSettings] = useState(false)

    //const [story, setStory] = useState("");
    // const [pageCount, setPageCount] = useState(0);
    // const [wordsPerPage, setWordsPerPage] = useState(250);
    // const [storyLength, setStoryLength] = useState([]);

    // const executeCallBack = useRef(false);
    // useEffect(() => {
    //     if (executeCallBack.current === true) {
    //         return;
    //     }
    //     if (typeof window !== 'undefined') {
    //         if (window.matchMedia("(max-height: 844px)").matches) {
    //             setWordsPerPage(309);
    //         }
    //         if (window.matchMedia("(max-height: 736px)").matches) {
    //             setWordsPerPage(298);
    //         }
    //         if (window.matchMedia("(max-height: 667px)").matches) {
    //             setWordsPerPage(268);
    //         }
    //         if (window.matchMedia("(max-height: 640px)").matches) {
    //             setWordsPerPage(211);
    //         }
    //         if (window.matchMedia("(max-height: 568px)").matches) {
    //             setWordsPerPage(214);
    //         }
    //         if (window.matchMedia("(max-height: 480px)").matches) {
    //             setWordsPerPage(175);
    //         }
    //         if (window.matchMedia("(max-height: 411px)").matches) {
    //             setWordsPerPage(148);
    //         }
    //         if (window.matchMedia("(max-height: 375px)").matches) {
    //             setWordsPerPage(133);
    //         }
    //         if (window.matchMedia("(max-height: 320px)").matches) {
    //             setWordsPerPage(107);
    //         }
    //     }
    //
    //     let strArr = [];
    //     // Loop through the doc (Books.book_body) I get from Database, partition it into an array length 5 with 10 words each
    //     for (let i = 0; i <= Books.book_body.length - 10; i += wordsPerPage) {
    //         const newStr = Books.book_body.split(" ")        // split the words into the array
    //         const stringSlice = newStr.slice(i, i + wordsPerPage).join(" ")  //slice is base on the looped count
    //         if (stringSlice.trim() !== "") {      // check for empty string in the array and remove it
    //             strArr.push(stringSlice);      // Add each split words to a new array containing 10 words
    //         }
    //         if (strArr.length >= Books.book_body.length) { // break from the loop once the user reach the end of array containing words
    //             break;
    //         }
    //     }
    //     setStoryLength(strArr)
    //     setStory(strArr[pageCount]) // Now I set the collected words to the user while I use the "pageCount" to navigate
    // }, [Books.book_body, pageCount, wordsPerPage]);
    //
    // function NextPages() {
    //     if (pageCount >= storyLength.length - 1) {
    //         return;
    //     }
    //     setPageCount(prevState => prevState + 1);
    //
    // }
    //
    //
    // function PrevPage() {
    //     if (pageCount <= 0) {
    //         return;
    //     }
    //     setPageCount(prevState => prevState - 1);
    // }


    function MyReadSettings() {
        setReadSettings(!readSettings)
        console.log("Read settings")
    }

    return (
        <>
            {readSettings && <ReadSetting MyExit={readSettings} MyExitSettings={setReadSettings}/>}
            <div className="h-screen dark:bg-black">
                <div
                    className="dark:bg-[#616161] flex items-center justify-between  w-screen h-[45px] z-10 bg-white drop-shadow-lg top-0 sticky">
                    <Link className="flex items-center text-white bg-indigo-800 h-full p-2 dark:bg-[#2d2d2d]"
                          href="/"><ArrowLeftIcon
                        className="w-6 text-white active:text-white"/><span>Home</span></Link>

                    <div className="text-sm font-bold ">
                        <p>{Books.title}</p>
                    </div>

                    <div className="text-xs font-bold ">
                        <p>Page 1</p>
                    </div>

                    <div onClick={MyReadSettings } className=" ">
                        {!readSettings ? <AdjustmentsHorizontalIcon className="w-7 text-indigo-900 active:text-white dark:text-white"/>
                            : <XMarkIcon className="w-7"/>}
                    </div>
                </div>

                <div className="px-1.5 bg-zinc-300 dark:bg-[#616161] shadow-lg mt-2 story ">
                    <div className="bg-white dark:bg-black px-1 px-2 text-start ">{parse(Books.book_body)}</div>
                </div>


                {/*<div className="pagination bottom-0 left-0 right-0 bg-zinc-300 shadow-lg">*/}
                {/*    <div onClick={PrevPage} className={pageCount <= 0 ? "" : "active:bg-red-300 rounded-3xl"}>*/}
                {/*        <ArrowLeftCircleIcon className={pageCount <= 0 ? "w-10 text-slate-400" : "w-10 text-indigo-600"}/>*/}
                {/*    </div>*/}

                {/*    <div onClick={NextPages}*/}
                {/*         className={pageCount >= storyLength.length - 1 ? "" : "active:bg-red-300 rounded-3xl"}>*/}
                {/*        <ArrowRightCircleIcon*/}
                {/*            className={pageCount >= storyLength.length - 1 ? "w-10 text-slate-400" : "w-10 text-indigo-600"}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>

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
