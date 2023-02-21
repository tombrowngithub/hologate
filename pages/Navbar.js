import Link from "next/link";
import {useState} from "react";
import {XMarkIcon, Bars3Icon, MagnifyingGlassIcon, Cog8ToothIcon, UserIcon} from '@heroicons/react/24/solid'
import {signOut} from "firebase/auth"
import movieIcon from "@/pages/images/movieIcon.png"
import Image from "next/image";
import Login from "@/pages/NavBar Utilities/Login";
import {auth} from "@/Firebase/firebaseConfig";
import MySettings from "@/pages/Footer Utilities/settings";
import MyAccount from "@/pages/Footer Utilities/account";

export default function Navbar({isAuth, setIsAuth, loginModal, setLoginModal, setQuery}) {
    const [searchBar, setSearchBar] = useState(false)//Search Bar toggle state
    const [nav, setNav] = useState(false)//Nav Bar toggle state
    const [settings, setSettings] = useState(false)
    const [account, setAccount] = useState(false)

    // const [regModal, setRegModel] = useState(false) //Modal toggle state for Registration button
    //const [loginModal, setLoginModal] = useState(false) //Modal toggle state for Login button


    const showNavBar = () => setNav(!nav)
    const handleClose = () => setNav(!nav)

    // function RegModal() {
    //     setNav(!nav)
    //     setRegModel(true)
    // }

    function LoginModal() {
        setNav(!nav)
        setLoginModal(true)
    }

    function Account() {
        if (isAuth) {
            setAccount(!account)
        } else {
            //setLoginModal(true)
            setLoginModal(!loginModal)
        }
    }

    function Logout() {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
        })
    }

    function handleSearch(e) {
        e.preventDefault()
        setQuery(e.target.query.value)
    }

    return (
        <>
            {settings && <MySettings MyExit={settings} MyExitSettings={setSettings}/>}
            <MyAccount account={account} setAccount={setAccount} isAuth={isAuth}/>

            <div className="w-screen h-[55px] z-10 bg-white drop-shadow-lg top-0 dark:bg-[#2d2d2d] Home-navbar">
                <div className="px-2 flex justify-between items-center w-full h-full">
                    <div className="flex items-center h-[55px]">
                        <div className="flex">
                            <h1 className="text-2xl font-bold mr-4 sm:text-4xl flex Main-Text">
                                HaloGate Movies
                                <Image className="w-8" src={movieIcon} alt="Icon"/>
                            </h1>
                            <MagnifyingGlassIcon
                                onClick={() => setSearchBar(!searchBar)}
                                className="w-7 ml-9 cursor-pointer Pc-view"/>
                        </div>

                        {searchBar &&
                            <input onChange={(e)=> setQuery(e.target.value)} className="fixed py-1.5 border border-zinc-300 Pc-view
                        shadow-lg ml-9 text-center" type="search"
                                   placeholder="Search by Title"/>
                        }


                        <ul className="hidden md:flex h-[55px]">

                            <li className='cursor-pointer'>
                                <div onClick={() => setSettings(!settings)}
                                     className="p-3.5 active:bg-indigo-100 flex items-center">
                                    <Cog8ToothIcon className="text-zinc-500 w-7 dark:text-white active:text-white"/>
                                    <p className="dark:text-white active:text-white">Settings</p>
                                </div>
                            </li>
                            <li className='cursor-pointer'>
                                <div onClick={Account}
                                     className="p-3.5 active:bg-indigo-100 flex items-center">
                                    <UserIcon className="text-zinc-500 w-7 dark:text-white active:text-white"/>
                                    <p className="dark:text-white active:text-white">
                                        {isAuth ? auth.currentUser.displayName : "Account"}
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>

                    {/*SearchBar Pc*/}
                    <form onSubmit={handleSearch} className="Mobile-view flex border border-zinc-300 w-[30%]">
                        <input name="query" className="w-full py-1.5 text-center"
                               type="search"
                               placeholder="Search by Title"/>
                        <button type="submit">
                            <MagnifyingGlassIcon
                                className="w-7 cursor-pointer"/>
                        </button>
                    </form>

                    <div className="hidden md:flex pr-4 pt-2">
                        <button
                            onClick={LoginModal}
                            className="rounded mt-2 bg-blue-800 dark:bg-[#2d2d2d] cursor-pointer text-white px-8 py-3 mb-4 loginBtn">
                            Login
                        </button>
                    </div>
                    <div className="md:hidden" onClick={showNavBar}>
                        {!nav ? <Bars3Icon className="w-7"/> : <XMarkIcon className="w-7"/>}
                    </div>
                </div>


                <ul className={!nav ? "hidden" : "absolute bg-white w-full px-8 dark:bg-[#616161]"}>

                    <div className="flex flex-col my-4 Pc-view">
                        {!isAuth && <button
                            onClick={LoginModal}
                            className="rounded mt-2 bg-blue-800 dark:bg-[#2d2d2d] cursor-pointer text-white px-8 py-3 mb-4">
                            Login
                        </button>}

                        {isAuth &&
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
                {/*<SignUp*/}
                {/*    regModal={regModal}*/}
                {/*    setRegModel={setRegModel}*/}
                {/*    setIsAuth={setIsAuth}*/}
                {/*/>*/}
            </div>
        </>

    )
}