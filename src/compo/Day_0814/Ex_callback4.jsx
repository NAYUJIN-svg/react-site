import React, { useCallback, useEffect, useState } from 'react';

const Ex_callback4 = () => {
    const [count, setCount] = useState(0);

    const logCount = useCallback(() => {
        console.log(`현재 카운트: ${count}`);
    }, [count]); //만드는게 기준

    useEffect(() => {
        logCount();

    }, [logCount]);   //실제함수를 수행하는것


    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>
                +1 증가버튼

            </button>



        </>
    );
};

export default Ex_callback4;



