import { GoogleIcon, XIcon, MacIcon } from '../../assets/icons/mediaLogoIcons';

import styles from './MediaLogos.module.css';

const MediaLogos = () => {
    return (
        <div className={styles.logo_container}>
            <MacIcon className={styles.logo} />
            <GoogleIcon className={styles.logo} />
            <XIcon className={styles.logo} />
        </div>
    )
};

export default MediaLogos;