import { useState } from "react"
import AppLayout from "../../../components/AppLayout"
import Button from "../../../components/Button"
import styles from "./tweet.module.css"
import useUser from "../../../hooks/useUser"

import { addDevit } from '../../../firebase/client'

export default function ComposeTweet() {
    const user = useUser()
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setMessage(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addDevit({
            avatar: user.avatar,
            content: message,
            userId: user.uid,
            userName: user.username
        })
    }

    return (
        <AppLayout>
            <form onSubmit={handleSubmit}>
                <textarea onChange={handleChange} className={styles.textarea}
                    placeholder="Que esta pasando?"
                    value={message}
                ></textarea>
                <div className={styles.div}>
                    <Button
                        disabled={!message.length}
                    >Devtwittear</Button>
                </div>
            </form>
        </AppLayout>
    )
}
