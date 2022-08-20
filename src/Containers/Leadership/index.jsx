import { Section, InnerContainer } from './styles';

export default function LeadershipContainer() {
  return (
    <Section>
      <InnerContainer>
        <div>
          <h2 className='outline'>CEO</h2>
          <img
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660881714/air_one/chester-wade-msnyz9L6gs4-unsplash_povfbr.webp'
            alt=''
          />
        </div>
        <div>
          <h2 className='outline'>COO</h2>
          <img
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660881714/air_one/tan-kaninthanond-_NUSd1BNhdc-unsplash_qr0lyu.webp'
            alt=''
          />
        </div>
        <div>
          <h2 className='outline'>VP</h2>
          <img
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660881713/air_one/adam-flockemann-MDfgzi5iN3g-unsplash_h9x1wx.webp'
            alt=''
          />
        </div>
      </InnerContainer>
    </Section>
  );
}
