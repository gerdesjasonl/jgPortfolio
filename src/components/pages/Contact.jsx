import { useState } from 'react';

export default function Contact() {
    
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [error, setError] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
  
      // Ternary statement that will call either userNmame or userEmail based on what field the user is typing in
      return name === 'userName' ? setUserName(value) : setUserEmail(value);
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      // This will check for email format.
      if (!userEmail.includes("@")) {
        alert("Invalid Email");
      } else {
        alert(`Thank you ${userName}!`);
        setUserName('');
        setUserEmail ('');
        setUserMessage('');
      };
      
    };
    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
      margin: 'auto',
    };
    const inputStyleA = {
      backgroundColor: 'white',
      color: 'black',
      fontSize: 30,
      padding: '10px',
    };
    const inputStyleB = {
      backgroundColor: 'white',
      color: 'black',
      fontSize: 30,
      padding: '10px',
      height: '150px',
    }
  return (
      <div className="container text-center">
      <h1>
        Hello {userName}
      </h1>
      <form className="form" onSubmit={handleFormSubmit} style={formStyle}>
        <input style={inputStyleA}
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input style={inputStyleA}
          value={userEmail}
          name="userEmail"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input style={inputStyleB}
          value={userMessage}
          name="userMessage"
          onChange={(e) => setUserMessage(e.target.value)}
          required
          type="text"
          placeholder="Message"
        />
        <button type="submit" style={{backgroundColor: 'blue', color: 'white', fontSize: 20}}>
          Submit
        </button>
      </form>
    </div>
  );
  }