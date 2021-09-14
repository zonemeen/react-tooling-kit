import React from 'react'
import PropTypes from 'prop-types'
import { Unssuported } from './Unsupported'
import { Loading } from './Loading'

export const Viewer = props => {
    const {
        UnsupportedComponent,
        ErrorComponent,
        style,
        onError,
        isLoading,
    } = props

    if (isLoading) {
        return (
            <Loading
                ErrorComponent={ErrorComponent}
                onError={onError}
            />
        )
    }
    return (
        <Unssuported
            UnssuportedComponent={UnsupportedComponent}
            ErrorComponent={ErrorComponent}
            onError={onError}
            style={style}
            type={type}
        />
    )
}

const { func, element, object, bool } = PropTypes

Viewer.propTypes = {
    onError: func,
    ErrorComponent: element,
    UnsupportedComponent: element,
    style: object,
    isLoading: bool,
}

Viewer.defaultProps = {
    onError: () => null,
    ErrorComponent: null,
    UnsupportedComponent: null,
    style: null,
    isLoading: false,
}
