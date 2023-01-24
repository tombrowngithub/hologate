import Link from "next/link";
import {useState} from "react";
import {XMarkIcon, Bars3Icon, MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import Model from "react-modal";
import googleIcon from "@/pages/images/google.png"
import movieIcon from "@/pages/images/movieIcon.png"
import Image from "next/image";

export default function Navbar() {
    const [searchBar, setSearchBar] = useState(false)//Search Bar toggle state
    const [nav, setNav] = useState(false)//Nav Bar toggle state
    const [regModal, setRegModel] = useState(false) //Modal toggle state for Registration button
    const [loginModal, setLoginModal] = useState(false) //Modal toggle state for Login button

    //The User Reg details
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //The Login Details
    const [userNameEmail, setUserNameEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

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

    function regButton(e) {
        e.preventDefault()
        const userObject = {
            user_name: userName,
            user_email: email,
            user_password: password,
        }
        console.log(userObject)
        setRegModel(false)

    }

    function loginButton(e) {
        e.preventDefault()
        const userLoginObject = {
            userNameEmail: userNameEmail,
            userPassword: userPassword,
        }
        console.log(userLoginObject)
        setLoginModal(false)


    }

    return (
        <div className="w-screen h-[55px] z-10 bg-white drop-shadow-lg top-0">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <div className="flex">
                        <h1 className="text-2xl font-bold mr-4 sm:text-4xl">
                            Holo Gate Movie
                        </h1>
                        <Image className="w-8" src={movieIcon} alt="Icon"/>
                        <MagnifyingGlassIcon onClick={()=>setSearchBar(!searchBar)} className="w-8 ml-9 cursor-pointer"/>
                    </div>
                    {searchBar && <input className="fixed py-1.5 border border-zinc-300 shadow-lg ml-9 text-center" type="search"
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


            <ul className={!nav ? "hidden" : "absolute bg-white w-full px-8"}>
                <li className="text-center border-2 border-zinc-100 w-full cursor-pointer p-3 mb-1"><Link
                    onClick={handleClose}
                    href="support">Support</Link>
                </li>

                <div className="flex flex-col my-4">
                    <button onClick={LoginModal}
                            className="mt-2 bg-blue-800 cursor-pointer text-white px-8 py-3 mb-4">Login
                    </button>
                    <button onClick={RegModal} className="bg-blue-800 px-8 py-3 cursor-pointer text-white">Sign Up
                    </button>
                </div>
            </ul>


            {/*Login modal*/}
            <Model isOpen={loginModal}
                   ariaHideApp={false}
                   onRequestClose={() => setLoginModal(false)}
                   style={{
                       content: {
                           width: "21rem",
                           top: '50%',
                           left: '50%',
                           right: 'auto',
                           bottom: 'auto',
                           marginRight: '-50%',
                           transform: 'translate(-50%, -50%)',
                           background: "#f6f6f6",
                           boxShadow: "0 6px 12px rgba(0, 0, 0, 0.31)"
                       }
                   }}>
                <div className="flex flex-col mx-2 h-full">
                    <p className="text-center text-blue-800 text-2xl font-bold p-3">Login
                    </p>
                    <form onSubmit={(e) => loginButton(e)} className='flex flex-col  items-center mt-4'>
                        <input onChange={(e) => setUserNameEmail(e.target.value)}
                               className='w-[17rem] p-2 px-5 mb-4 rounded-md text-black shadow-lg' type="text"
                               placeholder='Enter email or User Name'/>
                        <input onChange={(e) => setUserPassword(e.target.value)}
                               className='w-[17rem] p-2 px-5 mb-4 rounded-md text-black shadow-lg' type="password"
                               placeholder='Password'/>
                        <button type="submit"
                                className='w-[17rem] mb-4 p-2 rounded-md shadow-lg bg-indigo-600 text-white'>Login
                        </button>
                        <p className="text-blue-800">OR</p>
                        <div className="w-[17rem] p-1 mt-1.5 bg-white flex items-center rounded-md shadow-lg">
                            <Image className="w-8" src={googleIcon} alt=""/>
                            <p className="ml-0.5">Login In With Google</p>
                        </div>

                    </form>
                </div>
            </Model>

            {/*Registration modal*/}
            <Model isOpen={regModal}
                   ariaHideApp={false}
                   onRequestClose={() => setRegModel(false)} style={{

                content: {
                    width: "21rem",
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    background: "#f6f6f6",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.31)"
                }
            }}>
                <div className="flex flex-col mx-2 h-full">
                    <p className="text-center text-blue-800 text-md font-bold p-3">Register on Holo Gate Movies to have
                        unlimited user experience</p>
                    <form onSubmit={(e) => regButton(e)} className='flex flex-col  items-center mt-4 '>
                        <input onChange={(e) => setUserName(e.target.value)}
                               className='w-[17rem] p-2 px-5 mb-4 rounded-md text-black shadow-lg' type="text"
                               placeholder='Enter User Name'/>
                        <input onChange={(e) => setEmail(e.target.value)}
                               className='w-[17rem] p-2 px-5 mb-4 rounded-md text-black shadow-lg' type="email"
                               placeholder='Enter your email'/>
                        <input onChange={(e) => setPassword(e.target.value)}
                               className='w-[17rem] p-2 px-5 mb-4 rounded-md text-black shadow-lg' type="password"
                               placeholder='Password'/>
                        <button type="submit"
                                className='w-[17rem] mb-4 p-2 rounded-md shadow-lg bg-indigo-600 text-white'>Register
                        </button>
                        <p className="text-blue-800">OR</p>
                        <div className="w-[17rem] p-1 mt-1.5 bg-white flex items-center rounded-md shadow-lg">
                            <Image className="w-8" src={googleIcon} alt=""/>
                            <p className="ml-0.5">Sign In with Google</p>
                        </div>

                    </form>
                </div>
            </Model>
        </div>
    )
}