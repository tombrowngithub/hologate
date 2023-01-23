import { Cog8ToothIcon, PhoneArrowUpRightIcon, UserIcon, InformationCircleIcon } from '@heroicons/react/24/solid'

export default function Footer(){
    return(
        <div className="w-screen h-[55px] bg-white
        shadow-lg flex justify-evenly items-center footer">

            <div className="footer-tool p-3 active:bg-indigo-100 ">
                <Cog8ToothIcon className="w-7 text-indigo-500 active:text-white"/>
                <p className="text-xs text-indigo-600 active:text-white">Settings</p>
            </div>

            <div className="footer-tool p-3 active:bg-indigo-100 ">
                <PhoneArrowUpRightIcon className="w-7 text-indigo-500 active:text-white"/>
                <p className="text-xs text-indigo-600 active:text-white">Contact Us</p>
            </div>

            <div className="footer-tool p-3 active:bg-indigo-100 ">
                <UserIcon className="w-7 text-indigo-500 active:text-white"/>
                <p className="text-xs text-indigo-600 active:text-white">Account</p>
            </div>

            <div className="footer-tool p-3 active:bg-indigo-100 ">
                <InformationCircleIcon className="w-7 text-indigo-500 active:text-white"/>
                <p className="text-xs text-indigo-600 active:text-white">Info</p>
            </div>
        </div>
    )
}