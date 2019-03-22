import React from 'react';
import { Child } from './Child';


export class Descent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            click: 0
        }
        this.addOneClick = this.addOneClick.bind(this);
        this.removeOneClick = this.removeOneClick.bind(this);
    }

    addOneClick() {
        this.setState((prevState) => {
            return  { click: prevState.click + 1 };
            }
        );
    }
    
    removeOneClick() {
        this.setState(state => state.click--);
    }

    render() {
        return (
            <section>
                <div style = {{ backgroundColor: 'green' }}>
                    Click me {this.state.click}
                </div> 
                <button onClick = { this.addOneClick }>Add one</button>
                <button onClick = { this.removeOneClick }>Remove one</button>
                <Child data = { this.props.value }/>
            </section>
        ) 
    }
}