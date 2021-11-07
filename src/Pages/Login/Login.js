import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || '/home';
    const { signInUsingGoogle } = useFirebase();
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(res => {
                console.log(res);
                history.push(redirect);
            })


    }
    return (
        <div >
            <h2 className="text-blue-900 text-5xl font-semibold mt-5">Please Log in</h2>
            <button onClick={handleGoogleSignIn} className="btn btn-secondary mx-3 my-5 p-2 mt-5 rounded-md">Google Sign In</button>

        </div>
    );
};

export default Login;