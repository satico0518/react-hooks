import React from 'react';
import '../counter.css';
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {
  const { formState: form, handleInputChange } = useForm({
    name: '',
    email: '',
    password: '',
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(form);
      }}
    >
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
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          value={form.password}
          onChange={handleInputChange}
        />
      </div>
      <input className="btn btn-success btn-block" type="submit" value="Send" />
    </form>
  );
};

export default FormWithCustomHook;
