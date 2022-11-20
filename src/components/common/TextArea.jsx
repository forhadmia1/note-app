import React from 'react';

const TextArea = ({ label, name, required, onChange, value }) => {
    return (
        <label htmlFor={name} className='font-semibold '>
            {label}: <br />
            <textarea onChange={onChange} className='border-2 mt-1 p-1 border-black rounded font-normal w-full' name={name} cols="30" rows="5" required={required} value={value}></textarea>
        </label>
    );
};

export default TextArea;