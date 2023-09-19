import React, {useState} from "react";

function PlantCard({plant}) {
  // object destructring uses curly braces
  const {name, price, image} = plant
  //deliverable 3
  const [isInstock, setIsInStock] = useState(true)

  const handleToggleStock = () => {
    setIsInStock(!isInstock)
  
  }



  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInstock ? (
        <button onClick={handleToggleStock}className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
