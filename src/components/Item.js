import React from "react";


function Item({ name, category }) {

  const [isAdded, setIsAdded] = React.useState(false);

  
  function clickToCart(){
    setIsAdded(function(isAdded){   
      return !isAdded
    })
  }
    
  const cart = isAdded ? "in-cart" : "" ;
  const addBtn = isAdded ? "remove" : "add" ;
  const innerBtn = isAdded ? "Remove from Cart" : "Add to Cart" ;

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addBtn} onClick={clickToCart}>{innerBtn}</button>
    </li>
  );
}

export default Item;
