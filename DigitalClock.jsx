import React, { useState } from 'react';
const DigitalClock=()=>{
    let CurrTime = new Date().toLocaleTimeString();
    const [Ctime, setCtime] = useState(CurrTime);
    const NewTime = ()=>{
        let times = new Date().toLocaleTimeString();
        setCtime(times);
    }
    setInterval(NewTime, 1000);
    return(
        <>
            <h1 className="Timer">{Ctime}</h1>
        </>
    );
}
export default DigitalClock;