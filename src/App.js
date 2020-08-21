import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  const product = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a Raect Person</p>
       <Product product={product[0]}></Product>
       <Product product={product[1]}></Product>
      
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border:'ipx solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  

  return(
    <div style={productStyle}>
        <h3>{props.product.name}</h3>
        <h5>{props.product.price}</h5>
        <button>Buy now</button>
    </div>
  )
}

export default App;
