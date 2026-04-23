import styles from "../styles/Education.module.css";

export default function Education({info, setInfo}) {
    return(
        <section className={styles.educationSection}>
        <h2 className={styles.title}>Education</h2>

        <div className={styles.educationList}>
            {info.map((item, index) => (
            <div key={index} className={styles.card}>
                <div className={styles.header}>
                <h3 className={styles.school}>{item.school}</h3>
                <span className={styles.date}> ( {item.date} ) </span>
                </div>

                <p className={styles.degree}>{item.title}</p>

                <ul className={styles.details}>
                {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </section>
    );
}