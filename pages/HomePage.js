import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from '@heroicons/react/24/outline'
import Link from "next/link";

export default function HomePage() {


    return (
        <>
            <div className="my-container">

                <Link href="/Read" className="my-card">
                    <div className="bg-slate-400">
                        <h1 className="text-xl font-bold px-1 text-start">The moment of the Sun</h1>
                    </div>
                    <div>
                        <p className="text-start px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Blanditiis dolor est, expedita hic magni modi natus numquam quaerat recusandae repellendus
                            sed unde voluptatem. Ad atque dolorem doloribus enim ex, ipsa nihil nobis sit. Hic,
                            optio.</p>
                    </div>
                </Link>


                <Link href="/Read" className="my-card">
                    <div className="bg-slate-400">
                        <h1 className="text-xl font-bold px-1 text-start">Making me glow</h1>
                    </div>
                    <div>
                        <p className="text-start px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis, labore?</p>
                    </div>
                </Link>

                <Link href="/Read" className="my-card">
                    <div className="bg-slate-400">
                        <h1 className="text-xl font-bold px-1 text-start">night before the fall of Nainan</h1>
                    </div>
                    <div>
                        <p className="text-start px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
                            quos.</p>
                    </div>
                </Link>

                <Link href="/Read" className="my-card">
                    <div className="bg-slate-400">
                        <h1 className="text-xl font-bold px-1 text-start">Incredible Hulk</h1>
                    </div>
                    <div>
                        <p className="text-start px-1">ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
                            facilis?</p>
                    </div>
                </Link>

                <Link href="/Read" className="my-card">
                    <div className="bg-slate-400">
                        <h1 className="text-xl font-bold px-1 text-start">Spirited away</h1>
                    </div>
                    <div>
                        <p className="text-start px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                            voluptates!</p>
                    </div>
                </Link>

                <Link href="/Read" className="my-card">
                    <div className="bg-slate-400">
                        <h1 className="text-xl font-bold px-1 text-start">Amarathan: mother is home</h1>
                    </div>
                    <div>
                        <p className="text-start px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Doloribus, placeat!</p>
                    </div>
                </Link>

                <Link href="/Read" className="my-card">
                    <div className="bg-slate-400">
                        <h1 className="text-xl font-bold px-1 text-start">We are the World</h1>
                    </div>
                    <div>
                        <p className="text-start px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Deleniti, possimus!</p>
                    </div>
                </Link>

                <Link href="/Read" className="my-card">
                    <div className="bg-slate-400">
                        <h1 className="text-xl font-bold px-1 text-start">Scars of the Innocent</h1>
                    </div>
                    <div>
                        <p className="text-start px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dolorum, eum!</p>
                    </div>

                </Link>

                <Link href="/Read" className="my-card">
                    <div className="bg-slate-400">
                        <h1 className="text-xl font-bold px-1 text-start">We move</h1>
                    </div>
                    <div>
                        <p className="text-start px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aspernatur, qui.</p>
                    </div>
                </Link>
            </div>

            <div className="mt-3 pagination">
                <div className="active:bg-red-300 rounded-3xl">
                    <ArrowLeftCircleIcon className="w-10 text-indigo-600"/>
                </div>

                <div>Page 1</div>

                <div className="active:bg-red-300 rounded-3xl">
                    <ArrowRightCircleIcon className="w-10 text-indigo-600"/>
                </div>
            </div>

        </>
    )
}