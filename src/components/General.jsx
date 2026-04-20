import styles from "../styles/General.module.css"

export default function General({info, setInfo}) {
    return(
        <header className={styles.hero}>
            <div className={styles.header}>
                <h2>{info.name} | {info.title}</h2>
            </div>

            <hr className={styles.divider} />

            <p className={styles.description}>{info.description}</p>

            <address className={styles.contact}>
                <div className={styles.contactItem}>
                    <img className={styles.icon} alt="phone icon" />
                    <span>{info.phone}</span>
                </div>

                <div className={styles.contactItem}>
                    <img className={styles.icon} alt="email icon" />
                    <span>{info.email}</span>
                </div>
            </address>
        </header>
    )
}