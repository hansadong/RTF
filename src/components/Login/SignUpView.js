import React, { useState } from 'react';
import axios from 'axios';

function SignUpFormSubmitComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleClick = async () => {
        setLoading(true);

        try {
            const response = await axios.get('API URL');
            setData(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div></div>
    );
}

export default SignUpFormSubmitComponent;