import {MoonIcon, SunIcon, UserIcon, ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/solid";
import {useTheme} from "next-themes";
import {useContext, useEffect, useState} from "react";
import {UserState} from "@/pages/StateContext";

export default function ReadSetting({MyExit, MyExitSettings, FontSizeDown, FontSizeUp, fontSizeCount}) {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const {account, setAccount, setLoginModal, isAuth} = useContext(UserState)

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;


    function Account() {
        MyExitSettings(!MyExit)
        if (isAuth) {
            setAccount(!account)
        } else {
            setLoginModal(true)
        }
    }

    return (
        <div className="w-[50%] h-full settings dark:bg-[#616161]">

            <div className="flex flex-col h-full bg-slate-300 dark:bg-slate-900 m-0.5">
                <div className="flex items-center justify-between mb-1 pl-1">
                    <label htmlFor="">
                        {currentTheme === 'dark' ? 'Dark' : 'Light'}{' '}
                        <span>Mode</span>
                    </label>
                    {currentTheme === 'dark' ?
                        (<MoonIcon onClick={() => setTheme('light')} className="cursor-pointer border border-zinc-600 w-7 mr-1"/>)
                        : (<SunIcon onClick={() => setTheme('dark')} className="cursor-pointer border border-zinc-600  w-7 mr-1"/>)
                    }
                </div>
                <hr/>
                <div onClick={Account}
                    className="active:text-xl active:bg-slate-400 flex items-center justify-between mt-1 pl-1 mb-1 cursor-pointer">
                    <p className="text-blue-900 text-lg">Profile</p>  <UserIcon className="text-blue-900 border border-blue-600 w-7 p-0.6 mr-1"/>
                </div>
                <hr/>
                <div className="flex items-center justify-between mt-1 pl-1 mb-1">
                    <p>Font size</p>
                    <button onClick={FontSizeDown} className={fontSizeCount === 5 ? "bg-gray-300": "border border-zinc-600 w-7 p-0.6 mr-1"}>
                        <ChevronDownIcon />
                    </button>

                    <p>{fontSizeCount}</p>

                    <button  onClick={FontSizeUp} className={fontSizeCount === 20 ? "bg-gray-300": "border border-zinc-600 w-7 p-0.6 mr-1"}>
                        <ChevronUpIcon/>
                    </button>

                </div>
            </div>

        </div>
    )

}
