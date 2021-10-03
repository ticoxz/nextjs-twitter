import AppLayout from '../../components/AppLayout'
import { useState, useEffect } from 'react'
import styles from './home.module.css'
import Devit from '../../components/Devit'
import useUser from '../../hooks/useUser'
export default function HomePage() {
    const [timeline, setTimeline] = useState([])
    const user = useUser()

    useEffect(() => {
        user && fetch('http://localhost:3000/api/statuses/home_timeline')
            .then((res) => res.json())
            .then(setTimeline)

    }, [user])

    return (
        <>
            <AppLayout>
                <header className={styles.header}>
                    <h2 className={styles.h2}>Inicio</h2>
                </header>
                <section className={styles.section}>
                    {timeline.map(({ id, username, avatar, message }) => (
                        <Devit
                            avatar={avatar}
                            id={id}
                            key={id}
                            message={message}
                            username={username}
                        />
                    ))}
                </section>

                <nav className={styles.nav}>

                </nav>
            </AppLayout>
        </>
    )
}
