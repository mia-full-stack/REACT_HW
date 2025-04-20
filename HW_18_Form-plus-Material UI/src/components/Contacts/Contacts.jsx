import ContactInfo from "../Contacts/ContactInfo/ContactInfo"
import ContactForm from "../Contacts/ContactForm/ContactForm"
import SocialLinks from "../Contacts/SocialLinks/SocialLinks"
import LocationMap from "../Contacts/LocationMap/LocationMap"
import styles from "./Contacts.module.css"

const Contacts = () => {
    return (
        <section className={styles.contactsSection}>
            <div className={styles.contactsContainer}>
                <h1 className={styles.title}>Контакты</h1>
                <ContactInfo />
                <ContactForm />
            </div>

            <div className={styles.socialContainer}>
                <SocialLinks />
                <LocationMap />
            </div>
        </section>
    )
}

export default Contacts
