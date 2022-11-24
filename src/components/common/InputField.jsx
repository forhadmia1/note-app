import React from 'react';

const InputField = ({ name, type, required, label, onChange, value }) => {
    return (
        <label htmlFor={name} className='font-semibold'>
            {label}: <br />
            <input onChange={onChange} className='border-b-2 font-normal  border-black focus:outline-none p-1 w-full' value={value} name={name} type={type} required={required} />
        </label>
    );
};

export default InputField;