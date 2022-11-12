import { useState, useRef, useEffect, ReactNode } from 'react';
import styles from '@/styles/containers/showreel.module.scss';
import { AdvancedVideo, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,
  },
});

const Showreel = () => {
  const myVideo = cld.video('air_one/showreel_glra7k');

  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <AdvancedVideo cldVid={myVideo} autoPlay muted plugins={[lazyload()]} />
      </div>
    </div>
  );
};

export default Showreel;
