import React from 'react';
import Input from './FormFieldsComponents/Input';
import Select from './FormFieldsComponents/Select';
import Date from './FormFieldsComponents/Date';

const FieldsComponents = ({ field, value, onChange }) => {
  const commonProps = {
    ...field,
    value: value,
    onChange: onChange
  };
   console.log(field)
  switch (field.component) {
    case 'Input':
      return <Input {...commonProps} />;
    case 'Select':
      return <Select {...commonProps} />;
    case 'Date':
      return <Date {...commonProps} />;
    default:
      console.warn(`Unknown component type: ${field.component}`);
      return null;
  }
};

export default FieldsComponents;