import React from 'react'
import { ErrorStyle } from '../styles/Error'

export const Error = ({ ErrorComponent }) => {
    return (
        <ErrorStyle>
            <div className='container'>
                {ErrorComponent ?
                    <ErrorComponent/> :
                    <p className='alert'>Unable to preview file</p>}
            </div>
        </ErrorStyle>
    )
}
