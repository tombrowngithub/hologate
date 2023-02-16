import Model from "react-modal";
import Image from "next/image";
import googleIcon from "@/pages/images/google.png";
import facebookIcon from "@/pages/images/facebook.png";
import {useEffect, useState} from "react";
import {auth, provider} from "@/Firebase/firebaseConfig";
import {signInWithPopup, FacebookAuthProvider} from "firebase/auth"
import {useTheme} from "next-themes";

export default function Login({loginModal, setLoginModal, setIsAuth}) {
    const {theme} = useTheme();
    const [bgColor, setBgColor] = useState("#f6f6f6");

    useEffect(() => {
        if (theme === 'dark') {
            setBgColor("#000")
        } else {
            setBgColor("#f6f6f6")
        }
    }, [theme])


    function LoginWithGoogle() {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            setLoginModal(false)
        }).catch((error) => console.log(error))
    }

    function loginWithFacebook() {
        const provider = new FacebookAuthProvider()
        signInWithPopup(auth, provider).then(r => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            setLoginModal(false)
        }).catch((error) => console.log(error))
    }

    return (
        <Model isOpen={loginModal}
               ariaHideApp={false}
               onRequestClose={() => setLoginModal(false)}
               style={{
                   content: {
                       width: "21rem",
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
                <p className="text-center text-blue-800 text-2xl font-bold p-3">Login
                </p>
                <div className='flex flex-col  items-center mt-4'>
                    <button
                        onClick={loginWithFacebook}
                        className='w-[17rem] mb-4 p-2 flex items-center rounded-md shadow-lg bg-[#3a54b3] text-white'>
                        <Image className="w-8" src={facebookIcon} alt=""/>
                        <p className="ml-0.5  dark:text-white">Login with Facebook</p>
                    </button>
                    <p className="text-blue-800">OR</p>
                    <button
                        onClick={LoginWithGoogle}
                        className="active:bg-slate-500 w-[17rem] p-2 mt-1.5 bg-white flex items-center rounded-md shadow-lg">
                        <Image className="w-8 p-1" src={googleIcon} alt=""/>
                        <p className="ml-0.5  dark:text-blue-700">Login with Google</p>
                    </button>

                </div>
            </div>
        </Model>
    )

}