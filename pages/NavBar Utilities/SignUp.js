import Image from "next/image";
import googleIcon from "@/pages/images/google.png";
import Model from "react-modal";
import {useState} from "react";

export default function SignUp({regModal, setRegModel}) {
//The User Reg details
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function regButton(e) {
        e.preventDefault()
        const userObject = {
            user_name: userName,
            user_email: email,
            user_password: password,
        }
        console.log(userObject)
        setRegModel(false)
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
                background: "#f6f6f6",
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
                    <button type="submit"
                            className='w-[17rem] mb-4 p-2 rounded-md shadow-lg bg-indigo-600 text-white'>Register
                    </button>
                    <p className="text-blue-800">OR</p>
                    <div className="w-[17rem] p-1 mt-1.5 bg-white flex items-center rounded-md shadow-lg">
                        <Image className="w-8" src={googleIcon} alt=""/>
                        <p className="ml-0.5">Sign In with Google</p>
                    </div>

                </form>
            </div>
        </Model>
    )

}