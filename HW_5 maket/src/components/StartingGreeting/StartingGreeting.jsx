import MediaLogos from '../MediaLogos/MediaLogos';

import styles from './StartingGreeting.module.css';

const StartingGreeting = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
                <div className={styles.content}>
                    <p className={styles.text_content}>Sign in</p>
                    <p className={styles.text_content}>with</p>
                </div>
                <MediaLogos />
            </div>
        </section>
    )
};

export default StartingGreeting;