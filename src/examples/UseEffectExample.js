/************************************ */
/*         UseEffect 예제             */
/************************************ */



import React, { useState, useEffect } from 'react';

// 모든 렌더링마다 실행되는 컴포넌트
function AlwaysRenderingInfo() {
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('🔄 매번 렌더링 시 실행:', {
            name
        });
    }); // 의존성 배열 없음

    return (
        <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
            <div style={{ borderBottom: '1px solid #ddd', marginBottom: '15px', paddingBottom: '10px' }}>
                <h3>의존성 배열이 없는 경우</h3>
                <div style={{ color: '#666' }}>모든 렌더링마다 실행</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                    <input 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        placeholder="이름"
                        style={{ padding: '5px', width: '200px' }}
                    />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <b>이름: </b> {name}
                </div>
            </div>
        </div>
    );
}

// 마운트 시에만 실행되는 컴포넌트
function OnlyMountInfo() {
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('⭐ 마운트 시에만 실행:', {
            name
        });
    }, []); // 빈 의존성 배열

    return (
        <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
            <div style={{ borderBottom: '1px solid #ddd', marginBottom: '15px', paddingBottom: '10px' }}>
                <h3>빈 의존성 배열인 경우</h3>
                <div style={{ color: '#666' }}>마운트 시에만 실행</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                    <input 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        placeholder="이름"
                        style={{ padding: '5px', width: '200px' }}
                    />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <b>이름: </b> {name}
                </div>
            </div>
        </div>
    );
}

function UseEffectExample() {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>useEffect 의존성 배열 비교</h2>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <AlwaysRenderingInfo />
                <OnlyMountInfo />
            </div>
        </div>
    );
}

export default UseEffectExample; 