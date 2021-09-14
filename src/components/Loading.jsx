import React from 'react'
import { LoadingStyle } from '../styles/Loading'

export const Loading = () => {
    return (
        <LoadingStyle>
            <div className='container'>
                <span className='loader'/>
            </div>
        </LoadingStyle>
    )
}
