import {Cog8ToothIcon, PhoneArrowUpRightIcon, UserIcon, InformationCircleIcon,} from '@heroicons/react/24/solid'
import {useState} from "react";

import MySettings from "@/pages/Footer Utilities/settings";
import MyContactUs from "@/pages/Footer Utilities/contactUs";
import MyInfo from "@/pages/Footer Utilities/info";
import MyAccount from "@/pages/Footer Utilities/account";
import Link from "next/link";
import {FaFacebook, FaMailBulk, FaTwitter, FaWhatsapp} from "react-icons/fa";


export default function Footer({isAuth, setLoginModal}) {
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
        if (isAuth) {
            setAccount(!account)
        } else {
            setLoginModal(true)
        }
    }

    function Info() {
        setInfo(!info)
    }

    return (
        <>
            {settings && <MySettings MyExit={settings} MyExitSettings={setSettings}/>}

            <MyContactUs contact={contact} setContact={setContact}/>

            <MyAccount account={account} setAccount={setAccount} isAuth={isAuth}/>

            <MyInfo Info={info} setInfo={setInfo}/>

            <div className="w-screen h-[55px] bg-white dark:bg-[#2d2d2d] Pc-view
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
                    <p className="text-xs text-indigo-600 active:text-white">Profile</p>
                </div>

                <div onClick={Info} className="footer-tool p-3 active:bg-indigo-100 ">
                    <InformationCircleIcon className="w-7 text-indigo-500 active:text-white"/>
                    <p className="text-xs text-indigo-600 active:text-white">Info</p>
                </div>

            </div>

            <div className="Mobile-view Pc-footer dark:bg-[#444444]">
                <h1 className="w-[10%] m-auto rounded mb-2 text-2xl font-bold text-center dark:text-white dark:bg-[#323324]">Contact us</h1>

                <div className="w-[40%] flex justify-evenly m-auto">
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

                <p className="text-center my-2">Copyright&#169; 2022-2023 <span
                    className="mr-4 Main-Text">HaloGate Movies&#8482;</span> All Rights
                    Reserved
                </p>
                <p className="text-center">Developed by<Link className="text-blue-700" href="https://www.tom-portfolio.onrender.com">
                    Tom-DevA</Link>&#8482;        <span><Link className="text-blue-700" href="https://www.termsfeed.com/live/400990e9-64a4-4b02-82a3-d9afc69e12f4">
                        Privacy Policy</Link></span>
                </p>

            </div>
        </>

    )
}