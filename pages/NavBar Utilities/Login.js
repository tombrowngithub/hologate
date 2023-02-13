import Model from "react-modal";
import Image from "next/image";
import googleIcon from "@/pages/images/google.png";
import {useEffect, useState} from "react";
import {auth, provider} from "@/Firebase/firebaseConfig";
import {signInWithPopup, signInWithEmailAndPassword} from "firebase/auth"
import {useTheme} from "next-themes";

export default function Login({loginModal, setLoginModal, setIsAuth}) {
    const {theme} = useTheme();
    const [userNameEmail, setUserNameEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const[bgColor, setBgColor] = useState("#f6f6f6");

    useEffect(()=>{
        if(theme === 'dark'){
            setBgColor("#000")
        }else{
            setBgColor("#f6f6f6")
        }
    },[theme])

    function loginButton(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, userNameEmail, userPassword).then(r=>{
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            console.log(auth.currentUser.metadata.creationTime)
        })
        setLoginModal(false)
    }

    function LoginWithGoogle() {
        console.log("You logged in with google account")
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            setLoginModal(false)

            console.log(auth.currentUser)

        })
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
                <form onSubmit={(e) => loginButton(e)} className='flex flex-col  items-center mt-4'>
                    <input onChange={(e) => setUserNameEmail(e.target.value)}
                           className='w-[17rem] p-2 px-5 mb-4 rounded-md text-black shadow-lg' type="text"
                           placeholder='Enter email or User Name'/>
                    <input onChange={(e) => setUserPassword(e.target.value)}
                           className='w-[17rem] p-2 px-5 mb-4 rounded-md text-black shadow-lg' type="password"
                           placeholder='Password'/>
                    <button disabled={true} type="submit"
                            className='w-[17rem] mb-4 p-2 rounded-md shadow-lg bg-indigo-600 text-white'>Login
                    </button>
                    <p className="text-blue-800">OR</p>
                    <div
                        onClick={LoginWithGoogle}
                        className="active:bg-slate-500 w-[17rem] p-1 mt-1.5 bg-white flex items-center rounded-md shadow-lg">
                        <Image className="w-8 p-1" src={googleIcon} alt=""/>
                        <p className="ml-0.5  dark:text-blue-700">Login in with Google</p>
                    </div>

                </form>
            </div>
        </Model>
    )

}