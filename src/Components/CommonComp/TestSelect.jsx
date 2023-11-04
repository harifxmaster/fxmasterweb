import React from 'react'
import Select from 'react-select'


function TestSelect() {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
    
    //   const customStyles = {
    //     option: (provided, state) => ({
    //       ...provided,
    //       color: state.isSelected ? 'white' : 'black',
    //       backgroundColor: state.isSelected ? 'blue' : 'white',
    //       ':hover': {
    //         backgroundColor: 'lightgray',
    //       },
    //     }),
    //   };
    
  return (
    <div>
        {/* <Select

    options={CountrySlctOpt}
    onChange={(values) => this.onChange(values)}
  /> */}

  

<Select
  options={options}
  placeholder="Select color"
  onChange={(values) => this.onChange(values)}
  isSearchable={true}
/>




  </div>
  )
}

export default TestSelect