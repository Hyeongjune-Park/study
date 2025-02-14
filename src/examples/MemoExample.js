/************************************ */
/*         React.memo 예제            */
/************************************ */



import React, { useState } from 'react';

// 메모이제이션된 컴포넌트
const MemoizedCounter = React.memo(({ count }) => {
    console.log('MemoizedCounter 렌더링');
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', backgroundColor: '#FFEBEE' }}>
            <h3>Memoized Counter</h3>
            <p>현재 카운트: {count}</p>
        </div>
    );
});

// 메모이제이션되지 않은 컴포넌트
const NonMemoizedCounter = ({ count }) => {
    console.log('NonMemoizedCounter 렌더링');
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', backgroundColor: '#E3F2FD' }}>
            <h3>Non-Memoized Counter</h3>
            <p>현재 카운트: {count}</p>
        </div>
    );
};

// 부모 컴포넌트
const MemoExample = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState('');

    return (
        <div style={{ padding: '20px' }}>
            <h2>React.memo 예제</h2>
            <MemoizedCounter count={count} />
            <NonMemoizedCounter count={count} />
            <button onClick={() => setCount(count + 1)}>카운트 증가</button>
            <input 
                type="text" 
                value={otherState} 
                onChange={e => setOtherState(e.target.value)} 
                placeholder="다른 상태 변경"
                style={{ marginTop: '10px', padding: '5px' }}
            />
        </div>
    );
};

export default MemoExample; 