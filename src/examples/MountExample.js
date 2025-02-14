/************************************ */
/*       Mount될 때 실행 순서 예제     */
/************************************ */



import React, { Component, useState, useEffect } from 'react';

// 클래스형 컴포넌트
class ClassMountExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        console.log('🔵 [Class] 1. Constructor: 컴포넌트 생성');
    }

    componentDidMount() {
        console.log('🔵 [Class] 3. ComponentDidMount: API 호출 시작');
        // 단순 딜레이로 API 호출 시뮬레이션
        setTimeout(() => {
            this.setState({ data: '데이터 로드 완료!' });
            console.log('🔵 [Class] 4. 데이터 로딩 완료');
        }, 1000);
    }

    render() {
        console.log('🔵 [Class] 2. Render: 화면 그리기');
        return (
            <div style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
                <h3>Class Mount Example</h3>
                <p>{this.state.data || 'Loading...'}</p>
            </div>
        );
    }
}

// 함수형 컴포넌트
function FunctionalMountExample() {
    const [data, setData] = useState(null);
    console.log('🟡 [Function] 1. 함수 실행: 컴포넌트 생성');

    useEffect(() => {
        console.log('🟡 [Function] 3. useEffect: API 호출 시작');
        // 단순 딜레이로 API 호출 시뮬레이션
        setTimeout(() => {
            setData('데이터 로드 완료!');
            console.log('🟡 [Function] 4. 데이터 로딩 완료');
        }, 1000);
    }, []);

    console.log('🟡 [Function] 2. Return 실행: 화면 그리기');
    return (
        <div style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
            <h3>Functional Mount Example</h3>
            <p>{data || 'Loading...'}</p>
        </div>
    );
}

function MountExample() {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Mount 예제</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
                    <ClassMountExample />
                </div>
                <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
                    <FunctionalMountExample />
                </div>
            </div>
        </div>
    );
}

export default MountExample; 