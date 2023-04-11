import React, { useState } from "react";

// define the type for the medication list item
type Medication = string;

function MedicationList() {
  // state for the input field value
  const [medication, setMedication] = useState<Medication>("");
  // state for the list of medications
  const [medications, setMedications] = useState<Medication[]>([]);
  // state for the index of the selected medication
  const [selected, setSelected] = useState<number>(-1);

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMedication(e.target.value);
  };

  // handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // check if the medication is not empty
    if (medication.trim()) {
      // add the medication to the list
      setMedications([...medications, medication]);
      // clear the input field
      setMedication("");
    }
  };

  // handle list item click
  const handleClick = (index: number) => {
    // toggle the selected index
    setSelected(selected === index ? -1 : index);
  };

  // handle yes button click
  const handleYes = () => {
    // delete the selected medication from the list
    setMedications(medications.filter((_, i) => i !== selected));
    // reset the selected index
    setSelected(-1);
  };

  return (
    <div className='medication-list'>
      <h1>Medication List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={medication}
          onChange={handleChange}
          placeholder='Enter a medication'
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {medications.map((med, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{ color: selected === index ? 'purple' : 'black' }}
          >
            {med}
          </div>
        ))}
      </ul>
      {selected !== -1 && (
        <div className='details'>
          <p>Have you taken your {medications[selected]} today?</p>
          <button onClick={handleYes}>Yes</button>
          <button>No</button>
        </div>
      )}
    </div>
  );
}

export default MedicationList;