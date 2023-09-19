import React, { useState } from "react";

function NewPlantForm({handlingNewPlant}) {
  //POST
  //STEP 1
  //create the initial form
  const initialForm = {
    //has nothing inside jus the keys
    name: "",
    image: "",
    price: 0,
  };
  //step2
  const [formData, setFormData] = useState(initialForm); // pass it in here

  //step 3 pass it in the   JSX in the value

  //step 4 add an onchange handler function records what is written in the form
  const handleChange = (e) => {
    // console.log(e.target.name)
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };
  // console.log(formData)

  //step 5 submit function to send the data
  const handleSubmit = (e) => {
    e.preventDefault()// step5.1 - prevent the page from refreshing
    // step5.2 - we want not only our data to show on the front-end but also back-end(data persisting)

    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data =>handlingNewPlant(data))// this formular is a prop from the parent page


    
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
