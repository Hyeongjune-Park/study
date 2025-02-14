/************************************ */
/*      그룹화된 상태 업데이트 예제     */
/************************************ */



import React, { Component, useState } from 'react';

// 클래스형 컴포넌트 예제
class ClassUserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "홍길동",
                age: 20,
                school: "민국대학교"
            }
        };
    }

    handleUpdate = () => {
        this.setState({
            user: {
                name: "홍길순",
                school: "한국대학교"
            }
        });
        console.log('클래스 컴포넌트 유저:', this.state.user);
    }

    render() {
        const { user } = this.state;
        return (
            <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
                <div style={{ borderBottom: '1px solid #ddd', marginBottom: '15px', paddingBottom: '10px' }}>
                    <h3>클래스형 컴포넌트</h3>
                    <div style={{ color: '#666' }}>state 객체 사용</div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <h4>이름: {user.name}</h4>
                    <h4>나이: {user.age}</h4>
                    <h4>학교: {user.school}</h4>
                    <button onClick={this.handleUpdate}>정보 변경</button>
                </div>
            </div>
        );
    }
}

// 함수형 컴포넌트 예제
function FunctionalUserCard() {
    const [user, setUser] = useState({
        name: "홍길동",
        age: 20,
        school: "민국대학교"
    });

    const handleUpdate = () => {
        setUser({
            ...user,
            name: "홍길순",
            school: "한국대학교"
        });
        console.log('함수형 컴포넌트 유저:', user);
    };

    return (
        <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
            <div style={{ borderBottom: '1px solid #ddd', marginBottom: '15px', paddingBottom: '10px' }}>
                <h3>함수형 컴포넌트</h3>
                <div style={{ color: '#666' }}>useState 사용</div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <h4>이름: {user.name}</h4>
                <h4>나이: {user.age}</h4>
                <h4>학교: {user.school}</h4>
                <button onClick={handleUpdate}>정보 변경</button>
            </div>
        </div>
    );
}

function ObjectStateExample() {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>객체 상태 관리 비교</h2>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <ClassUserCard />
                <FunctionalUserCard />
            </div>
        </div>
    );
}

export default ObjectStateExample; 