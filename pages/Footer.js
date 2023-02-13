import {Cog8ToothIcon, PhoneArrowUpRightIcon, UserIcon, InformationCircleIcon,} from '@heroicons/react/24/solid'
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import MySettings from "@/pages/Footer Utilities/settings";
import MyContactUs from "@/pages/Footer Utilities/contactUs";
import MyInfo from "@/pages/Footer Utilities/info";
import MyAccount from "@/pages/Footer Utilities/account";


export default function Footer({isAuth,setLoginModal}) {
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
        if(isAuth){
            setAccount(!account)
        }
        else{
            setLoginModal(true)
        }


    }

    function Info() {
        setInfo(!info)
    }

    return (
        <>
            {settings && <MySettings MyExit={settings} MyExitSettings={setSettings}/>}

            <MyContactUs contact={contact} setContact={setContact} />

            <MyAccount account={account} setAccount={setAccount} isAuth={isAuth}/>

            <MyInfo Info={info} setInfo={setInfo}/>

            <div className="w-screen h-[55px] bg-white dark:bg-[#2d2d2d]
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