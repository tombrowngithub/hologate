import {Cog8ToothIcon,XMarkIcon, PhoneArrowUpRightIcon, UserIcon, InformationCircleIcon} from '@heroicons/react/24/solid'
import {useState} from "react";


export default function Footer() {
    const [settings, setSettings] = useState(false)
    const [contact, setContact] = useState(false)
    const [account, setAccount] = useState(false)
    const [info, setInfo] = useState(false)

    function Settings() {
        setSettings(!settings)
    }

    function Contact() {
        setSettings(!settings)
    }

    function Account() {
        setSettings(!settings)
    }

    function Info() {
        setSettings(!settings)
    }

    return (
        <>
            {settings && <div className="w-[50%] settings">
                <div onClick={Settings} className=" flex justify-end">
                    <XMarkIcon className="w-6 bg-red-700"/>
                </div>

            </div>}

            {contact && <div className="w-[50%] settings">
                <div onClick={Settings} className=" flex justify-end">
                    <XMarkIcon className="w-6 bg-red-700"/>
                </div>

            </div>}

            {account && <div className="w-[50%] settings">
                <div onClick={Settings} className=" flex justify-end">
                    <XMarkIcon className="w-6 bg-red-700"/>
                </div>

            </div>}

            {info && <div className="w-[50%] settings">
                <div onClick={Settings} className=" flex justify-end">
                    <XMarkIcon className="w-6 bg-red-700"/>
                </div>

            </div>}

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

                <div className="footer-tool p-3 active:bg-indigo-100 ">
                    <InformationCircleIcon className="w-7 text-indigo-500 active:text-white"/>
                    <p className="text-xs text-indigo-600 active:text-white">Info</p>
                </div>

            </div>
        </>

    )
}