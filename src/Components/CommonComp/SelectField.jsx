import React from 'react';

const SelectField = ({ label,id, className, type, placeholder, value='', required=false , listData, onchange }) => {
  return (
    <div className="form-inline mt-2">
      <label htmlFor={id} className="form-label sm:w-24">
        {" "}
        {label} { required === 'true' ? <span className="text-theme-6">*</span> :'' } 
      </label>
      <div className="sm:w-3/5">
      <select
          type={type}
          id={id}
          name={id}
          className={className}
          value={value}
          onSelect= {onchange}
        >
            {listData.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name.toUpperCase()}
          </option>
        ))}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
