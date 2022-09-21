import React from 'react';
import Form from '../../components/Form/Form';
import BodyText from '../../components/BodyText/BodyText';
import { GridContainer } from './styled';

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <section className='section bg-primary'>
      <div className='container'>
        <GridContainer>
          <div className='contact__cont'>
            <BodyText fontSize='1.953rem'>
              We take on select projects, working with companies who are
              inventing or reinventing. If there’s a project you’d like to talk
              to us about, please get in touch.
            </BodyText>
          </div>
          <div className='contact__cont'>
            <Form />
          </div>
        </GridContainer>
      </div>
    </section>
  );
};

export default ContactForm;
