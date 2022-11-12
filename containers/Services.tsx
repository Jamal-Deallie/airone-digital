import styles from '@/styles/containers/services.module.scss';
import Creative from '@/svgs/Creative';
import Web from '@/svgs/Web';
import Strategy from '@/svgs/Strategy';
import Brand from '@/svgs/Brand';
import Analytics from '@/svgs/Analytics';
import Support from '@/svgs/Support';
import Batch from '@/animations/Batch';
import Heading from '@/animations/HeadingLeft';

function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <Heading>
            <div className={styles.heading}>
              <h1 id='heading'>Our</h1>
              <h1 id='heading'>Services</h1>
            </div>
            <div className={styles.desc}>
              <p className='fullscreen' id='desc'>
                Sit nemo veniam ut repudiandae quos aut quas voluptas sit
                repellat sint et unde reiciendis sed consequatur aspernatur est
                sint incidunt. Aut iure vitae eos cupiditate doloremque qui
                magni quia sit minus internos.
              </p>
            </div>
          </Heading>

          <div className={styles['outer-cont']}>
            <Batch>
              <div className={styles['grid-cont']}>
                <div className={styles['grid-inner']} id='batch-wrap'>
                  <Creative newHeight={35} />
                  <div className='width-mxc'>
                    <h3 className={styles.subheader}>Creative</h3>
                  </div>

                  <div>
                    <div className={styles.line} id='line'></div>
                    <p>UI & UX • Web Design • Print Design • Consulting</p>
                  </div>
                </div>
                <div className={styles['grid-inner']} id='batch-wrap'>
                  <Brand newWidth={35} />
                  <div className='width-mxc'>
                    <h3 className={styles.subheader}>Brand</h3>
                  </div>
                  <div>
                    <div className={styles.line} id='line'></div>
                    <p>
                      Logo & Identity • Visual language • Guidelines Design
                      Systems
                    </p>
                  </div>
                </div>
                <div className={styles['grid-inner']} id='batch-wrap'>
                  <Strategy newHeight={35} />
                  <div className='width-mxc'>
                    <h3 className={styles.subheader}>Strategy</h3>
                  </div>
                  <div>
                    <div className={styles.line} id='line'></div>
                    <p>
                      Social Media • Inbound Marketing • Copywriting • Visual
                      Content • Campaigns
                    </p>
                  </div>
                </div>
                <div className={styles['grid-inner']} id='batch-wrap'>
                  <Web newHeight={35} />
                  <div>
                    <h3 className={styles.subheader}>Web</h3>
                  </div>
                  <div>
                    <div className={styles.line} id='line'></div>
                    <p>
                      Front End • Back End • Bespoke Integrations • Ecommerce •
                      CMS • Spektrix
                    </p>
                  </div>
                </div>

                <div className={styles['grid-inner']} id='batch-wrap'>
                  <Analytics newHeight={35} />
                  <div>
                    <h3 className={styles.subheader}>Analytics</h3>
                  </div>
                  <div>
                    <div className={styles.line} id='line'></div>
                    <p>
                      Front End • Back End • Bespoke Integrations • Ecommerce •
                      CMS • Spektrix
                    </p>
                  </div>
                </div>
                <div className={styles['grid-inner']} id='batch-wrap'>
                  <Support newHeight={35} />
                  <div>
                    <h3 className={styles.subheader}>Support</h3>
                  </div>
                  <div>
                    <div className={styles.line} id='line'></div>
                    <p>
                      Front End • Back End • Bespoke Integrations • Ecommerce •
                      CMS • Spektrix
                    </p>
                  </div>
                </div>
              </div>
            </Batch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
