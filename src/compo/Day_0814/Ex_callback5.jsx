import React, { useCallback, useEffect, useState } from 'react';

const Ex_callback5 = () => {
    const [count, setCount] = useState(0);

    const handleKeyPress = useCallback((e) => {
        if (e.key === "ArrowUp") {
            setCount((prev) => prev + 1)
        }
        else if (e.key === "ArrowDown") {
            setCount((prev) => prev - 1)
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
            console.log("나가는거, 볼 수 있나?")
        };
    }, [handleKeyPress]);

    return (
        <>
            <p>ArrowUp 키를 눌러 증가</p>
            <p>Count : {count}</p>


        </>
    );
};

export default Ex_callback5;