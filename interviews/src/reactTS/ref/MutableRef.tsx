import React, { useState, useEffect, useRef } from 'react';

function MutableRef() {
    const [timer, setTimer] = useState(0),
        interValRef = useRef<number | null>(null);
    const stopTimer = () => {
        if (interValRef.current) window.clearInterval(interValRef.current)
    }
    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000);

        return () => {
            stopTimer();
        }
    })
    return (
        <div>
            <h6>timer is {timer}</h6>
            <button onClick={stopTimer}> Stop timer</button>
        </div>
    );
}

export default MutableRef;