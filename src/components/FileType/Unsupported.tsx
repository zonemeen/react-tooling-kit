import React from 'react'

const Unsupported = (props: any) => (
  <div className="unsupported">
    {props.unsupportedComponent ? (
      <props.unsupportedComponent {...props} />
    ) : (
      <p>
        <b>{`${props.fileType}`}</b>
      </p>
    )}
  </div>
)

export default Unsupported
