import React from 'react';
import propTypes from "prop-types";
function Food({name, picture, rating}){
  //function Food(props)
  //return <h3>I love {props.fav}</h3>; 
  return <div>
    <h2>I love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src = {picture} alt={name}></img>
  </div>;
}
Food.propTypes = {
  name : propTypes.string.isRequired,
  picture : propTypes.string.isRequired,
  rating : propTypes.number.isRequired
};
const foodILike = [
  {
    id:1,
    name:"Kimchi",
    image:"",
    rating:5
  },{
    id:2,
    name:"Samgyeopsal",
    image:"",
    rating:4.7
  },{
    id:3,
    name:"Ramen",
    image:"",
    rating:4.8
  },{
    id:4,
    name:"Suyug",
    image:"",
    rating:4.9
  }
]

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      {foodILike.map(dish=>(
        <Food key = {dish.id} name={dish.name} picture={dish.image} rating ={dish.rating}/>
      ))}
    </div>
  );
}


// function renderFood(dish){
//   console.log(dish);
//   return <Food name={dish.name} picture={dish.image}/> 
// }
export default App;