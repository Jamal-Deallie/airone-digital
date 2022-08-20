import { WorkSection, InnerContainer, ImageGrid, VideoGrid } from './styles';

export default function AwardsContainer() {
  return (
    <WorkSection>
      <InnerContainer>
        <div className='staggered_demo'>
          <h2 id='split-stagger'>Award Winning Concepts</h2>
        </div>
        <ImageGrid>
          <div className='parallax-text'>
            <h3>D&AD Awards</h3>
            <img
              className='jeep logo'
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660882099/air_one/jeep_edbqxz.svg'
              alt='Jeep Print Ad 2022'
            />
            <div className='flow content'>
              <p>Stellantis - Jeep</p>
              <p>Category: Campaign Branding</p>
              <p>Category: Print Advertising</p>
            </div>
          </div>
          <div className='image_cont'>
            <img
              data-speed='auto'
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660882292/air_one/jeep_fnxtnu.webp'
              alt=''
            />
          </div>
        </ImageGrid>
        <VideoGrid>
          <div className='parallax-text'>
            <h3>Webby Award</h3>
            <img
              className='mcdonalds logo'
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660882099/air_one/mcdonalds_iqljjp.svg'
              alt='Batman Movie 2022'
            />
            <div className='flow content'>
              <p>McDonald's Corporation</p>
              <p>Best Art Direction</p>
              <p>Category: Commercial Advertising</p>
            </div>
          </div>
          <div className='video_cont'>
            <video autoPlay loop muted id='video'>
              <source
                src='https://res.cloudinary.com/dtwk4dm3g/video/upload/v1660882091/air_one/mcdonalds_d7kwmy.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </VideoGrid>
        <ImageGrid>
          <div className='parallax-text'>
            <h3>CLIO Grand Award</h3>
            <img
              className='batman logo'
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660882099/air_one/batman-2022_uuowgs.svg'
              alt='Batman Movie 2022'
            />
            <div className='flow content'>
              <p>Warner Bros. Pictures</p>
              <p>Theatrical Innovation</p>
              <p>Category: Theatrical Advertising</p>
            </div>
          </div>
          <div className='image_cont'>
            <img
              data-speed='auto'
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660882061/air_one/batman-2022_fgy6hd.webp'
              alt=''
            />
          </div>
        </ImageGrid>
      </InnerContainer>
    </WorkSection>
  );
}
