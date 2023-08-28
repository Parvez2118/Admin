import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: '1', label: ' 1' },
  { value: '2', label: ' 2' },
  { value: '3', label: ' 3' },
  { value: '4', label: ' 4' },
  { value: '5', label: ' 5' },
  { value: '6', label: ' 6' },
  { value: '7', label: ' 7' },
  { value: '8', label: ' 8' },
  { value: '9', label: ' 9' },
  { value: '10', label: '10' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '20px', 
    width:'350px'
  }),
};

const Drop3 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleSelectChange}
        options={options}
        placeholder="Assign marks"
        styles={customStyles} // Apply the custom styles
      />
      
    </div>
  );
};

export default Drop3;
