/************************************ */
/*          UseMemo 예제              */
/************************************ */



import React, { useState, useMemo } from 'react';

// useMemo를 사용하는 컴포넌트
const MemoizedExample = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    // 계산 비용이 큰 함수
    const computeExpensiveValue = (num) => {
        console.log('비용이 큰 계산 실행 (useMemo 사용)');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += num;
        }
        return result;
    };

    // useMemo를 사용하여 메모이제이션
    const expensiveValue = useMemo(() => computeExpensiveValue(count), [count]);

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', margin: '10px', backgroundColor: '#FFEBEE' }}>
            <h3>useMemo 사용</h3>
            <p>카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>카운트 증가</button>
            <input 
                type="text" 
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)} 
                placeholder="입력값"
                style={{ marginTop: '10px', padding: '5px' }}
            />
            <p>비용이 큰 계산 결과: {expensiveValue}</p>
        </div>
    );
};

// useMemo를 사용하지 않는 컴포넌트
const NonMemoizedExample = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    // 계산 비용이 큰 함수
    const computeExpensiveValue = (num) => {
        console.log('비용이 큰 계산 실행 (useMemo 미사용)');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += num;
        }
        return result;
    };

    const expensiveValue = computeExpensiveValue(count);

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', margin: '10px', backgroundColor: '#E3F2FD' }}>
            <h3>useMemo 미사용</h3>
            <p>카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>카운트 증가</button>
            <input 
                type="text" 
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)} 
                placeholder="입력값"
                style={{ marginTop: '10px', padding: '5px' }}
            />
            <p>비용이 큰 계산 결과: {expensiveValue}</p>
        </div>
    );
};

const UseMemoExample = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>useMemo 예제</h2>
            <MemoizedExample />
            <NonMemoizedExample />
        </div>
    );
};

export default UseMemoExample; 