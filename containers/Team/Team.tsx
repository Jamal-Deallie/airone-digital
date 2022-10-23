import Image from 'next/image';
import data from '../../shared/team.json';
import styles from '@/styles/teams.module.css';

type Props = {};

function TeamMembers({}: Props) {
  return (
    <div className='primary-bg'>
      <div className='container'>
        <div>
          <h1 className={styles.heading}>THE</h1>
          <h1 className={styles.heading}>Team</h1>
        </div>
        <div className={styles.inner}>
          {data.map(({ id, image, name, title }) => {
            return (
              <div key={id} className={styles.col}>
                <p className={styles.name}>{name}</p>

                <p className={styles.title}>{title}</p>

                <div className={styles.line}></div>
                <div className={styles['lead-img']}>
                  <Image
                    alt='brand-identity'
                    src={image}
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles['bot-cont']}>
          <div className={styles['text-wrap']}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Molestie nunc non blandit massa enim nec dui nunc. Tincidunt dui
              ut ornare lectus sit amet. Ullamcorper eget nulla facilisi etiam
              dignissim diam. Et magnis dis parturient montes nascetur
              ridiculus.
            </p>
          </div>
          <div className={styles['img-wrap']}>
            <div className={styles['img-cont']}>
              <Image
                className={styles.img}
                src={'/images/team.png'}
                alt={''}
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>

          <div className={styles['flx-bot']}>
            <h3>The Airone Team</h3>

            <div className={styles['desc-wrap']}>
              <p>
                Amet nisl purus in mollis nunc sed id semper. Hendrerit gravida
                rutrum quisque non. Vel quam elementum pulvinar etiam non quam
                lacus. Pellentesque habitant morbi tristique senectus. Auctor
                augue mauris augue neque gravida in fermentum et sollicitudin.
                Sapien eget mi proin sed libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
