import { useState, useEffect } from 'react';

import './UsersTable.css';

type Users = {
    name: string
};

export const UsersTable = ({
    name
}: Users) => {

    const [totalUsers, setTotalUsers] = useState('');

    useEffect(() => {
        setTotalUsers((prev) => {
            return `${prev}, ${name}`;
        })
    }, [name]);

    return (
        <section>
            <ol>
                {totalUsers.split(',').map((name) => {
                    return (
                        <li key={name}>
                            <p>
                                {name}
                            </p>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
};