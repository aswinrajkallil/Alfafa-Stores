import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Contact Us', url: '/contact' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your feedback has been sent.');
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <article>
      <div className="title">
        <Breadcrumb items={breadcrumbs} isPath={true} />

        <div className="w50 fl">
          <h1>
            <span>Contact Us</span>
          </h1>
          <p>
            <span>Some contact information will be here.</span>
          </p>
        </div>

        <div className="w50 fr">
          <h2>Feedback form</h2>
          <form onSubmit={handleSubmit}>
            <div className="w50 fl">
              <div className="par">
                Full name<br />
                <input
                  type="text"
                  className="field"
                  required
                  tabIndex={1}
                  name="firstname"
                  placeholder=""
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>

              <div className="par">
                Last name<br />
                <input
                  type="text"
                  className="field"
                  required
                  tabIndex={2}
                  name="lastname"
                  placeholder=""
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>

              <div className="par">
                Please share your email address<br />
                <input
                  type="text"
                  className="field"
                  required
                  tabIndex={3}
                  name="email"
                  placeholder=""
                  pattern="[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{1,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="par">
                Contact phone<br />
                <input
                  type="text"
                  className="field"
                  required
                  tabIndex={4}
                  name="phone"
                  placeholder=""
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w50 fr">
              <div className="par">
                Write message<br />
                <textarea
                  name="message"
                  className="field"
                  tabIndex={5}
                  required
                  rows={12}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="par cl ac">
              <input type="hidden" name="send" value="" id="signs" />
              <input
                type="submit"
                tabIndex={7}
                value="Submit"
                className="btn orange"
              />
            </div>
          </form>
        </div>

        <div className="cl">
          <br />
        </div>
      </div>
    </article>
  );
}
