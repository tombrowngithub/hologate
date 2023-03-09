import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from '@heroicons/react/24/outline'
import {Fragment, useContext, useEffect, useState} from "react";
import axios from "axios";
import parse from 'html-react-parser'
import {useRouter} from "next/router";
import ReactLoading from 'react-loading';
import {UserState} from "@/pages/StateContext";
import ElapsedTime from "@/pages/NavBar Utilities/ElapsedTime";

export default function HomePage({query}) {
    const [data, setData] = useState([]);
    const [pages, setPages] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingStates, setLoadingStates] = useState([]);

    const {setStartTime, isAuth, setId, TimeRead} = useContext(UserState)

    const router = useRouter()

    useEffect(() => {
        async function fetchSearchResults() {
            setIsLoading(true);
            const res = await fetch(`/api/search?q=${query}`)
            const MyData = await res.json()
            setData(MyData);
        }

        if (query !== "" && query.length > 2) {
            fetchSearchResults().then(() => setIsLoading(false))
        } else {
            axios.get(`/api/read_books?p=${pages}`)
                .then((res) => {
                    setData(res.data);
                    setIsLoading(false);
                    setLoadingStates(Array(res.data.length).fill(false))// get the number of data we have and fill it with false
                })
                .catch((err) => console.log(err));
        }


    }, [pages, query]);

    async function check(id, index) {
        setLoadingStates((prev) =>
            [...prev.slice(0, index), true, ...prev.slice(index + 1)]);

        await router.push({
            pathname: `Read/${id}`
        }).finally(() => {
            if (isAuth) {
                setStartTime(new Date())
            }
            setId(id)
            setLoadingStates((prev) =>
                [...prev.slice(0, index), false, ...prev.slice(index + 1)]);
        });

    }

    return (
        <>
            {(TimeRead && isAuth) && <ElapsedTime/>}
            <div className="my-container px-2 mx-auto">
                {isLoading ?
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <ReactLoading type={"spin"} color={"blue"} width={'3.6rem'}/>
                    </div>
                    :
                    <>
                        {
                            data.map((item, index) => (
                                <Fragment key={index}>

                                    {loadingStates[index] ?
                                        <div className="my-card dark:bg-[#2d2d2d]">
                                            <div
                                                className="mt-4 w-full h-full flex items-center justify-center">
                                                <ReactLoading type={"spin"} color={"blue"} width={"2rem"}/>
                                            </div>
                                        </div>

                                        :
                                        <div onClick={() => check(item._id, index)}
                                             className="my-card dark:bg-zinc-300">
                                            <div onClick={() => check(item._id, index)}
                                                 className="bg-slate-400 dark:bg-slate-800 cursor-pointer">
                                                <h1 className="title  font-bold pt-0.5">{item.title}</h1>
                                            </div>

                                            <div
                                                className="dark:text-black text-start text-sm px-1">{parse(item.book_body)}
                                            </div>

                                        </div>
                                    }
                                </Fragment>
                            ))
                        }
                    </>
                }
            </div>

            <div className="mt-3 pagination">
                <button
                    disabled={pages === 0 && true}
                    className={pages === 0 ? "flex items-center" : "active:bg-red-300 rounded-3xl flex items-center"}
                    onClick={() => setPages(pages - 1)}>
                    <ArrowLeftCircleIcon className={pages === 0 ? "w-6 text-slate-400" : "w-6 text-indigo-600"}/>
                    <p className={pages === 0 ? "w-6 text-slate-400":"w-10 text-indigo-600"}>BACK</p>
                </button>

                <div className="ml-3">Page {pages + 1}</div>

                <button
                    disabled={data?.length === 0 & data.length < 9 && true}
                    className={data?.length === 0 ? "flex items-center" : "active:bg-red-300 rounded-3xl flex items-center"}
                    onClick={() => setPages(pages + 1)}><p className="w-10 text-indigo-600">NEXT</p>
                    <ArrowRightCircleIcon
                        className={data.length === 0 ? "w-6 text-slate-400" : "w-6 text-indigo-600"}/>
                </button>
            </div>

        </>
    )
}