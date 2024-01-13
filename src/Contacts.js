import React, { useState } from 'react';
import './Contacts.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here (you can add code to send it to an API, for example)
    console.log('Form submitted:', formData);
    // Clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleMailtoClick = () => {
    const { name, email, message } = formData;
    const subject = 'New Contact Form Submission';
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const mailtoLink = `mailto:acb.tech2023@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client with the pre-filled email
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p>Email: <a href="mailto:acb.tech2023@gmail.com">acb.tech2023@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/andreia-byda">https://www.linkedin.com/in/andreia-byda</a></p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Get in Touch</h3>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6} // Adjust the number of rows as needed
              cols={30} // Adjust the number of columns as needed
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button" onClick={handleMailtoClick}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

