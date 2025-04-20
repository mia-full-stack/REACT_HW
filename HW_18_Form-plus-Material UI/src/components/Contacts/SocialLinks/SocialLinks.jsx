import snapchatLogo from "../../../assets/snapchat.png"
import facebookLogo from "../../../assets/facebook.png"
import instagramLogo from "../../../assets/instagram.png"
import telegramLogo from "../../../assets/telegram.png"
import styles from "../Contacts.module.css"

const SocialLinks = () => {
    const socialNetworks = [
        { name: "Snapchat", url: "https://snapchat.com", logo: snapchatLogo },
        { name: "Facebook", url: "https://facebook.com", logo: facebookLogo },
        { name: "Instagram", url: "https://instagram.com", logo: instagramLogo },
        { name: "Telegram", url: "https://t.me/example", logo: telegramLogo },
    ]

    return (
        <>
            <p className={styles.socialText}>Найдите нас на:</p>
            <div className={styles.socialLinks}>
                {socialNetworks.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <img src={social.logo || "/placeholder.svg"} alt={social.name} className={styles.socialIcon} />
                    </a>
                ))}
            </div>
        </>
    )
}

export default SocialLinks
