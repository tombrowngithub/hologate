import {ArrowLeftIcon, AdjustmentsHorizontalIcon} from '@heroicons/react/24/solid'
import Link from "next/link";
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from "@heroicons/react/24/outline";

export default function Read() {
    return (
        <div className="h-screen">
            <div className="flex items-center justify-between  w-screen h-[45px] z-10 bg-white drop-shadow-lg top-0">
                <Link className="flex items-center text-white bg-indigo-800 h-full" href="/"><ArrowLeftIcon
                    className="w-6 text-white active:text-white"/><span>Home</span></Link>
                <div className="text-sm font-bold ">
                    <p>Book Title will be here</p>
                </div>
                <div className="text-xs font-bold ">
                    <p>Page 1</p>
                </div>

                <div className=" ">
                    <AdjustmentsHorizontalIcon className="w-7 text-indigo-900 active:text-white"/>
                </div>
            </div>

            <div className="px-1.5 bg-zinc-300 shadow-lg">
                <p className="bg-white px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae dolor dolores incidunt, ipsa ipsam iure labore maiores
                    nobis nulla, odio omnis placeat quod, reiciendis. Cum deleniti
                    fugit laudantium repudiandae velit? Dicta dolorem explicabo fuga
                    illum incidunt itaque laboriosam magni necessitatibus numquam
                    perspiciatis qui quis, quo recusandae, rerum similique temporibus
                    tenetur!
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae dolor dolores incidunt, ipsa ipsam iure labore maiores
                    nobis nulla, odio omnis placeat quod, reiciendis. Cum deleniti
                    fugit laudantium repudiandae velit? Dicta dolorem explicabo fuga
                    illum incidunt itaque laboriosam magni necessitatibus numquam
                    perspiciatis qui quis, quo recusandae, rerum similique temporibus
                    tenetur!
                    <br/>
                    <br/>
                    fugit laudantium repudiandae velit? Dicta dolorem explicabo fuga
                    illum incidunt itaque laboriosam magni necessitatibus numquam

                </p>

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