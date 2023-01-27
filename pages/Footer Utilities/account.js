import Image from "next/image";
import Link from "next/link";
import {EnvelopeIcon, ClockIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

import {FaUser,FaTimes} from "react-icons/fa";
import Model from "react-modal";

export default function Account({account, setAccount}) {
    return (
        <Model isOpen={account}
               ariaHideApp={false}
               onRequestClose={() => setAccount(false)}
               style={{
                   content: {
                       width: "100%",
                       height: "80%",
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

            <div className="bg-white h-full w-full px-1 shadow-l">
                <div className="p-2 rounded flex items-center justify-start border border-zinc-900">
                    <FaUser size="15%"/>
                    <p className="text-l font-bold mx-7">User name here</p>
                </div>

                <p className="text-center text-l font-bold my-5">User Information:</p>

                <div className="flex justify-between">
                    <div className="flex">
                        <EnvelopeIcon className="w-5 text-purple-900"/><p className="text-l font-bold">Email:</p>
                    </div>
                   <span className="text-zinc-500 ml-4 text-purple-900">tombrownanuma@gmail.com</span>
                </div>

                <div className="flex my-3 justify-between">
                    <div className="flex">
                        <CalendarDaysIcon className="w-5 text-purple-900"/><p className="text-l font-bold">Date Registered:</p>
                    </div>
                    <span className="text-zinc-500 ml-4 text-purple-900">Oct 10 2022</span>
                </div>

                <div className="flex justify-between">
                    <div className="flex">
                        <ClockIcon className="w-5 text-purple-900"/><p className="text-l font-bold">Time spent reading:</p>
                    </div>
                    <span className="text-zinc-500 ml-4 text-purple-900">Time count here</span>
                </div>
            </div>
        </Model>
    )
}