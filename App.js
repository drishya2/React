import React, { useState } from 'react';

import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import "./index.css"


//Database
import products from './db/data';
import Card from './components/Card';




function App() {

const [selectedCategory,setSelectedCategory] = useState(null);

//Input filter
const [query,setQuery] = useState("");


const handleInputChange =(event)=>{
  setQuery(event.target.value);
};

const filteredItems = products.filter(
  (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
);




function filteredData(products,selected,query){
  let filteredProducts = products;

//Filtering input items
if(query){
  filteredProducts=filteredItems;
}

//Applaying Selected Filter
if (selected) {
  filteredProducts = filteredProducts.filter(
    ({ category, color, company, newPrice, title }) =>
      category === selected ||
      color === selected ||
      company === selected ||
      newPrice === selected ||
      title === selected
  );

}

return filteredProducts.map(({img, title, price})=>(
<Card 
key={Math.random()}
img={img}
title={title}
price={price}
/>
));


}

const result = filteredData(products, selectedCategory, query);

  return (
    <div>
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Products result={result} />
    </div>
  );
};

export default App;