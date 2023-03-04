import {AdjustmentsHorizontalIcon, ArrowLeftIcon, XMarkIcon} from '@heroicons/react/24/solid'
import Link from "next/link";
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from "@heroicons/react/24/outline";
import {useEffect, useState, useContext} from "react";
import parse from 'html-react-parser'
import ReadSetting from "/pages/NavBar Utilities/ReadSetting"
import Head from "next/head";
import {UserState} from "@/pages/StateContext";
import Login from "@/pages/NavBar Utilities/Login";

export default function Read({Books}) {
    const {loginModal, setLoginModal, isAuth, setIsAuth} = useContext(UserState)

    const [readSettings, setReadSettings] = useState(false)
    const [story, setStory] = useState("");
    const [pageCount, setPageCount] = useState(0);
    const [wordsPerPage, setWordsPerPage] = useState(300);
    const [storyLength, setStoryLength] = useState([]);


    useEffect(() => {
        let strArr = [];
        // Loop through the doc (Books.book_body) I get from Database, partition it into an array length 5 with 10 words each
        for (let i = 0; i <= Books.book_body.length - 10; i += wordsPerPage) {
            const newStr = Books.book_body.split(" ")        // split the words into the array
            const stringSlice = newStr.slice(i, i + wordsPerPage).join(" ")  //slice is base on the looped count
            if (stringSlice.trim() !== "") {      // check for empty string in the array and remove it
                strArr.push(stringSlice);      // Add each split words to a new array containing 10 words
            }
            if (strArr.length >= Books.book_body.length) { // break from the loop once the user reach the end of array containing words
                break;
            }
        }
        setStoryLength(strArr)
        setStory(strArr[pageCount]) // Now I set the collected words to the user while I use the "pageCount" to navigate
    }, [Books.book_body, pageCount, wordsPerPage]);

    function NextPages() {
        if (pageCount >= storyLength.length - 1) {
            return;
        }
        if (!isAuth && pageCount > 0) {
            setLoginModal(true)
            console.log("You can't view this page again, login")

        } else {
            setPageCount(prevState => prevState + 1);
        }
    }


    function PrevPage() {
        if (pageCount <= 0) {
            return;
        }
        setPageCount(prevState => prevState - 1);
    }


    function MyReadSettings() {
        setReadSettings(!readSettings)
    }

    return (
        <div className="h-screen dark:bg-black ">
            <Head>
                <title>{Books.title}</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            {readSettings && <ReadSetting MyExit={readSettings} MyExitSettings={setReadSettings}/>}

            <div>


                <div className="flex items-center justify-between dark:bg-[#616161]
                w-screen h-[45px] z-10 bg-white drop-shadow-lg top-0 sticky read-con">

                    <Link className="flex items-center text-white bg-indigo-800 h-full p-2 dark:bg-[#2d2d2d]"
                          href="/"><ArrowLeftIcon
                        className="w-6 text-white active:text-white"/><span>Home</span></Link>

                    <div className="text-sm font-bold ">
                        <p>{Books.title}</p>
                    </div>

                    <div className="text-xs font-bold ">
                        <p>Page {pageCount + 1}</p>
                    </div>

                    <div onClick={MyReadSettings} className="Pc-view">
                        {!readSettings ? <AdjustmentsHorizontalIcon
                                className="w-7 text-indigo-900 active:text-white dark:text-white"/>
                            : <XMarkIcon className="w-7"/>}
                    </div>
                </div>


                <div className="pb-[50px] px-1.5 bg-zinc-300 dark:bg-[#616161] shadow-lg mt-2 story Reading-screen">
                    <div className="bg-white dark:bg-black px-1 px-2 text-start ">{parse(story)}</div>
                </div>


                <div className="pagination  bottom-0 left-0 right-0 bg-zinc-300 h-[50px] dark:bg-[#616161]">
                    <div onClick={PrevPage} className={pageCount <= 0 ? "" : "active:bg-red-300 rounded-3xl"}>
                        <ArrowLeftCircleIcon
                            className={pageCount <= 0 ? "w-10 text-slate-400" : "w-10 text-indigo-600 dark:text-white"}/>
                    </div>

                    <button onClick={NextPages}
                            className={pageCount >= storyLength.length - 1 ? "" : "active:bg-red-300 rounded-3xl"}>
                        <ArrowRightCircleIcon
                            className={pageCount >= storyLength.length - 1 ? "w-10 text-slate-400" : "w-10 text-indigo-600 dark:text-white"}/>
                    </button>
                </div>

            </div>

            <Login
                loginModal={loginModal}
                setLoginModal={setLoginModal}
                setIsAuth={setIsAuth}
            />

        </div>

    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`http://hologate.netlify.app/api/${params.id}`);
    if (res.status === 200) {
        const Books = await res.json();
        return {
            props: {
                Books
            },
        };
    }
}
