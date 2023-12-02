import React, { useState, ChangeEvent, Dispatch } from "react";

interface IInput {
  title: string;
  setChange: Dispatch<string>;
}

const InputItem: React.FC<IInput> = ({ title, setChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setChange(newValue);
  };

  const [value, setValue] = useState<string>(''); // Set the type of state to string

  return (
    <div className="mt-10 relative h-10">
      <label htmlFor={title} className='text-lg px-2 focus:px-0' style={{fontFamily: "Unbound-reguler"}}>{title}: </label>
      <input
        type="text"
        id={title}
        name={title}
        value={value}
        onChange={handleChange}
        className='block w-full border-b-2 outline-none focus:ring-0 bg-transparent h-7' 
        style={{fontFamily: "Unbound-reguler"}}
      />
    </div>
  );
};

export default InputItem;
