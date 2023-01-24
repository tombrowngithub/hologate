import Head from 'next/head'
import {Inter} from '@next/font/google'
import HomePage from "@/pages/HomePage";
import Navbar from "@/pages/Navbar";
import Footer from "@/pages/Footer";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div className="my-body">
            <Head>
                <title>Holo Gate Movies</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>
            <HomePage/>
            <Footer/>
        </div>
    )
}
