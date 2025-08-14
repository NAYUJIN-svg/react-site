import React, { useRef, useState } from 'react';

const Ex_useRef3 = () => {
    const timerRef = useRef(null);
    const [count, setCount] = useState(0);

    // 시작버튼
    const startTimer = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 2000);
        }
    };
    //정지버튼
    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;

    }


    return (
        <>
            <p>카운트: {count}</p>
            <button onClick={startTimer}>시작</button>
            <button onClick={stopTimer}>정지</button>


        </>
    );
};

export default Ex_useRef3;