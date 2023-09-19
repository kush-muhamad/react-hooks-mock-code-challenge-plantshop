import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm , setSearchTerm]= useState("")


  const OnHandleSearch = (searchValue) => {
    setSearchTerm(searchValue)

  }
  console.log(searchTerm)

  const displayPlants = plants.filter((plant)=> {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })


  useEffect(()=> {
    fetch(" http://localhost:6001/plants")
    .then(res => res.json())
    .then(setPlants)

  },[])

 const handlingNewPlant = (newPlant) => {
  setPlants([...plants, newPlant])


 }



  return (
    <main>
      <NewPlantForm handlingNewPlant={handlingNewPlant} />
      <Search  searchTerm={searchTerm} OnHandleSearch={OnHandleSearch}/>
      <PlantList plants= {displayPlants} />
    </main>
  );
}

export default PlantPage;
