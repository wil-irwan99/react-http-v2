import {useDeps} from "../../shared/DepContext"
import React, {useState} from 'react';

const LoginView = () => {
    const {loginService} = useDeps();
    const [result, setResult] = useState('');

    const PostLogin = async () => {
        try {
            const response = await loginService.login('wil', '123');
            window.localStorage.setItem('token', response.token)
            setResult(response.token);
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <button onClick={PostLogin}>Login</button>
            <p>{result}</p>
        </>
    )
}

export default LoginView;