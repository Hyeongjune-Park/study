/************************************ */
/*            Props 예제              */
/************************************ */



import React, { Component } from 'react';


// 1. 올바른 방법: super(props) 사용
class CorrectComponent extends Component {
    constructor(props) {
        super(props);
        console.log('1. super(props) 사용');
        console.log('props:', props.name);
        console.log('this.props:', this.props.name);
    }

    render() {
        return (
            <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', backgroundColor: '#FFEBEE' }}>
                <h3>1. super(props) 사용</h3>
                <p>전달받은 이름: {this.props.name}</p>
            </div>
        );
    }
}

// 2. 잘못된 방법: super()만 사용
class IncorrectComponent extends Component {
    constructor(props) {
        super();
        console.log('2. super()만 사용');
        console.log('props:', props.name);
        console.log('this.props:', this.props?.name);
    }

    render() {
        return (
            <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', backgroundColor: '#E3F2FD' }}>
                <h3>2. super()만 사용</h3>
                <p>전달받은 이름: {this.props.name}</p>
            </div>
        );
    }
}

// 3. constructor 없이 사용
class NoConstructorComponent extends Component {
    render() {
        console.log('3. constructor 없이 사용');
        console.log('this.props:', this.props.name);
        
        return (
            <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', backgroundColor: '#E8F5E9' }}>
                <h3>3. constructor 없이 사용</h3>
                <p>전달받은 이름: {this.props.name}</p>
            </div>
        );
    }
}

function PropsExample() {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Constructor와 props 관계 비교</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
                <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
                    <CorrectComponent name="React" />
                </div>

                <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
                    <IncorrectComponent name="React" />
                </div>

                <div className="component-container" style={{ flex: 1, maxWidth: '400px' }}>
                    <NoConstructorComponent name="React" />
                </div>
            </div>
        </div>
    );
}

export default PropsExample; 