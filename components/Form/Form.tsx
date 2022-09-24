import {
  InputHTMLAttributes,
  FormEvent,
  useState,
  SyntheticEvent,
} from 'react';
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
  formData?: {};
}

const Form = ({
  name,
  length,
  label,
  className,
  register,
  error,
}: FormProps) => {
  
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {};

    Array.from(event.currentTarget.elements).forEach(field => {
      if (!(field as HTMLInputElement).name) return;
      formData[(field as HTMLInputElement).name] = (
        field as HTMLInputElement
      ).value;
    });

    fetch('/api/email', {
      method: 'post',
      body: JSON.stringify(formData),
    });
  };

  return (
    <form method='post' className='container' onSubmit={onSubmit}>
      <FormWrap>
        <div className='form__input'>
          <input type='text' name='name' placeholder='Name' required={true} />
        </div>
        <div className='form__input'>
          <input
            type='text'
            name='phoneNumber'
            placeholder='Phone Number'
            required={true}
          />
        </div>
        <div className='form__input'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            required={true}
          />
        </div>
        <div className='form__input message'>
          <textarea name='Message' placeholder='Message' required={true} />
        </div>
        <Button>Submit</Button>
      </FormWrap>
    </form>
  );
};

export default Form;
