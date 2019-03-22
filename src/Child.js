import React from 'react';

export class Child extends React.Component {
    
    render() {
        return (
            <span style = {{ width: '100px', height: '100px', backgroundColor: 'blue', color: 'red' }}>{ this.props.data }</span>                
        )  
    }
}
