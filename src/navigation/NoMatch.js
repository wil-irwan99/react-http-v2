import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const NoMatch = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>I cant find a your requested page</h2>
            <button onClick={() => {
                navigate('/');
            }}>GO back
            </button>
        </div>
    )
}

export default NoMatch