import { useState } from "react";

export function App() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }
  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <p>Current value is: {formValues.name}</p>
      <p>Current value is: {formValues.email}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
