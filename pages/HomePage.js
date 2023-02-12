import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from '@heroicons/react/24/outline'
import Link from "next/link";
import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import parse from 'html-react-parser'
import {useRouter} from "next/router";
import ReactLoading from 'react-loading';

export default function HomePage() {
    const [Data, setData] = useState([])
    const [pages, setPages] = useState(0)
    const [isLoading, setIsLoading] = useState(true)


    const router = useRouter()

    useEffect(() => {
        axios.get(`/api/read_books?p=${pages}`)
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

    }, [pages])

    function check(id) {
        router.push(`/Read/${id}`)
    }

    return (
        <>
            <div className="my-container">
                {isLoading ?
                    <div className="w-full h-screen flex items-center justify-center mb-4">
                        <ReactLoading type={"spin"} color={"blue"} width={'4rem'}/>
                    </div>
                    :
                    <>
                        {
                            Data.map((item, index) => (
                                <Fragment key={index}>
                                    <div onClick={() => check(item._id)} className="my-card">
                                        <div className="bg-slate-400 dark:bg-slate-900">
                                            <h1 className="text-white text-xl font-bold px-1 text-start">{item.title}</h1>
                                        </div>
                                        <div>
                                            <div
                                                className="dark:text-black text-start px-1">{parse(item.book_body)}</div>
                                        </div>
                                    </div>
                                </Fragment>
                            ))
                        }
                    </>
                }
            </div>

            <div className="mt-3 pagination">
                <button
                    disabled={pages === 0 && true}
                    className={pages === 0 ? "" : "active:bg-red-300 rounded-3xl"}
                    onClick={() => setPages(pages - 1)}>
                    <ArrowLeftCircleIcon className={pages === 0 ? "w-10 text-slate-400" : "w-10 text-indigo-600"}/>

                </button>

                <div>Page 1</div>

                <button
                    disabled={Data.length === 0 && true}
                    className={Data.length === 0 ? "" : "active:bg-red-300 rounded-3xl"}
                    onClick={() => setPages(pages + 1)}>
                    <ArrowRightCircleIcon
                        className={Data.length === 0 ? "w-10 text-slate-400" : "w-10 text-indigo-600"}/>
                </button>
            </div>

        </>
    )
}
