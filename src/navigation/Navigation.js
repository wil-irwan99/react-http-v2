import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../shared/UseAuth'

const Navigation = () => {
    const {onLogout} = useAuth();
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{
                width: '30%',
                backgroundColor: 'green',
                height: '100vh', display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '8px'
            }}>
                <h2 className='title'>Navigation</h2>
                <Link to='page1'>Page 1</Link>
                <Link to='page2'>Page 2</Link>
                <button onClick={onLogout}>Logout</button>
            </div>
            <div style={{ padding: '8px' }}>
                <Outlet />
            </div>
        </div>

    )
}

export default Navigation