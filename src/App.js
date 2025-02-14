import React, { useState } from 'react';
import './App.css';
import ComponentExample from './examples/ComponentExample';
import InheritanceExample from './examples/InheritanceExample';
import MountExample from './examples/MountExample';
import StateExample from './examples/StateExample';
import PropsExample from './examples/PropsExample';
import ObjectStateExample from './examples/ObjectStateExample';
import UseEffectExample from './examples/UseEffectExample';
import RenderingExample from './examples/RenderingExample';
import MemoExample from './examples/MemoExample';
import UseMemoExample from './examples/UseMemoExample';
import UseCallBackExample from './examples/UseCallBackExample';
import WrongCallbackExample from './examples/WrongCallbackExample';

function App() {
  const [currentExample, setCurrentExample] = useState(null);

  const examples = [
    {
      id: 'component',
      title: '클래스형 vs 함수형 컴포넌트',
      description: '두 가지 컴포넌트 방식의 차이점 비교',
      component: <ComponentExample />
    },
    {
      id: 'inheritance',
      title: 'React.Component 상속 비교',
      description: 'React.Component 상속의 의미와 사용법',
      component: <InheritanceExample />
    },
    {
      id: 'mount',
      title: '마운트 예제',
      description: '컴포넌트가 화면에 처음 나타나는 과정 이해하기',
      component: <MountExample />
    },
    {
      id: 'state',
      title: '상태 관리 예제',
      description: 'setState와 직접 상태 수정의 차이점 이해하기',
      component: <StateExample />
    },
    {
      id: 'props',
      title: 'Props 예제',
      description: '부모로부터 자식으로 데이터를 전달하는 방법 이해하기',
      component: <PropsExample />
    },
    {
      id: 'objectState',
      title: '객체 상태 관리 예제',
      description: '객체 형태의 상태를 관리하는 방법 이해하기',
      component: <ObjectStateExample />
    },
    {
      id: 'useEffect',
      title: 'useEffect Hook 예제',
      description: '컴포넌트 렌더링 시 부수 효과 처리하기',
      component: <UseEffectExample />
    },
    {
      id: 'rendering',
      title: '리액트 랜더링 예제',
      description: '리액트의 랜더링 과정을 이해하기 위한 예제',
      component: <RenderingExample />
    },
    {
      id: 'memo',
      title: 'React.memo 예제',
      description: 'React.memo를 이해하기 위한 예제',
      component: <MemoExample />
    },
    {
      id: 'useMemo',
      title: 'useMemo 예제',
      description: 'useMemo를 이해하기 위한 예제',
      component: <UseMemoExample />
    },
    {
      id: 'useCallback',
      title: 'useCallback 예제',
      description: 'useCallback을 이해하기 위한 예제',
      component: <UseCallBackExample />
    },
    {
      id: 'wrongCallBack',
      title: 'wrongCallBack 예제',
      description: 'wrongCallBack을 이해하기 위한 예제',
      component: <WrongCallbackExample/>
    }
  ];

  const renderExample = () => {
    if (!currentExample) {
      return (
        <div className="welcome-message">
          <h2>React 예제 모음</h2>
          <p>왼쪽 메뉴에서 확인하고 싶은 예제 선택</p>
        </div>
      );
    }
    return currentExample.component;
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h2>예제 목록</h2>
        <ul>
          {examples.map((example) => (
            <li 
              key={example.id}
              onClick={() => setCurrentExample(example)}
              className={currentExample?.id === example.id ? 'active' : ''}
            >
              <h3>{example.title}</h3>
              <p>{example.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {renderExample()}
      </div>
    </div>
  );
}

export default App;
