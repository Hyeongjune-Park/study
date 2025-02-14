/************************************ */
/*        돔 트리에서 렌더링 예제       */
/************************************ */



import React, { useState } from 'react';

// 카운터 1 (부모 컴포넌트)
const Counter1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  console.log(`%c🟡 [Counter1] 렌더링: 카운터 1`, 'color: #FF5722; font-weight: bold;');

  return (
    <div style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px', margin: '10px', backgroundColor: '#FFEBEE' }}>
      <h3>카운터 1</h3>
      <p>현재 카운트: {count}</p>
      <button onClick={increment}>증가</button>
      <Counter2 />
      <Counter4 />
    </div>
  );
};

// 카운터 2 (자식 컴포넌트)
const Counter2 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  console.log(`%c🟡 [Counter2] 렌더링: 카운터 2`, 'color: #2196F3; font-weight: bold;');

  return (
    <div style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px', margin: '10px', backgroundColor: '#E3F2FD' }}>
      <h3>카운터 2</h3>
      <p>현재 카운트: {count}</p>
      <button onClick={increment}>증가</button>
      <Counter3 />
    </div>
  );
};

// 카운터 3 (자식 컴포넌트)
const Counter3 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  console.log(`%c🟡 [Counter3] 렌더링: 카운터 3`, 'color: #4CAF50; font-weight: bold;');

  return (
    <div style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px', margin: '10px', backgroundColor: '#E8F5E9' }}>
      <h3>카운터 3</h3>
      <p>현재 카운트: {count}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
};

// 카운터 4 (자식 컴포넌트)
const Counter4 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  console.log(`%c🟡 [Counter4] 렌더링: 카운터 4`, 'color: #FFEB3B; font-weight: bold;');

  return (
    <div style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px', margin: '10px', backgroundColor: '#FFF3E0' }}>
      <h3>카운터 4</h3>
      <p>현재 카운트: {count}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
};

// RenderingExample 컴포넌트
const RenderingExample = () => {
  return (
    <div>
      <h2>리액트 랜더링 예제</h2>
      <p>각 카운터 버튼을 클릭할 때마다 해당 카운터만 렌더링됩니다.</p>
      <Counter1 />
    </div>
  );
};

export default RenderingExample; 