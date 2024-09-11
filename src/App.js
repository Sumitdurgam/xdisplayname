import React, { useState } from 'react';
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      setError('First name and last name are required');
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError(null);
    }
  };

  return (
    <div className='style'>
      <h1> Full Name Display</h1>
      <form >
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
        <br />
        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
        {error &&  (
          <div className='error-message'>
            <span style={{ color: 'red' }}>{error}</span> 
          </div>
        )}
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}


// const style {
//   display: "flex",
// }

export default App;