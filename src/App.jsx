import React from 'react';
import Header from './components/header';
import Login from './components/Login';
import GenerateText from './components/GenerateText';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4">
        <div className="grid gap-10">
          {/* Header Section */}
          <Header />
          
          {/* Login Section */}
          <Login />

          {/* Generate Text Section */}
          <GenerateText />
        </div>
      </div>
    </div>
  );
}

export default App;
