import styles from "../Contacts.module.css"

const LocationMap = () => {
    return (
        <div className={styles.mapContainer}>
            <h3 className={styles.mapTitle}>Наше местоположение</h3>
            <div className={styles.map}>
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5887551873693!2d37.617564376889766!3d55.75639997346253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1682345678901!5m2!1sru!2sru"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Карта местоположения"
                ></iframe> */}

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38988.925873505105!2d9.919536399999999!3d52.150800399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47baaf1463e5d6c7%3A0x4264df2410d0f341!2sHildesheim%2C%20Germany!5e0!3m2!1sen!2sus!4v1713723654321!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Карта местоположения - Хильдесхайм, Германия"
                ></iframe>
            </div>
        </div>
    )
}

export default LocationMap
