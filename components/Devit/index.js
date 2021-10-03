import styles from './devtweet.module.css'
import Avatar from "../Avatar";

export default function Devit({ avatar, username, message, id }) {
    return (
        <>
            <article className={styles.article}>
                <div className={styles.div}>
                    <Avatar alt={username} src={avatar} />
                </div>
                <section>
                    <strong>{username}</strong>
                    <p className={styles.p}>{message}</p>
                </section>
            </article>
        </>
    )
}
