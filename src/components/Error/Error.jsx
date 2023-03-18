import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h3>Oops!</h3>
            <p>Something Went Wrong!404</p>
            <p>
                <i>
                    {
                        error.statusText || error.message
                    }
                </i>
            </p>
        </div>
    );
};

export default Error;