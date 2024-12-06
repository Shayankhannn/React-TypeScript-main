import React, { useState } from 'react';

const Project_FormValidation = () => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [userErr, setUserErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confirmErr, setConfirmErr] = useState('');

  const [userColor, setUserColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [confirmColor, setConfirmColor] = useState('');

  const validate = (e) => {
    e.preventDefault();

    // Username Validation
    if (userName.length > 8) {
      setUserErr('');
      setUserColor('2px solid green');
    } else {
      setUserErr('Username must be at least 8 characters long');
      setUserColor('2px solid #FF0000');
    }

    // Email Validation
    if (userEmail.includes('@gmail.com')) {
      setEmailErr('');
      setEmailColor('2px solid green');
    } else {
      setEmailErr('Email should contain @gmail.com');
      setEmailColor('2px solid #FF0000');
    }

    // Password Validation
    if (userPassword.length > 8) {
      setPasswordErr('');
      setPasswordColor('2px solid green');
    } else {
      setPasswordErr('Password must be at least 8 characters long');
      setPasswordColor('2px solid #FF0000');
    }

    // Confirm Password Validation
    if ( confirmPassword !== '' && userPassword === confirmPassword) {
      setConfirmErr('');
      setConfirmColor('2px solid green');
    } else {
      setConfirmErr('Password and confirm password must be the same');
      setConfirmColor('2px solid #FF0000');
    }
  };

  return (
    <>
      <div className="container" style={{ margin: '70px', backgroundColor: 'grey', padding: '20px 80px' }}>
        <form>
          <input
            type="text"
            placeholder="UserName"
            style={{ borderBottom: userColor }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p>{userErr}</p>

          <input
            type="email"
            placeholder="UserEmail"
            style={{ borderBottom: emailColor }}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <p>{emailErr}</p>

          <input
            type="password"
            placeholder="UserPassword"
            style={{ borderBottom: passwordColor }}
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <p>{passwordErr}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderBottom: confirmColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p>{confirmErr}</p>

          <button onClick={validate}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Project_FormValidation;
