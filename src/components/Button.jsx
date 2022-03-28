import clsx from 'clsx'
import React from 'react'
import axios from 'axios'
import { saveAs } from 'file-saver'
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
      className={copied && `text-blue-600`}
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

export const BackButton = ({ ...props }) => {
  return (
    <Button {...props}>
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
      >
        <path
          d="M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112c-4.1 3.2-4.1 9.4 0 12.6l142 112c5.2 4.1 12.9 0.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z"
          p-id="4109"
        />
      </svg>
      <span className={clsx(`ml-1`)}>Back</span>
    </Button>
  )
}

export const DownloadButton = ({ fileName }) => {
  const [downloaded, setDownloaded] = React.useState(false)
  return (
    <Button
      onClick={async () => {
        setDownloaded(true)
        const { default: src } = await import(`@/assets/bookList/${fileName}`)
        const { data } = await axios.get(src, {
          responseType: 'blob',
        })
        saveAs(data, fileName)
        setDownloaded(false)
      }}
      className={downloaded && `text-blue-600 cursor-not-allowed`}
    >
      {downloaded ? (
        <svg
          className="animate-spin"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
        >
          <path
            fill="#2563EB"
            d="M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="1.1em"
          height="1.1em"
        >
          <path d="M505.7 661c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z" />
          <path d="M878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
        </svg>
      )}
      <span className={clsx(`ml-1`)}>
        {downloaded ? 'Downloading' : 'Download'}
      </span>
    </Button>
  )
}
