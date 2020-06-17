import React, { useState, useEffect } from 'react';

const HookTitleChange = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    useEffect(()=>{
        document.title =`count - ${count}`; 
    },[count])
    return (
        <div className="card-panel">
            <button className="btn" onClick={increment}>
                do count - {count}
            </button>

        </div>
    );
};

export default HookTitleChange;