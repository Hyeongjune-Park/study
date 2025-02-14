/************************************ */
/*         React 상속 비교             */
/************************************ */


import React, { Component } from 'react';

// React.Component를 상속받지 않은 일반 클래스
class NormalClass {
    constructor() {
        this.message = "일반 클래스 메시지";
        this.state = { count: 0 }; // state 사용 시도
    }

    showMessage() {
        return this.message;
    }

    handleClick() {
        this.state.count += 1; // 직접 상태 변경 시도
    }
}

// React.Component를 상속받은 컴포넌트
class ReactComponent extends Component {
    constructor(props) {
        super(props);
        this.message = "React 컴포넌트 메시지";
        this.state = { count: 0 }; // React의 state 초기화
    }

    showMessage() {
        return this.message;
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 }); // setState 사용
    }

    componentDidMount() {
        console.log('React 컴포넌트 마운트됨');
    }

    componentDidUpdate() {
        console.log('React 컴포넌트 업데이트됨');
    }

    render() {
        return <div>
            <p>{this.showMessage()}</p>
            <p>카운트: {this.state.count}</p>
            <button onClick={this.handleClick}>Count</button>
        </div>;
    }
}

function InheritanceExample() {
    const normalClass = new NormalClass();

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>React.Component 상속 비교</h2>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
                    <div style={{ borderBottom: '1px solid #ddd', marginBottom: '15px', paddingBottom: '10px' }}>
                        <h3>일반 클래스</h3>
                        <div style={{ color: '#666' }}>React.Component 상속하지 않음</div>
                    </div>

                    <div>
                        <p>{normalClass.showMessage()}</p>
                        <p>카운트: {normalClass.state.count}</p>
                        <button onClick={() => {
                            normalClass.handleClick();
                            console.log('일반 클래스 카운트:', normalClass.state.count);
                        }}>Count</button>
                    </div>
                </div>

                <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
                    <div style={{ borderBottom: '1px solid #ddd', marginBottom: '15px', paddingBottom: '10px' }}>
                        <h3>React 컴포넌트</h3>
                        <div style={{ color: '#666' }}>React.Component 상속함</div>
                    </div>

                    <ReactComponent />
                </div>
            </div>
        </div>
    );
}

export default InheritanceExample; 