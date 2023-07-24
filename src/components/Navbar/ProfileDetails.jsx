import React,{useState} from "react";
import css from "./ProfileDetails.module.css";

const ProfileDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const userData = localStorage.getItem("userDetails");
  const isAuthenticated = localStorage.getItem("loggedIn");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Mobile Number:", mobileNumber);
  };
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
      <h3 className={css.header}>User profile form</h3>
        <div className={css.formInp}>
          <label htmlFor="firstName">First Name:</label>
          <input
            className={css.input}
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={css.formInp}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            className={css.input}
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={css.formInp}>
          <label htmlFor="email">Email:</label>
          <input
            className={css.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={css.formInp}>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            className={css.input}
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className={css.formInp}>
          <label htmlFor="Address"><h5>Address:</h5></label>
          </div>

          <div className={css.formInp}>
          <label htmlFor="Address">Lane:1</label>
          <input
            className={css.input}
            type="text"
            id="lane1"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          </div>
           <div className={css.formInp}>
          <label htmlFor="Address">Lane:2</label>
          <input
            className={css.input}
            type="text"
            id="lane2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={css.formInp}>
          <label htmlFor="lastName">City/Town:</label>
          <input
            className={css.input}
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={css.formInp}>
          <label htmlFor="lastName">Pincode:</label>
          <input
            className={css.input}
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit" className={css.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default ProfileDetails;
