import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const plantCard = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />;
  });
  return <ul className="cards">{plantCard}</ul>;
}

export default PlantList;
