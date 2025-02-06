import { useState } from 'react';

export default function Contact() {
    
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
  
      // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
      return name === 'userName' ? setUserName(value) : setUserEmail(value);
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // Alert the user their name, clear the inputs
      alert(`Thank you ${userName}!`);
      setUserName('');
      setUserEmail ('');
      setUserMessage('');
    };

  return (
      <div className="container text-center">
      <h1>
        Hello {userName}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={userEmail}
          name="userEmail"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={userMessage}
          name="userMessage"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
  }