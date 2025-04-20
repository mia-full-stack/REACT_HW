import styles from "../Contacts.module.css"

const ContactInfo = () => {
    const contactDetails = [
        { label: "Телефон", value: "+49 (175) 414-54-31" },
        { label: "Email", value: "mia@gmail.com" },
        { label: "Адрес", value: "Hildesheim, Bahnhof, 1" },
        { label: "Часы работы", value: "Mo-Fr: 9:00 - 18:00" },
    ]

    return (
        <ul className={styles.contactsList}>
            {contactDetails.map((contact, index) => (
                <li key={index} className={styles.contactItem}>
                    <span className={styles.contactLabel}>{contact.label}:</span> {contact.value}
                </li>
            ))}
        </ul>
    )
}

export default ContactInfo
