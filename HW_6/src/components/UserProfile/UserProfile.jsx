import { useState, useEffect } from "react"
import axios from "axios"
import styles from "./UserProfile.module.css"


const UserProfile = () => {
        const [user, setUser] = useState(null)
        const [loading, setLoading] = useState(true)

        const fetchUser = async () => {
            try {
                setLoading(true)
                const response = await axios.get("https://randomuser.me/api")
                setUser(response.data.results[0])
                setLoading(false)
            } catch (error) {
                console.error("Error fetching user data:", error)
                setLoading(false)
            }
        }

        useEffect(() => {
            fetchUser()
        }, [])

        if (loading) {
            return <div className={styles.loading}>Loading...</div>
        }

        return (
            <div className={styles.userProfile}>
                {user && (
                    <>
                        <div className={styles.userHeader}>
                            <img
                                src={user.picture.large || "/placeholder.svg"}
                                alt={`${user.name.first} ${user.name.last}`}
                                className={styles.userImage}
                            />
                            <h2 className={styles.userName}>
                                {user.name.title} {user.name.first} {user.name.last}
                            </h2>
                        </div>

                        <div className={styles.userInfo}>
                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>
                            <p>
                                <strong>Phone:</strong> {user.phone}
                            </p>
                            <p>
                                <strong>Location:</strong> {user.location.city}, {user.location.country}
                            </p>
                            <p>
                                <strong>Age:</strong> {user.dob.age}
                            </p>
                        </div>

                        <button onClick={fetchUser} className={styles.loadButton}>
                            Load New User
                        </button>
                    </>
                )}
            </div>
        )



};
export default UserProfile;