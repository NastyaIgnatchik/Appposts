import React from 'react';

const Myselect = ({options,defoltValue,value,onChange}) => {
    return (
        
    
      <select value={value} onChange={event => onChange(event.target.value)}>
      <option disabled value='value1'>{defoltValue} </option>
        {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
      </select>
   
    );
};

export default Myselect;