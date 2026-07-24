import { useState, useCallback } from "react";

import { userApi } from "../api/userApi";

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await userApi.getUsers();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        users,
        loading,
        error,
        refetch: fetchUsers,
    };
};
