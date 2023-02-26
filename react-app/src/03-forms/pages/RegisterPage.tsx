import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from '../hooks';

import '../styles/styles.css';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    rePassword,
    formData,
    onChange,
    reset,
    isValidEmail,
  } = useForm<RegisterForm>({
    email: '',
    name: '',
    password: '',
    rePassword: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form onSubmit={onSubmit} noValidate>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>El correo no es valido</span>}

        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length <= 0 && password.trim().length >= 6 && (
          <span>El password debe contener al menos 6 caracteres</span>
        )}

        <input
          type='password'
          placeholder='Repeat Password'
          name='rePassword'
          value={rePassword}
          onChange={onChange}
        />
        {rePassword.trim().length <= 0 && <span>Este campo es necesario</span>}
        {rePassword.trim().length > 0 && rePassword.trim().length <= 6 && (
          <span>El password debe contener al menos 6 caracteres</span>
        )}
        {rePassword !== password && <span>Las contraseñas no coinciden</span>}

        <button type='submit'>Create</button>
        <button type='button' onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};
