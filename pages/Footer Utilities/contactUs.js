import Image from "next/image";
import HalaGateImage from "@/pages/images/HalogateImg.jpg";
import Link from "next/link";
import {FaFacebook, FaMailBulk, FaTwitter,FaWhatsapp} from "react-icons/fa";
import Model from "react-modal";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function ContactUs({contact, setContact}){
    const {theme} = useTheme();
    const[bgColor, setBgColor] = useState("#f6f6f6");

    useEffect(()=>{
        if(theme === 'dark'){
            setBgColor("#000")
        }else{
            setBgColor("#f6f6f6")
        }
    },[theme])

    return(
        <Model isOpen={contact}
               ariaHideApp={false}
               onRequestClose={() => setContact(false)}
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
                <h1 className="text-2xl font-bold text-center">Contact us!</h1>
                <Image className="mb-2 rounded" src={HalaGateImage} alt="Icon"/>
                <div className="flex justify-around">
                    <Link href="https://www.facebook.com/Author.Nath.Creativity?mibextid=ZbWKwL">
                        <div className="flex flex-col items-center cursor-pointer">
                            <FaFacebook size="30px" color="blue"/>
                            <p className="text-xs">Facebook</p>
                        </div>
                    </Link>

                    <Link href="https://twitter.com/author_nath?t=PBH4YSu9JHDQC5H5UPqJXQ&s=08">
                        <div className="flex flex-col items-center">
                            <FaTwitter size="30px" color="#1DA1F2"/>
                            <p className="text-xs">Twitter</p>
                        </div>
                    </Link>

                    <Link href="tel:+2348163452027">
                        <div className="flex flex-col items-center">
                            <FaWhatsapp size="30px" color="#25D366"/>
                            <p className="text-xs">Whatsapp</p>
                        </div>
                    </Link>

                    <Link href="mailto:nathubijii@gmail.com">
                        <div className="flex flex-col items-center">
                            <FaMailBulk size="30px" color="darkBlue"/>
                            <p className="text-xs">Email</p>
                        </div>
                    </Link>
                </div>
            </div>
        </Model>
    )
}