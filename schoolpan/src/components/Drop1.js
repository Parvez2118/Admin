import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Multiple choice', label: 'Multiple choice' },
  { value: 'Arrange ordering', label: 'Arrange ordering' },
  { value: 'True or False', label: 'True or False' },
  { value: 'Fill in the blanks', label: 'Fill in the blanks' },
  { value: 'Short answer', label: 'Short answer' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '20px', 
    width:'350px'
  }),
};

const Drop1 = () => {
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
        placeholder="Question type"
        styles={customStyles} // Apply the custom styles
      />
      
    </div>
  );
};

export default Drop1;
