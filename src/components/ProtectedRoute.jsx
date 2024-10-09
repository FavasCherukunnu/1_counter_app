import { Navigate, Outlet } from 'react-router-dom';
import { getMe } from '../api/api';
import React from 'react';

export const ProtectedRoute = () => {
    const [me, setMe] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchMe = async () => {
            try {
                const response = await getMe();

                setMe(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMe();
    }, []);

    if (isLoading) return <div>Loading...</div>;

    if (!me || !me.success || !me.user) return <Navigate to="/official/login" />;

    return <Outlet />;
};
