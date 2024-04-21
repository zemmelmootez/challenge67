import React, { useState } from "react";
import "./AnimalShelter.css";

function AnimalShelter() {
  const [animals, setAnimals] = useState([
    {
      name: "Max",
      age: "3",
      sex: "Male",
      image:
        "https://i.pinimg.com/564x/14/f1/93/14f19348ec6fb9af42ec317620ec7384.jpg?fbclid=IwZXh0bgNhZW0CMTAAAR2GJG1ODUyMkBpnaBk2csvVbeKwPbFQWw6TV77UPgXniO5-sH1XRRbMSxs_aem_Acmfrmf-rdcHPigH05Y5wpV8r86oKX4gdEJV6_lkO2cfB9E8roc9rFAi9sSIZTQ5V-caPmQF_lkBsVlqxn3GWJgF",
    },
    {
      name: "Bella",
      age: "2",
      sex: "Female",
      image:
        "https://i.pinimg.com/564x/14/f1/93/14f19348ec6fb9af42ec317620ec7384.jpg?fbclid=IwZXh0bgNhZW0CMTAAAR2GJG1ODUyMkBpnaBk2csvVbeKwPbFQWw6TV77UPgXniO5-sH1XRRbMSxs_aem_Acmfrmf-rdcHPigH05Y5wpV8r86oKX4gdEJV6_lkO2cfB9E8roc9rFAi9sSIZTQ5V-caPmQF_lkBsVlqxn3GWJgF",
    },
    {
      name: "Charlie",
      age: "4",
      sex: "Male",
      image:
        "https://i.pinimg.com/564x/15/36/e7/1536e7de67f8f992c595a308ec8ae363.jpg",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    age: "",
    sex: "",
    image: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal({ ...newAnimal, [name]: value });
  };

  const addAnimal = () => {
    if (editIndex !== null) {
      const updatedAnimals = [...animals];
      updatedAnimals[editIndex] = newAnimal;
      setAnimals(updatedAnimals);
      setEditIndex(null);
    } else {
      setAnimals([...animals, newAnimal]);
    }
    setNewAnimal({ name: "", age: "", sex: "", image: "" });
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditIndex(null);
  };

  const editAnimal = (index) => {
    setNewAnimal(animals[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const deleteAnimal = (index) => {
    const updatedAnimals = [...animals];
    updatedAnimals.splice(index, 1);
    setAnimals(updatedAnimals);
  };

  return (
    <div className="animal-shelter">
      <h1>Animal Shelter</h1>

      <button onClick={toggleForm}>
        {showForm ? "Hide Form" : "Add Animal"}
      </button>

      {showForm && (
        <div className="add-animal">
          <h2>{editIndex !== null ? "Edit Animal" : "Add New Animal"}</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newAnimal.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={newAnimal.age}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Sex"
            name="sex"
            value={newAnimal.sex}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={newAnimal.image}
            onChange={handleInputChange}
          />
          <button onClick={addAnimal}>
            {editIndex !== null ? "Update Animal" : "Add Animal"}
          </button>
        </div>
      )}

      <div className="animal-list">
        {animals.map((animal, index) => (
          <div className="animal-card" key={index}>
            <img src={animal.image} alt={animal.name} />
            <div className="animal-info">
              <p>
                <strong>Name:</strong> {animal.name}
              </p>
              <p>
                <strong>Age:</strong> {animal.age}
              </p>
              <p>
                <strong>Sex:</strong> {animal.sex}
              </p>
            </div>
            <div className="animal-actions">
              <button onClick={() => editAnimal(index)}>Edit</button>
              <button onClick={() => deleteAnimal(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimalShelter;
