import React, { useState } from "react";

function Form() {
  const [newsletter, setNewsletter] = useState(false);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  
  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
  }


  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <form>
       <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        
        checked={newsletter}
      />
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
