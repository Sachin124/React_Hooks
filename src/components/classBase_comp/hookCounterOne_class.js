import React, { Component } from 'react'

export class HookCounterOne_class extends Component {
// constructor(props){
//     super(props)
//     this.
// }

state = {
    count: 0
};
componentDidMount(){
    document.title = `Class Base Comp clicked ${this.state.count} times `;
}

componentDidUpdate(prevProps, prevState){


    if (prevState.count !== this.state.count) {
        console.log(prevState);
        document.title = `Class Base Comp clicked ${this.state.count} times `;
    }
   
}

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={el=> this.setState({name: el.target.value})} />
         <button onClick={() => this.setState({count: this.state.count + 1})}>Click {this.state.count} times</button>
      </div>
    )
  }
}

export default HookCounterOne_class