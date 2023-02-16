import {MoonIcon, SunIcon, XMarkIcon} from "@heroicons/react/24/solid";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function ReadSetting({MyExit, MyExitSettings}) {
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
        <div className="w-[50%] h-full settings dark:bg-[#616161]">

            <div className="flex flex-col items-center h-full bg-slate-300 dark:bg-slate-900 m-0.5">
                <div className="flex items-center justify-start">
                    <label htmlFor="" >
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
