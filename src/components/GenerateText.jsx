import React, { useState } from 'react';

const GenerateText = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Generating images for: ${inputText}`);
  };

  return (
    <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white py-10 px-6 text-center rounded-lg mt-10">
      <h2 className="text-3xl font-semibold mb-6">Generate Text</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input 
          type="text" 
          value={inputText} 
          onChange={handleInputChange}
          placeholder="Enter text to generate images"
          className="w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold">
          Enroll
        </button>
      </form>
    </div>
  );
};

export default GenerateText;
