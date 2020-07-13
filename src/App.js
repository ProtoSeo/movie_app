import React from 'react';
function Food({fav}){
  //function Food(props)
  //return <h3>I love {props.fav}</h3>; 
  return <h3>I love {fav}</h3>;

}
function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="samgiopsal"/>
    </div>
  );
}

export default App;