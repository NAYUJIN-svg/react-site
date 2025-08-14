import React, { useCallback, useState } from 'react';
//useCallback은 함수 저장 후 필요할때 함수를 실행하는 훅이다.
const Ex_callback1 = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1); //이전 값에서 1증가//
    }, []);

    console.log("컴포넌트 렌더링");

    return (
        <>
            <p>Count : {count}</p>
            <button onClick={handleIncrement}>+1 증가</button>


        </>
    );
};

export default Ex_callback1;