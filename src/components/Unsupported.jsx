import React from 'react'
import { UnsupportedStyle } from '../styles/Unsupported'

export const Unssuported = props => {
    const { UnssuportedComponent, type, style } = props
    return (
        <UnsupportedStyle>
            <div
                className='unssuported'
                style={style}
            >
                {UnssuportedComponent ?
                    <UnssuportedComponent/> : (
                        <p>
                            <b>{`.${type} `}</b>
                            is not supported.
                        </p>
                    )}
            </div>
        </UnsupportedStyle>
    )
}
