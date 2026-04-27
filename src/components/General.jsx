import styles from "../styles/General.module.css"

export default function General({info, setInfo, editMode, editToggle}) {
    return(
        <>
            <button onClick={editToggle} >
               {editMode ? "Save" : "Edit"}
            </button>

            {editMode ? ( /* edit mode view */
                <header className={styles.hero}>
                    <input
                        value={info.name}
                        onChange={e => setInfo({ ...info, name: e.target.value })}
                    />

                    <input
                        value={info.title}
                        onChange={e => setInfo({ ...info, title: e.target.value })}
                    />

                    <input
                        value={info.description}
                        onChange={e => setInfo({ ...info, description: e.target.value })}
                    />

                    <input
                        value={info.phone}
                        onChange={e => setInfo({ ...info, phone: e.target.value })}
                    />

                    <input
                        value={info.email}
                        onChange={e => setInfo({ ...info, email: e.target.value })}
                    />
                </header>
            ) : ( /* normal view */
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
        </>
        
    )
}