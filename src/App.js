import React from 'react';
import propTypes from "prop-types";

class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   console.log("hello");
  // }
  state = { //state는 object
    count :0
  }
  add = () => {
    //setState를 호출할 때 마다 react는 새로운 state와 함께 render funcion을 호출한다
    this.setState(current => ({ count : current.count +1 }))
  };
  minus = () => {
    this.setState(current => ({ count : current.count -1 }))
  };
  //react는 class Component의 render method를 자동으로 실행한다.

  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just updated");  
  }
  componentWillUnmount(){
    console.log("Goodbye, cruel word");
  }

  render(){
    console.log("render");
    return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>

    </div>)
  }
}
export default App;