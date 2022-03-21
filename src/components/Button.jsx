import clsx from 'clsx'
import React from 'react'

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        `bg-gray-200 rounded-lg px-3 py-1 text-sm inline-flex items-center active:bg-blue-500 active:text-white`
      )}
    >
      {children}
    </button>
  )
}
