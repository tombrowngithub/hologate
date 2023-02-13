import Image from "next/image";
import googleIcon from "@/pages/images/google.png";
import Model from "react-modal";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {auth, provider} from "@/Firebase/firebaseConfig";
import {signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth"


export default function SignUp({regModal, setRegModel,setIsAuth}) {
//The User Reg details
    const {theme} = useTheme();
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[bgColor, setBgColor] = useState("#f6f6f6");

    useEffect(()=>{
        if(theme === 'dark'){
            setBgColor("#000")
        }else{
            setBgColor("#f6f6f6")
        }
    },[theme])

    function regButton(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then(r=>{
          console.log(r)
        })
        setRegModel(false)
    }

    function LoginWithGoogle() {
        console.log("You logged in with google account")
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            setRegModel(false)

            console.log(auth.currentUser)

        })
    }

    return (
        <Model isOpen={regModal}
               ariaHideApp={false}
               onRequestClose={() => setRegModel(false)} style={{

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
                <p className="text-center text-blue-800 text-md font-bold p-3">Register on Holo Gate Movies to have
                    unlimited user experience</p>
                <form onSubmit={(e) => regButton(e)} className='flex flex-col  items-center mt-4 '>
                    <input onChange={(e) => setUserName(e.target.value)}
                           className='w-[17rem] p-2 px-5 mb-4 rounded-md text-black shadow-lg' type="text"
                           placeholder='Enter User Name'/>
                    <input onChange={(e) => setEmail(e.target.value)}
                           className='w-[17rem] p-2 px-5 mb-4 rounded-md text-black shadow-lg' type="email"
                           placeholder='Enter your email'/>
                    <input onChange={(e) => setPassword(e.target.value)}
                           className='w-[17rem] p-2 px-5 mb-4 rounded-md text-black shadow-lg' type="password"
                           placeholder='Password'/>
                    <button disabled={true} type="submit"
                            className='w-[17rem] mb-4 p-2 rounded-md shadow-lg bg-indigo-600 text-white'>Register
                    </button>
                    <p className="text-blue-800">OR</p>
                    <div onClick={LoginWithGoogle}
                        className="w-[17rem] p-1 mt-1.5 bg-white flex items-center rounded-md shadow-lg">
                        <Image className="w-8 p-1" src={googleIcon} alt=""/>
                        <p className="ml-0.5  dark:text-blue-700">Sign In with Google</p>
                    </div>

                </form>
            </div>
        </Model>
    )

}