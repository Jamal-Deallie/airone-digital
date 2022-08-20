import { InnerContainer, Section } from './styles';
import { ContactForm } from '../../Components';

export default function ContactContainer() {
  return (
    <Section>
      <InnerContainer>
        <h2 className='gradient-subheader'>Contact Us</h2>
        <ContactForm />
      </InnerContainer>
    </Section>
  );
}
