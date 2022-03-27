import clsx from 'clsx'
import React from 'react'
import { copyTextToClipboard } from '../utils/copy'

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

export const CopyButton = ({ getValue }) => {
  const [copied, setCopied] = React.useState(false)
  return (
    <Button
      onClick={() => {
        copyTextToClipboard(getValue())
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      }}
      className={copied && `text-green-600`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
        />
      </svg>
      <span className={clsx(`ml-1`)}>{copied ? 'Copied!' : 'Copy'}</span>
    </Button>
  )
}
