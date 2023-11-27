// CustomSelectField.tsx
import React from 'react';
import { Select } from '@chakra-ui/react';

const CustomSelectField = (props: any) => {
  const { id, placeholder, options, required, onChange, schema } = props;

  const enumOptions = schema.enum?.map((value: any) => ({ value, label: value }));

  return (
    <Select 
      id={id} 
      placeholder={placeholder} 
      isRequired={required}
      onChange={(event) => onChange(event.target.value)}
    >
      {enumOptions.map((option: any, i: number) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default CustomSelectField;
