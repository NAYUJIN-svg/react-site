import React, { useRef } from 'react';



const Ex_useRef1 = () => {
    const inputRef = useRef(null);


    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <label onClick={focusInput}>
                포커스 주기
            </label>
            
            
            
            <input type="text"
                ref={inputRef} placeholder="여기에 입력" />
            
            <button onClick={focusInput}>
                포커스 주기
            </button>
            
            


        </>
    );
};

export default Ex_useRef1;