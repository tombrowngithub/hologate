import {UserState} from "@/pages/StateContext";
import {useContext} from "react";
import {XMarkIcon} from "@heroicons/react/24/solid";

export default function ElapsedTime() {
    const {elapsedTime, setTimeRead} = useContext(UserState)
    function myExit() {
        setTimeRead(false)
    }

    return (
        <div className="w-[70%] h-[20%] bg-white shadow-lg m-auto fixed top-0 bottom-0 left-0 right-0">
            <div className="flex p-1 justify-between m-auto">
                <h2 className="text-lg font-bold ml-8">Time Spent Reading:</h2>
                <XMarkIcon onClick={myExit} className="w-6 bg-red-700"/>
            </div>

            <hr/>
            <div className="flex flex-col text-center">
                <hr/>
                <div className="w-full flex flex-col mt-2 items-start">
                    <h1 className="text-lg font-bold shadow-lg w-full flex justify-between px-5">Seconds:: <span className="text-green-700">{elapsedTime.seconds}</span></h1>
                    <h1 className="text-lg font-bold shadow-lg w-full flex justify-between px-5">Minutes:: <span className="text-green-700">{elapsedTime.minutes}</span></h1>
                    <h1 className="text-lg font-bold shadow-lg w-full flex justify-between px-5">Hours:: <span className="text-green-700">{elapsedTime.hours}</span></h1>
                </div>
            </div>
        </div>

    )
}
