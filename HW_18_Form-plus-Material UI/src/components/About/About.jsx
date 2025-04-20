import person1 from "../../assets/person1.jpg"

import styles from "./About.module.css"

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <section className={styles.aboutHero}>
                <h1 className={styles.aboutTitle}>О нас</h1>
                <p className={styles.aboutSubtitle}>Узнайте больше о нашей компании и команде</p>
            </section>

            <section className={styles.aboutContent}>
                <div className={styles.aboutInfo}>
                    <h2 className={styles.sectionTitle}>Наша история</h2>
                    <p className={styles.aboutText}>
                        Наша компания была основана в 2010 году с целью предоставления качественных услуг и решений для бизнеса. За
                        годы работы мы накопили богатый опыт и знания, которые позволяют нам успешно решать самые сложные задачи.
                    </p>
                    <p className={styles.aboutText}>
                        Мы постоянно развиваемся и совершенствуем наши услуги, чтобы соответствовать современным требованиям рынка и
                        удовлетворять потребности наших клиентов.
                    </p>
                </div>

                <div className={styles.aboutValues}>
                    <h2 className={styles.sectionTitle}>Наши ценности</h2>
                    <ul className={styles.valuesList}>
                        <li className={styles.valueItem}>
                            <h3 className={styles.valueTitle}>Качество</h3>
                            <p className={styles.valueText}>Мы стремимся к высочайшему качеству во всем, что делаем</p>
                        </li>
                        <li className={styles.valueItem}>
                            <h3 className={styles.valueTitle}>Инновации</h3>
                            <p className={styles.valueText}>Мы постоянно ищем новые подходы и решения</p>
                        </li>
                        <li className={styles.valueItem}>
                            <h3 className={styles.valueTitle}>Клиентоориентированность</h3>
                            <p className={styles.valueText}>Интересы и потребности клиента всегда на первом месте</p>
                        </li>
                        <li className={styles.valueItem}>
                            <h3 className={styles.valueTitle}>Командная работа</h3>
                            <p className={styles.valueText}>Мы ценим вклад каждого члена команды</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.teamSection}>
                <h2 className={styles.sectionTitle}>Наша команда</h2>
                <div className={styles.teamGrid}>
                    <div className={styles.teamMember}>
                        <div className={styles.memberPhoto}>
                        <img src={person1 || "/placeholder.svg"} alt="Иван Иванов" className={styles.memberPhoto} />
                        </div>
                        <h3 className={styles.memberName}>Иван Иванов</h3>
                        <p className={styles.memberPosition}>Генеральный директор</p>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberPhoto}>
                        <img src={person1 || "/placeholder.svg"} alt="Иван Иванов" className={styles.memberPhoto} />
                        </div>
                        <h3 className={styles.memberName}>Мария Петрова</h3>
                        <p className={styles.memberPosition}>Руководитель отдела продаж</p>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberPhoto}><img src={person1 || "/placeholder.svg"} alt="Иван Иванов" className={styles.memberPhoto} /></div>
                        <h3 className={styles.memberName}>Алексей Сидоров</h3>
                        <p className={styles.memberPosition}>Технический директор</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
