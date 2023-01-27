import {XMarkIcon} from "@heroicons/react/24/solid";
export default function Settings({MyExit, MyExitSettings}) {
    function myExit() {
        MyExitSettings(!MyExit)
    }

    return (
        <div className="w-[50%] settings">
            <div className="bg-white flex justify-end">
                <p className="mx-10 text-xl font-bold text-slate-700">Settings</p>
                <XMarkIcon onClick={myExit} className="w-6 bg-red-700"/>
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

        </div>
    )
}