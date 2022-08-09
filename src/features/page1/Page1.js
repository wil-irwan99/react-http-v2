import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Page1 = () => {
    useEffect(() => {
        return () => {
            console.log('unmounting to =page1');
        }
    })
    const navigate = useNavigate();
    return (
        <>
            <h2>
                {/* Dry=dont repeat yourself */}
                Page1
            </h2>
            <button onClick={() => {
                navigate('child1-1');
            }}>To child 1
            </button>
            <button onClick={() => {
                navigate('child1-2');
            }}>To child 2
            </button>
            <Outlet />
        </>

    )
}

export default Page1