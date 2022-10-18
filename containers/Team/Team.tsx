import Image from 'next/image';
import data from '../../shared/team.json';
import StarOne from '../../svgs/StarOne';
import StarTwo from '../../svgs/StarOne';
import StarDiamond from '../../svgs/StarDiamond';
import StarCircle from '../../svgs/StarCircle';
import styles from '../../styles/teams.module.css';

type Props = {};

function TeamMembers({}: Props) {
  return (
    <div className='container primary-bg'>
      <div className='header-cont'>
        <div className='team__header'>
          <p className={styles.subheader}>
            The nice thing about teamwork is that you always have others…
          </p>
          <div className='header-inner'>
            <div className={styles['star-wrap']}>
              <div className={styles['star-top']}>
                <StarOne newHeight={25} />
              </div>
              <div className={styles['star-top']}>
                <StarCircle newHeight={15} />
              </div>
              <h2 className={styles['heading-sm']}>ON</h2>
            </div>
          </div>

          <div className='txt-ctr'>
            <h2 className='lrg-fz'>YOUR</h2>
          </div>

          <div className={styles['heading-wrap']}>
            <h1 className={styles['heading-lrg']}>SIDE</h1>

            <div className={styles['star-bot']}>
              <div className={styles['star-bot-star']}>
                <StarOne newHeight={25} />
              </div>
              <div className={styles['star-bot-star']}>
                <StarTwo newHeight={25} />
              </div>
              <div className={styles['star-bot-star']}>
                <StarCircle newHeight={15} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={styles['grid-cont']}>
          {data.map(d => {
            const { id, desc, name, image, reverse } = d;
            return (
              <div key={id}>
                <div className='txt-rt'>
                  <h3 className={styles.name}>First</h3>
                  <h3 className={styles.name}>Last</h3>
                  <p>Title</p>
                </div>
                <div className={styles['img-wrap']}>
                  <div className={styles['img-cont']}>
                    <Image
                      className={styles.img}
                      src={image}
                      alt={name}
                      layout='fill'
                      objectFit='cover'
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='mt txt-ctr'>
          <p className={styles.subheader}>
            We are always looking for talented and driven people to join our
            growing team. If interested, contact us.
          </p>
          <div className='width-mxc m-inline flx'>
            <div className={styles.star}>
              <StarDiamond newHeight={27} />
            </div>
            <h1 className={styles.email}>HR@AIRONE.COM</h1>
            <div className={styles.star}>
              <StarOne newHeight={25} />
            </div>
          </div>
          <p className={styles.subheader}>Get in touch and send your resume</p>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
