import { WorkSection, InnerContainer, ImageGrid } from './styles';

export default function WorkContainer() {
  return (
    <WorkSection>
      <InnerContainer>
        <div class='staggered_demo'>
          <h2 id='split-stagger'>Award Winning Concepts</h2>
        </div>
        <ImageGrid>
          <div class='parallax-text'>
            <h3>CLIO Grand Award</h3>
            <img
              className='jeep advert'
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660882099/air_one/jeep_edbqxz.svg'
              alt='Jeep Print Ad 2022'
            />
            <div class='flow content'>
              <p>Warner Bros. Pictures</p>
              <p> Medium Theatrical: Innovation</p>
              <p> Entry Type: Theatrical</p>
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
        <ImageGrid>
          <div class='parallax-text'>
            <h3>CLIO Grand Award</h3>
            <img
              className='jeep advert'
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660882099/air_one/mcdonalds_iqljjp.svg'
              alt='Batman Movie 2022'
            />
            <div class='flow content'>
              <p>Warner Bros. Pictures</p>
              <p> Medium Theatrical: Innovation</p>
              <p> Entry Type: Theatrical</p>
            </div>
            <div className='video_cont'>
              <video autoPlay loop muted id='video'>
                <source
                  src='https://res.cloudinary.com/dtwk4dm3g/video/upload/v1660882091/air_one/mcdonalds_d7kwmy.mp4'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
          <div className='image_cont'>
            <video autoPlay loop muted id='video'>
              <source
                src='https://res.cloudinary.com/dtwk4dm3g/video/upload/v1660882091/air_one/mcdonalds_d7kwmy.mp4'
                type='video/mp4'
              />
            </video>
          </div>
          <div className='image_cont'>
            <video autoPlay loop muted id='video'>
              <source
                src='https://res.cloudinary.com/dtwk4dm3g/video/upload/v1660882091/air_one/mcdonalds_d7kwmy.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </ImageGrid>
        <ImageGrid>
          <div class='parallax-text'>
            <h3>CLIO Grand Award</h3>
            <img
              className='batman advert'
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660882099/air_one/batman-2022_uuowgs.svg'
              alt='Batman Movie 2022'
            />
            <div class='flow content'>
              <p>Warner Bros. Pictures</p>
              <p> Medium Theatrical: Innovation</p>
              <p> Entry Type: Theatrical</p>
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
