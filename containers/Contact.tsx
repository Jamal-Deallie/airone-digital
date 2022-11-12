import React from 'react';
import Form from '../components/Form';
import styles from '@/styles/containers/contact.module.scss';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <div>
              <h1>{"Let's"}</h1>
            </div>
            <div>
              <h1>Talk</h1>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.col}>
              <p>
                We take on select projects, working with companies who are
                inventing or reinventing. If there’s a project you’d like to
                talk to us about, please get in touch.
              </p>
            </div>
            <div className={styles.col}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
