import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Notifications() {
    const [notifications, setNotifications] = useState([]);
    const userId = 'user-id-here'; // Replace with actual user ID

    useEffect(() => {
        axios.get(`/api/notifications/${userId}`)
            .then(response => setNotifications(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <main>
            <h1>Notifications</h1>
            <ul>
                {notifications.map(notification => (
                    <li key={notification._id}>{notification.message}</li>
                ))}
            </ul>
        </main>
    );
}

export default Notifications;
