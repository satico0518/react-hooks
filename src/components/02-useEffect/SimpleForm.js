import React, { useState, useEffect } from 'react';
import '../counter.css';
import Message from './Message';

const SimpleForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });
  useEffect(() => {});
  const handleInputChange = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });
  return (
    <div>
      <h1>Use Effect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          value={form.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          value={form.email}
          onChange={handleInputChange}
        />
      </div>
      <input className="btn btn-success btn-block" type="submit" value="Send" />
      {form.name === '123' && <Message />}
    </div>
  );
};

export default SimpleForm;
