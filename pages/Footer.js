import {
    Cog8ToothIcon,
    XMarkIcon,
    PhoneArrowUpRightIcon,
    UserIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/solid'
import {useState} from "react";
import Image from "next/image";
import Model from "react-modal";
import {
    FaFacebook,
    FaTwitter,
    FaWhatsapp,
    FaMailBulk
} from "react-icons/fa";
import Link from "next/link";
import HalaGateImage from "@/pages/images/HalogateImg.jpg";


export default function Footer() {
    const [settings, setSettings] = useState(false)
    const [contact, setContact] = useState(false)
    const [account, setAccount] = useState(false)
    const [info, setInfo] = useState(false)

    function Settings() {
        setSettings(!settings)
    }

    function Contact() {
        setContact(!contact)
    }

    function Account() {
        setSettings(!settings)
    }

    function Info() {
        setInfo(!info)
    }

    return (
        <>
            {settings && <div className="w-[50%] settings">
                <div onClick={Settings} className="bg-white flex justify-end">
                    <p className="mx-10 text-xl font-bold text-slate-700">Settings</p>
                    <XMarkIcon className="w-6 bg-red-700"/>
                </div>
                <hr/>
                <div className="flex flex-col items-center h-full bg-slate-300 m-0.5">
                    <div className="flex items-center justify-start">
                        <label htmlFor="">Dark mode</label>
                        <input className="text-center w-6 bg-slate-500" type="checkbox"/>
                    </div>

                    <div className="flex">
                        <p>Increase reading font-size</p>
                       <div className="flex">
                           <button className="text-2xl">-</button>
                           <input className="w-5 h-5" type="text"/>
                           <button className="text-2xl">+</button>
                       </div>
                    </div>

                </div>

            </div>}

            <Model isOpen={contact}
                   ariaHideApp={false}
                   onRequestClose={() => setContact(false)}
                   style={{
                       content: {
                           width: "22rem",
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
                    <h1 className="text-2xl font-bold text-center">Contact us!</h1>
                    <Image className="mb-2 rounded" src={HalaGateImage} alt="Icon"/>
                    <div className="flex justify-around">
                        <Link href="https://www.facebook.com/Author.Nath.Creativity?mibextid=ZbWKwL">
                            <div className="flex flex-col items-center cursor-pointer">
                                <FaFacebook size="30px" color="blue"/>
                                <p className="text-xs">Facebook</p>
                            </div>
                        </Link>

                        <Link href="https://twitter.com/author_nath?t=PBH4YSu9JHDQC5H5UPqJXQ&s=08">
                            <div className="flex flex-col items-center">
                                <FaTwitter size="30px" color="#1DA1F2"/>
                                <p className="text-xs">Twitter</p>
                            </div>
                        </Link>

                        <Link href="tel:+2348163452027">
                            <div className="flex flex-col items-center">
                                <FaWhatsapp size="30px" color="#25D366"/>
                                <p className="text-xs">Whatsapp</p>
                            </div>
                        </Link>

                        <Link href="mailto:nathubijii@gmail.com">
                            <div className="flex flex-col items-center">
                                <FaMailBulk size="30px" color="darkBlue"/>
                                <p className="text-xs">Email</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </Model>

            {account && <div className="w-[50%] settings">
                <div onClick={Account} className=" flex justify-end">
                    <XMarkIcon className="w-6 bg-red-700"/>
                </div>

            </div>}

            <Model isOpen={info}
                   ariaHideApp={false}
                   onRequestClose={() => setInfo(false)}
                   style={{
                       content: {
                           width: "22rem",
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
                    <h1 className="text-xl font-bold text-center">App information!</h1>
                    <div className="bg-white text-sm font-bold mt-3 p-1">
                        <p>Copyright&#169; 2022 <span className="mr-4 Main-Text">HaloGate Movies&#8482;</span></p>
                        <p>All right reserved.</p>
                        <p>Owner: Nathaniel Anuma</p>
                        <p>Version: 1.0.0</p>
                        <p>Developed by <Link className="text-blue-700" href="https://www.tom-portfolio.onrender.com">Tom-DevA</Link>&#8482;</p>
                    </div>

                </div>
            </Model>

            <div className="w-screen h-[55px] bg-white
        shadow-lg flex justify-evenly items-center footer">

                <div onClick={Settings} className="footer-tool p-3 active:bg-indigo-100 ">
                    <Cog8ToothIcon className="w-7 text-indigo-500 active:text-white"/>
                    <p className="text-xs text-indigo-600 active:text-white">Settings</p>
                </div>

                <div onClick={Contact} className="footer-tool p-3 active:bg-indigo-100 ">
                    <PhoneArrowUpRightIcon className="w-7 text-indigo-500 active:text-white"/>
                    <p className="text-xs text-indigo-600 active:text-white">Contact Us</p>
                </div>

                <div onClick={Account} className="footer-tool p-3 active:bg-indigo-100 ">
                    <UserIcon className="w-7 text-indigo-500 active:text-white"/>
                    <p className="text-xs text-indigo-600 active:text-white">Account</p>
                </div>

                <div onClick={Info} className="footer-tool p-3 active:bg-indigo-100 ">
                    <InformationCircleIcon className="w-7 text-indigo-500 active:text-white"/>
                    <p className="text-xs text-indigo-600 active:text-white">Info</p>
                </div>

            </div>
        </>

    )
}