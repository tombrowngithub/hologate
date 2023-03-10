
import {EnvelopeIcon, ClockIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import {FaUser,FaTimes} from "react-icons/fa";
import Model from "react-modal";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {auth} from "@/Firebase/firebaseConfig"
import OnlineTime from "@/pages/Footer Utilities/onlineTime";

export default function Account({account, setAccount, isAuth}) {
    const {theme} = useTheme();
    const[bgColor, setBgColor] = useState("#f6f6f6");
    //const myDate = new Date(auth.currentUser.metadata.creationTime)

    useEffect(()=>{
        if(theme === 'dark'){
            setBgColor("#000")
        }else{
            setBgColor("#f6f6f6")
        }
    },[theme])

    return (
        <Model isOpen={account}
               ariaHideApp={false}
               onRequestClose={() => setAccount(false)}
               style={{
                   content: {
                       width: "MyWidth",
                       height: "80%",
                       top: '50%',
                       left: '50%',
                       right: 'auto',
                       bottom: 'auto',
                       marginRight: '-50%',
                       transform: 'translate(-50%, -50%)',
                       background: bgColor,
                   }
               }}>

            {isAuth && auth.currentUser && <div className="bg-white dark:bg-[#151a1e] h-full w-full px-1 shadow-l">
                <div
                    className="p-2 rounded flex items-center justify-start border border-zinc-900 dark:border-[#0f6a80]">
                    <FaUser size="15%"/>
                    <p className="text-l font-bold mx-7">{auth.currentUser.displayName}</p>
                </div>

                <p className="text-center text-l font-bold my-5">User Information:</p>

                <div className="flex justify-between">
                    <div className="flex">
                        <EnvelopeIcon className="w-5 text-purple-900 dark:text-white"/><p className="text-l font-bold dark:text-white">Email:</p>
                    </div>
                    <span className="text-zinc-500 ml-4 text-purple-900 dark:text-white">{auth.currentUser.email}</span>
                </div>

                <div className="flex my-3 justify-between">
                    <div className="flex">
                        <CalendarDaysIcon className="w-5 text-purple-900 dark:text-white"/><p className="text-l font-bold dark:text-white">Date
                        Registered:</p>
                    </div>
                    <span className="dark:text-white text-xs text-zinc-500 ml-4 text-purple-900">{auth.currentUser.metadata.creationTime}</span>
                </div>

                <div className="flex justify-between">
                    <div className="flex">
                        <ClockIcon className="w-5 text-purple-900 dark:text-white"/><p className="font-bold dark:text-white">Time spent
                        reading:</p>
                    </div>
                    <span className="text-zinc-500 ml-4 text-purple-900 dark:text-white">
                        <OnlineTime/>
                    </span>
                </div>
            </div>}
        </Model>
    )
}