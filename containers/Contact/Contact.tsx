import React from 'react';
import Form from '../../components/Form/Form';
import styles from '../../styles/containers/contact.module.css';
import { GridContainer } from './styled';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles['heading']}>
        <div className={styles['header-line']}>
          <h1>{"Let's"}</h1>
        </div>
        <div className={styles['header-line']}>
          <h1>Talk</h1>
        </div>
      </div>
      <div className={styles['flex-cont']}>
        <div className={styles['inner-cont']}>
          <p>
            We take on select projects, working with companies who are inventing
            or reinventing. If there’s a project you’d like to talk to us about,
            please get in touch.
          </p>
        </div>
        <div className={styles['inner-cont']}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
