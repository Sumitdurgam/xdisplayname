import React, { useState } from 'react';

function Title() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName) {
      setError('Both first and last names are required.');
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError(null);
    }
  };

  return (
    <div style={{ textAlign: 'left', paddingLeft: '0.70%' }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
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
        {error && (
          <div className='error-message'>
            <span style={{ color: 'red' }}>{error}</span>
          </div>
        )}
        <div style={{ textAlign: 'left', paddingLeft: '0.20%' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default Title;
