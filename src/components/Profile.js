import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
    const [user, setUser] = useState({});
    const userId = 'user-id-here'; // Replace with actual user ID

    useEffect(() => {
        axios.get(`/api/profile/${userId}`)
            .then(response => setUser(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/profile/${userId}`, user)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    };

    return (
        <main>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={user.email || ''} onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={user.password || ''} onChange={handleChange} />
                </label>
                <button type="submit">Update</button>
            </form>
        </main>
    );
}

export default Profile;
