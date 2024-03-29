import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';
import './Registro.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Registro = () => {
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');   
    
    const handleFormSubmit = (formData) => {
      const { nombre, email, password, confirmPassword } = formData;
  
      if (!nombre.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
        setAlertMessage('Todos los campos son obligatorios.');
        setAlertType('danger');
        return; 
      }
  
      
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        setAlertMessage('Por favor ingresa un email válido.');
        setAlertType('danger');
        return; 
      }
  
     
      if (password !== confirmPassword) {
        setAlertMessage('Las contraseñas no coinciden.');
        setAlertType('danger');
        return; 
      }
  
      
      setAlertMessage('Registro exitoso. ¡Bienvenido!');
      setAlertType('success');
      
    
    };
  
  
    return (
    
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 fondo-container">
              <h1 className="text-center mb-3">Crea una cuenta</h1>
              <div className="text-center mb-3">
              <SocialButton icon="facebook" />
              <SocialButton icon="github" />
              <SocialButton icon="linkedin" />
              <h6 className="text-center mb-3 mt-3">O usa tu email para registrarte</h6>
              </div>
              <Formulario onSubmit={handleFormSubmit} />
              
              <Alert message={alertMessage} type={alertType} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registro;