import { InputHTMLAttributes, FormEvent, useState } from 'react';
import { FormWrap } from './styled';
import Button from '../Button/Button';

interface FormProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  className?: string;
  length?: number;
}

const onSubmit = (e: FormEvent) => {
  e.preventDefault(); // Prevent the redirect
};

const Form = ({
  name,
  length,
  label,
  className,
  register,
  error,
}: FormProps) => {
  return (
    <form action='#' method='post' onSubmit={onSubmit} className='container'>
      <FormWrap>
        <div className='form__input'>
          {/* {label && <label htmlFor={name}>{label}</label>}
      <input
        aria-invalid={error ? "true" : "false"}
        {...register(name)}
        {...rest}
      />
      {error && <span role="alert">{error}</span>} */}
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            required={true}
          />
        </div>
        <div className='form__input'>
          <input
            type='text'
            name='phoneNumber'
            id='phoneNumber'
            placeholder='Phone Number'
            required={true}
          />
        </div>
        <div className='form__input'>
          <input
            type='email'
            name=''
            id='email'
            placeholder='Email'
            required={true}
          />
        </div>
        <div className='form__input'>
          <input
            type='text'
            name=''
            id='name'
            placeholder='name'
            required={true}
          />
        </div>
        <div className='form__input message'>
          <textarea
            id='Message'
            name='Message'
            placeholder='Message'
            required={true}
          />
        </div>
        <Button>Submit</Button>
      </FormWrap>
    </form>
  );
};

export default Form;
