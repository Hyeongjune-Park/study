/************************************ */
/*         상태 직접수정 예제          */
/************************************ */



import React, { Component, useState } from 'react';

// 클래스형 컴포넌트 예제
class ClassStateExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    // setState를 이용한 업데이트
    correctUpdate = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        console.log('클래스 setState로 카운트:', this.state.count);
    }

    // 직접 state 수정
    wrongUpdate = () => {
        this.state.count = this.state.count + 1;
        console.log('클래스 state 직접 수정으로 카운트:', this.state.count);
    }

    render() {
        return (
            <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
                <div style={{ borderBottom: '1px solid #ddd', marginBottom: '15px', paddingBottom: '10px' }}>
                    <h3>클래스형 컴포넌트</h3>
                    <div style={{ color: '#666' }}>state 객체 사용</div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <p>카운트: {this.state.count}</p>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <button onClick={this.wrongUpdate}>직접 수정</button>
                        <button onClick={this.correctUpdate}>setState 사용</button>
                    </div>
                </div>
            </div>
        );
    }
}

// 함수형 컴포넌트 예제
function FunctionalStateExample() {
    const [count, setCount] = useState(0);
    let directCount = 0;  // useState를 사용하지 않는 변수

    // useState를 이용한 업데이트
    const correctUpdate = () => {
        setCount(prev => prev + 1);
        console.log('함수형 setState로 카운트:', count);
    };

    // 직접 변수 수정
    const wrongUpdate = () => {
        directCount += 1;
        console.log('함수형 변수 직접 수정으로 카운트:', directCount);
    };

    return (
        <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
            <div style={{ borderBottom: '1px solid #ddd', marginBottom: '15px', paddingBottom: '10px' }}>
                <h3>함수형 컴포넌트</h3>
                <div style={{ color: '#666' }}>useState 사용</div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <p>state 카운트: {count}</p>
                <p>일반 변수 카운트: {directCount}</p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button onClick={wrongUpdate}>직접 수정</button>
                    <button onClick={correctUpdate}>setState 사용</button>
                </div>
            </div>
        </div>
    );
}

function StateExample() {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>상태 관리 방식 비교</h2>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <ClassStateExample />
                <FunctionalStateExample />
            </div>
        </div>
    );
}

export default StateExample; 