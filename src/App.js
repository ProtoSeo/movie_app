import React from 'react';
function Food({name, picture}){
  //function Food(props)
  //return <h3>I love {props.fav}</h3>; 
  return <div>
    <h2>I love {name}</h2>
    <img src = {picture}></img>
  </div>;
}
const foodILike = [
  {
    name:"Kimchi",
    image:""
  },{
    name:"Samgyeopsal",
    image:""
  },{
    name:"Ramen",
    image:""
  },{
    name:"Suyug",
    image:""
  }
]

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      {foodILike.map(dish=>(
        <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;