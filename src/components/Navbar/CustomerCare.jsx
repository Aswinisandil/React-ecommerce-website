import React, { useState } from 'react';
import css from "./Login/CustomerCare.module.css"

const CustomerCare = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the logic to send the message to customer care
    // You can use APIs or any other means to send the message
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className={css.container}>
      <h2>Customer Care</h2>
      <form onSubmit={handleSubmit} className={css.message}>
        <label htmlFor='email'>Email Id</label>
        <input className={css.email} type='type' name='email' placeholder='Enter email Id' required />
        <label htmlFor="message" ><h5>Message:</h5></label>
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="50"
          value={message}
          onChange={handleChange}
          required
          placeholder='Enter Query'
          className={css.text}
        ></textarea>
        <p><i>Our team usually will contact you within 24hrs.</i></p>
        <br />
        <button type="submit" className={css.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default CustomerCare;
