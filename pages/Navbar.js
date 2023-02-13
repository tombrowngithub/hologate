import Link from "next/link";
import {useState} from "react";
import {XMarkIcon, Bars3Icon, MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import {signOut} from "firebase/auth"
import movieIcon from "@/pages/images/movieIcon.png"
import Image from "next/image";
import Login from "@/pages/NavBar Utilities/Login";
import SignUp from "@/pages/NavBar Utilities/SignUp";
import {auth} from "@/Firebase/firebaseConfig";

export default function Navbar({isAuth, setIsAuth, loginModal, setLoginModal}) {
    const [searchBar, setSearchBar] = useState(false)//Search Bar toggle state
    const [nav, setNav] = useState(false)//Nav Bar toggle state
   const [regModal, setRegModel] = useState(false) //Modal toggle state for Registration button
    //const [loginModal, setLoginModal] = useState(false) //Modal toggle state for Login button


    const showNavBar = () => setNav(!nav)
    const handleClose = () => setNav(!nav)

    function RegModal() {
        setNav(!nav)
        setRegModel(true)
    }

    function LoginModal() {
        setNav(!nav)
        setLoginModal(true)
    }


    function Logout() {
        signOut(auth).then(r => {
            localStorage.clear()
            setIsAuth(false)
        })
    }

    return (
        <div className="w-screen h-[55px] z-10 bg-white drop-shadow-lg top-0 dark:bg-[#2d2d2d]">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <div className="flex">
                        <h1 className="text-2xl font-bold mr-4 sm:text-4xl flex Main-Text">
                            HaloGate Movies
                            <Image className="w-8" src={movieIcon} alt="Icon"/>
                        </h1>
                        <MagnifyingGlassIcon onClick={() => setSearchBar(!searchBar)}
                                             className="w-7 ml-9 cursor-pointer"/>
                    </div>
                    {searchBar &&
                        <input className="fixed py-1.5 border border-zinc-300 shadow-lg ml-9 text-center" type="search"
                               placeholder="Search by Title"/>}
                    <ul className="hidden md:flex">

                        <li className='cursor-pointer p-4'><Link href="home">Home</Link></li>
                        <li className='cursor-pointer p-4'><Link href="about">About</Link></li>
                        <li className='cursor-pointer p-4'><Link href="support">Support</Link></li>
                        <li className='cursor-pointer p-4'><Link href="platform">Platform</Link></li>
                        <li className='cursor-pointer p-4 p-4'><Link href="pricing">Pricing</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="bg-blue-800 text-white rounded-md mr-4 px-7 py-3"><Link
                        href="/Login">Login</Link></button>
                    <button className="bg-blue-800 text-white rounded-md px-7 py-3"><Link href="/Register">Sign
                        Up</Link></button>
                </div>
                <div className="md:hidden" onClick={showNavBar}>
                    {!nav ? <Bars3Icon className="w-7"/> : <XMarkIcon className="w-7"/>}
                </div>
            </div>


            <ul className={!nav ? "hidden" : "absolute bg-white w-full px-8 dark:bg-[#616161]"}>

                <div className="flex flex-col my-4">
                    {!isAuth && <button
                        onClick={LoginModal}
                        className="rounded mt-2 bg-blue-800 dark:bg-[#2d2d2d] cursor-pointer text-white px-8 py-3 mb-4">
                        Login
                    </button>}

                    {!isAuth ? <button
                            onClick={RegModal}
                            className="rounded bg-blue-800 dark:bg-[#2d2d2d] px-8 py-3 cursor-pointer text-white">
                            Sign Up
                        </button>
                        :
                        <button
                            onClick={Logout}
                            className="rounded bg-blue-800 dark:bg-[#2d2d2d] px-8 py-3 cursor-pointer text-white">
                            Log Out
                        </button>
                    }
                </div>
            </ul>

            {/*Login modal*/}
            <Login
                loginModal={loginModal}
                setLoginModal={setLoginModal}
                setIsAuth={setIsAuth}
            />

            {/*Registration modal*/}
            <SignUp
                regModal={regModal}
                setRegModel={setRegModel}
                setIsAuth={setIsAuth}
            />
        </div>
    )
}