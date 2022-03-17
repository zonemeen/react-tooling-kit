import React from 'react'

export const TwoColumns = ({ children }) => {
  return (
    <div className="md:grid md:grid-cols-2 divide-x md:min-h-screen">
      {children}
    </div>
  )
}

export const Column = ({ children, title, renderRight }) => {
  return (
    <div className="p-5">
      <header className="flex items-center justify-between">
        <span className="font-bold text-2xl">{title}</span>
        <div className="flex space-x-3 items-center">
          {renderRight && renderRight()}
        </div>
      </header>
      <div className="mt-5">{children}</div>
    </div>
  )
}
