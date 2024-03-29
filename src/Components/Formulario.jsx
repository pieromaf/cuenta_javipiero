import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded shadow">
      <div className="mb-3">
        <input type="text" name="nombre" className="form-control" placeholder="Nombre" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <input type="password" name="password" className="form-control" placeholder="Contraseña" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <input type="password" name="confirmPassword" className="form-control" placeholder="Confirmar Contraseña" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-success w-100">Registrarse</button>
    </form>
  );
};

export default Formulario;
