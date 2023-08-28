import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Fun', label: 'Fun' },
  { value: 'Easy', label: 'Easy' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Tough', label: 'Tough' },
  { value: 'Expert', label: 'Expert' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '20px', 
    width:'350px'
  }),
};

const Drop2 = () => {
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
        placeholder="Question level"
        styles={customStyles} // Apply the custom styles
      />
      
    </div>
  );
};

export default Drop2;
