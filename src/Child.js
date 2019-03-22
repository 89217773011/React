import React from 'react';
import { MyContext } from './App';

export class Child extends React.Component {
    
    render() {
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                        <div style = {{ width: '100px', height: '100px', backgroundColor: 'blue', color: 'red' }}>
                            { context }
                        </div>
                    )
                }  
            </MyContext.Consumer>          
        )  
    }
}
