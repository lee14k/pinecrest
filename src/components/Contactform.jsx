import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    // here you would send the form data to your server
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={form.name}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={form.email}
          required
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          onChange={handleInputChange}
          value={form.message}
          required
        ></textarea>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ContactForm;
