/************************************ */
/*         UseCallBack 예제            */
/************************************ */



import React, { useState, useCallback, memo } from 'react';

// React.memo를 사용하여 자식 컴포넌트를 메모이제이션
const Child = memo(({ onClick, label }) => {
  console.log(`${label} 컴포넌트 렌더링`);
  return (
    <button onClick={onClick} style={{ margin: '5px' }}>
      {label}
    </button>
  );
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // useCallback을 사용한 메모이제이션된 함수
  const handleMemoized = useCallback(() => {
    console.log('Memoized 함수 호출됨');
    setCount(prev => prev + 1);
  }, []);

  // 매 렌더링마다 새로 생성되는 함수 (메모이제이션 미적용)
  const handleNonMemoized = () => {
    console.log('Non-memoized 함수 호출됨');
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>useCallback 예제</h2>
      <p>Count: {count}</p>
      <div>
        <Child onClick={handleMemoized} label="useCallback 적용 버튼" />
        <Child onClick={handleNonMemoized} label="useCallback 미적용 버튼" />
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setOtherState(prev => prev + 1)}>
          다른 상태 변경 (otherState: {otherState})
        </button>
      </div>
    </div>
  );
};

export default UseCallbackExample;
