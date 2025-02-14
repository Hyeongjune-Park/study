/************************************ */
/* 클래스형 컴포넌트 vs 함수형 컴포넌트 */
/************************************ */


import React, { useState, useEffect } from 'react';

// 클래스형 컴포넌트 예제
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message: 'Class Component'
        };
    }

    componentDidMount() {
        console.log('Class Component mounted');
    }

    handleClick = () => {
        console.log('Class Component Counted');
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>
                    Count
                </button>
            </div>
        );
    }
}

// 함수형 컴포넌트 예제
function FunctionalComponent() {
    const [count, setCount] = useState(0);
    const [message] = useState('Functional Component');

    useEffect(() => {
        console.log('Functional Component mounted');
    }, []);

    const handleClick = () => {
        console.log('Functional Component Counted');
        setCount(count + 1);
    };

    return (
        <div>
            <h2>{message}</h2>
            <p>Count: {count}</p>
            <button onClick={handleClick}>
                Count
            </button>
        </div>
    );
}

function ComponentExample() {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>클래스형 vs 함수형 컴포넌트</h2>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
                    <div style={{ borderBottom: '1px solid #ddd', marginBottom: '15px', paddingBottom: '10px' }}>
                        <h3>클래스형 컴포넌트</h3>
                        <div style={{ color: '#666' }}>React.Component 상속</div>
                    </div>
                    <ClassComponent />
                </div>

                <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
                    <div style={{ borderBottom: '1px solid #ddd', marginBottom: '15px', paddingBottom: '10px' }}>
                        <h3>함수형 컴포넌트</h3>
                        <div style={{ color: '#666' }}>Hook 사용</div>
                    </div>
                    <FunctionalComponent />
                </div>
            </div>
        </div>
    );
}

export default ComponentExample; 