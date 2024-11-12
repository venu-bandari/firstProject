import React,{useState,useEffect} from "react";

function DigitalClock(){

    const [time,setTime] = useState(new Date());
    useEffect(()=> {
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(intervalId);
        }
    },[]);

    function formatTime(){
        let h = time.getHours();
        const m=time.getMinutes();
        const s=time.getSeconds();
        const meridiem = h>=12?"PM":"AM";
        h = h % 12 || 12;
        return `${pad(h)}:${pad(m)}:${pad(s)} ${meridiem}`;
    }
    function pad(number)
    {
        return (number<10?"0":"")+number;
    }

    return(<>
         <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
         </div>
    </>);
}
export default DigitalClock