//@ts-nocheck
import { ReactNode, useRef, useLayoutEffect, useEffect } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import Image from 'next/image';
import data from '../shared/team.json';
import styles from '@/styles/containers/teams.module.scss';
gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {};

function TeamMembers({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.heading}>
          <h1 id='heading'>THE</h1>
          <h1 id='heading'>Team</h1>
        </div>
        <div className={styles.desc}>
          <p className='fullscreen' id='splitBody'>
            Sit nemo veniam ut repudiandae quos aut quas voluptas sit repellat
            sint et unde reiciendis sed consequatur aspernatur est sint
            incidunt. Aut iure vitae eos cupiditate doloremque qui magni quia
            sit minus internos.
          </p>
        </div>

        <div className={styles.flex}>
          <div className={styles.wrap}>
            <Image
              className={styles.img}
              src={
                'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1667602983/air_one/team_makqiq.webp'
              }
              alt={''}
              layout='fill'
              objectFit='contain'
              quality={100}
            />
          </div>
          <div className={styles.content}>
            <h3>Our Beliefs</h3>
            <p>
              Sit nemo veniam ut repudiandae quos aut quas voluptas sit repellat
              sint et unde reiciendis sed consequatur aspernatur est sint
              incidunt. Aut iure vitae eos cupiditate doloremque qui magni quia
              sit minus internos.
            </p>
          </div>
        </div>

        <div className={styles.flex}>
          <div className={styles.content}>
            <h3>Our Space</h3>
            <p>
              Sit nemo veniam ut repudiandae quos aut quas voluptas sit repellat
              sint et unde reiciendis sed consequatur aspernatur est sint
              incidunt. Aut iure vitae eos cupiditate doloremque qui magni quia
              sit minus internos.
            </p>
          </div>
          <div className={styles.wrap}>
            <div className={styles.box}>
              <Image
                className={styles.img}
                src={
                  'https://res.cloudinary.com/dtwk4dm3g/image/upload/c_scale,w_879/v1667611285/air_one/team_nf9xuk.webp'
                }
                alt={''}
                layout='fill'
                objectFit='contain'
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className={styles.teams}>
          {data.map(({ id, image, name, title }) => {
            return (
              <div key={id} className={styles.col}>
                <div className={styles.wrap}>
                  <p>{name}</p>

                  <p>{title}</p>

                  <div className={styles.line}></div>
                  <div className={styles.box}>
                    <Image
                      alt='brand-identity'
                      src={image}
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
      </div>
    </div>
  );
}

export default TeamMembers;
