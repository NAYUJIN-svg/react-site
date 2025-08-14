import React, { useMemo, useState } from 'react';

const users = [
    { id: 1, name: "Kim", active: true },
    { id: 2, name: "Lee", active: false },
    { id: 3, name: "Park", active: true },
]


const Ex_memo3 = () => {
    const [showActive, setShowActive] = useState(true);


    const filteredUsers = useMemo(() => {
        console.log("사용자 필터링 진행");
        return users.filter(user => user.active === showActive);
    }, [showActive]);

    return (
        <>
            <button onClick={() => setShowActive(a => !a)}>
                클릭하면 {showActive ? "비활성 사용자 보기" : "활성 사용자 보기"} 사용자 보기!~
            </button>
            <ul>
                {filteredUsers.map(u => (
                    <li key={u.id}>{u.name}님은 {String(u.active)}</li>
                ))}

            </ul>

        </>


    );
};

export default Ex_memo3;