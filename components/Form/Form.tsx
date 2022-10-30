import { useEffect } from 'react';
import Button from '../Button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '@/styles/form.module.css';

// interface FormProps extends InputHTMLAttributes<HTMLInputElement> {
//   name?: string;
//   label?: string;
//   error?: string;
//   register?: any;
//   wrapperClass?: string;
//   className?: string;
//   length?: number;
//   formData?: {};
// }

type FormProps = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormProps> = data => {
    fetch('/api/email', {
      method: 'post',
      body: JSON.stringify(data),
    });
    reset();
  };

  return (
    <form method='post' onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.grid}>
        <div>
          <div className={styles.input}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              {...register('name')}
            />
          </div>
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
        <div>
          <div className={styles.input}>
            <input
              type='text'
              name='phoneNumber'
              placeholder='Phone Number'
              {...register('phoneNumber')}
            />
          </div>
          {errors.phoneNumber && (
            <p className={styles.error}>{errors.phoneNumber.message}</p>
          )}
        </div>
        <div>
          <div className={styles.input}>
            <input
              type='email'
              name='email'
              placeholder='Email'
              {...register('email')}
            />
          </div>
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <div className={styles.input}>
            <textarea
              name='Message'
              placeholder='Message'
              {...register('message')}
            />
          </div>
          {errors.message && (
            <p className={styles.error}>{errors.message.message}</p>
          )}
        </div>
        <input type='button' value='Submit' className='btn-primary' />
      </div>
    </form>
  );
};

export default Form;
