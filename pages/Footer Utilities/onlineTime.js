import {useState, useEffect, useContext} from "react";
import {UserState} from "@/pages/StateContext";

export default function OnlineTime() {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    const {startTime, setElapsedTime} = useContext(UserState)

    useEffect(() => {
        let interval;
        if (startTime) {
            interval = setInterval(() => {
                setSeconds(Math.floor((new Date() - startTime) / 1000));
                setMinutes(Math.floor(seconds / 60))
                setHours(Math.floor(minutes / 60))
            }, 1000);
        }
        const timObject = {seconds, minutes, hours}
        setElapsedTime(timObject)
        return () => clearInterval(interval);
    }, [seconds, minutes, startTime, hours, setElapsedTime]);


    return (
        <div className="flex items-center">
            <p className="mx-0.5 p-1 border border-zinc-600 w-17 flex items-center justify-center">S-{seconds}</p>
            <p className="mx-0.5 p-1 border border-zinc-600 w-17 flex items-center justify-center">M-{minutes}</p>
            <p className="mx-0.5 p-1 border border-zinc-600 w-17 flex items-center justify-center">H-{hours}</p>
        </div>
    );
}
