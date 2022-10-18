import styles from '../../styles/services.module.css';
import Creative from '../../svgs/Creative';
import Web from '../../svgs/Web';
import Strategy from '../../svgs/Strategy';
import Brand from '../../svgs/Brand';

type Props = {};

function Services({}: Props) {
  return (
    <div className='container'>
      <div className={styles['heading-cont']}>
        <div className='lrg-fz'>
          <h1>Our</h1>
        </div>
        <div className='lrg-fz'>
          <h1>Services</h1>
        </div>
      </div>
      <div className={styles.desc}>
        <p>
          Sit nemo veniam ut repudiandae quos aut quas voluptas sit repellat
          sint et unde reiciendis sed consequatur aspernatur est sint incidunt.
          Aut iure vitae eos cupiditate doloremque qui magni quia sit minus
          internos.
        </p>
      </div>

      <div className={styles['outer-cont']}>
        <div className={styles['grid-cont']}>
          <div className={styles['grid-inner']}>
            <Creative newHeight={35} />
            <div className='width-mxc'>
              <h3 className={styles.subheader}>Creative</h3>
            </div>

            <div>
              <div className={styles.line} id='line'></div>
              <p>UI & UX • Web Design • Print Design • Consulting</p>
            </div>
          </div>
          <div className={styles['grid-inner']}>
            <Brand newWidth={35} />
            <div className='width-mxc'>
              <h3 className={styles.subheader}>Brand</h3>
            </div>
            <div>
              <div className={styles.line} id='line'></div>
              <p>
                Logo & Identity • Visual language • Guidelines Design Systems
              </p>
            </div>
          </div>
          <div className={styles['grid-inner']}>
            <Strategy newHeight={35} />
            <div className='width-mxc'>
              <h3 className={styles.subheader}>Strategy</h3>
            </div>
            <div>
              <div className={styles.line} id='line'></div>
              <p>
                Social Media • Inbound Marketing • Copywriting • Visual Content
                • Campaigns
              </p>
            </div>
          </div>
          <div className={styles['grid-inner']}>
            <Web newHeight={35} />
            <div>
              <h3 className={styles.subheader}>Web</h3>
            </div>
            <div>
              <div className={styles.line} id='line'></div>
              <p>
                Front End • Back End • Bespoke Integrations • Ecommerce • CMS •
                Spektrix
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
