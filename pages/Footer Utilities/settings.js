import {XMarkIcon, MoonIcon, SunIcon} from "@heroicons/react/24/solid";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function Settings({MyExit, MyExitSettings}) {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    function myExit() {
        MyExitSettings(!MyExit)
    }

    return (
        <div className="w-[50%] settingsOne dark:bg-[#616161]">
            <div className="bg-white dark:bg-[#616161] flex justify-end">
                <p className="mx-10 text-xl font-bold text-slate-700 dark:text-white">Settings</p>
                <XMarkIcon onClick={myExit} className="w-6 bg-red-700"/>
            </div>
            <hr/>
            <div className="flex flex-col items-center h-full bg-slate-300 dark:bg-slate-900 m-0.5">
                <div className="flex items-center justify-start">
                    <label htmlFor="">
                        {currentTheme === 'dark' ? 'Dark' : 'Light'}{' '}
                        <span>Mode</span>
                    </label>
                    {currentTheme === 'dark' ?
                        (<MoonIcon onClick={() => setTheme('light')} className="border border-zinc-600 ml-9 w-7"/>)
                        : (<SunIcon onClick={() => setTheme('dark')} className="border border-zinc-600 ml-9 w-7"/>)
                    }
                </div>

            </div>

        </div>
    )
}