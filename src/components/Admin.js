import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
    const [users, setUsers] = useState([]);
    const [tariffs, setTariffs] = useState([]);
    const [addons, setAddons] = useState([]);

    useEffect(() => {
        axios.get('/api/admin/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));

        axios.get('/api/admin/tariffs')
            .then(response => setTariffs(response.data))
            .catch(error => console.error(error));

        axios.get('/api/admin/addons')
            .then(response => setAddons(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <main>
            <h1>Admin Dashboard</h1>
            <section>
                <h2>Users</h2>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>{user.email}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Tariffs</h2>
                <ul>
                    {tariffs.map(tariff => (
                        <li key={tariff._id}>{tariff.name}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Add-ons</h2>
                <ul>
                    {addons.map(addon => (
                        <li key={addon._id}>{addon.name}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Admin;
