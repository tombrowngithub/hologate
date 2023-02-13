import Link from "next/link";
import Model from "react-modal";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function Info({Info, setInfo}) {
    const {theme} = useTheme();
    const[bgColor, setBgColor] = useState("#f6f6f6");

    useEffect(()=>{
        if(theme === 'dark'){
            setBgColor("#000")
        }else{
            setBgColor("#f6f6f6")
        }
    },[theme])
    return (
        <Model isOpen={Info}
               ariaHideApp={false}
               onRequestClose={() => setInfo(false)}
               style={{
                   content: {
                       width: "22rem",
                       top: '50%',
                       left: '50%',
                       right: 'auto',
                       bottom: 'auto',
                       marginRight: '-50%',
                       transform: 'translate(-50%, -50%)',
                       background: bgColor,
                       boxShadow: "0 6px 12px rgba(0, 0, 0, 0.31)"
                   }
               }}>

            <div className="flex flex-col mx-2 h-full">
                <h1 className="text-xl font-bold text-center">App information!</h1>
                <div className="bg-white text-sm font-bold mt-3 p-1 dark:bg-[#151a1e]">
                    <p>Copyright&#169; 2022 <span className="mr-4 Main-Text">HaloGate Movies&#8482;</span></p>
                    <p>All right reserved.</p>
                    <p>Owner: Nathaniel Anuma</p>
                    <p>Version: 1.0.0</p>
                    <p>Developed by <Link className="text-blue-700"
                                          href="https://www.tom-portfolio.onrender.com">Tom-DevA</Link>&#8482;</p>
                </div>

            </div>
        </Model>
    )
}