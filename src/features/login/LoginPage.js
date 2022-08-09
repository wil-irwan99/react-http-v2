import { useAuth } from "../../shared/UseAuth";

const LoginPage = () => {
    const {onLogin} = useAuth();
    const handleLogin = () => {
        onLogin('wil')
    }
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginPage;